let accessToken;
const clientID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const redirectUri = "https://jammming624.netlify.app/";

export const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    // Check access token and expiration time in the URL
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);

      // Clear access token from the URL
      // Set a timeout to clear the access token after it expires
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      // Clear the parameters from the URL
      window.history.pushState("Access Token", null, "/");

      return accessToken;
    } else {
      // Redirect to Spotify authorization
      const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = authUrl;
    }
  },

  search(term) {
    const token = this.getAccessToken();
    const url = `https://api.spotify.com/v1/search?type=track&q=${term}`;
    return fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Fetch Failed");
        }
        return response.json();
      })
      .then((jsonResponse) => {
        if (!jsonResponse.tracks) {
          return [];
        }
        return jsonResponse.tracks.items.map((track) => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri,
        }));
      });
  },

  async savePlaylist(name, trackURIs) {
    if (!name || !trackURIs.length) {
      return;
    }

    const token = this.getAccessToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    let userID;

    try {
      const response = await fetch("https://api.spotify.com/v1/me", {
        headers,
      });
      const jsonResponse = await response.json();
      userID = jsonResponse.id;
    } catch (err) {
      console.error("Failed to get user ID:", err);
      return;
    }

    let playlistID;

    try {
      const response = await fetch(
        `https://api.spotify.com/v1/users/${userID}/playlists`,
        {
          method: "POST",
          headers: headers,
          body: JSON.stringify({ name }),
        }
      );
      const jsonResponse = await response.json();
      playlistID = jsonResponse.id;
    } catch (err) {
      console.error("Failed to create playlist:", err);
      return;
    }

    try {
      await fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({ uris: trackURIs }),
      });
    } catch (err) {
      console.error("Failed to add tracks to playlist:", err);
    }
  },
};
