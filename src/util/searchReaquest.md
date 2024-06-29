### Spotify.js

Here are the changes and improvements:

1. Ensure you correctly handle the response to avoid errors.
2. Check if the `accessToken` is obtained before making the search request.
3. Correct the mapping of the response JSON to the array of tracks.

### Updated Spotify.js

```javascript
const clientID = "YOUR_SPOTIFY_CLIENT_ID";
const redirectUri = "https://jammming624.netlify.app/callback";

let accessToken;

export const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    // Check for access token match in the URL
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);

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
    const accessToken = this.getAccessToken();
    const url = `https://api.spotify.com/v1/search?type=track&q=${term}`;
    return fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Fetch failed");
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
};

export default Spotify;
```

### App.js

Ensure the search results update correctly and handle asynchronous updates properly.

### Updated App.js

```javascript
import React, { useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Playlist from "./Playlist";
import { Spotify } from "../util/Spotify";

function App() {
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  function handleAddTracks(track) {
    if (playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }

    setPlaylistTracks((tracks) => [...tracks, track]);
  }

  function handleRemoveTrack(track) {
    setPlaylistTracks((tracks) =>
      tracks.filter((savedtrack) => savedtrack.id !== track.id)
    );
  }

  function handleUpdatePlaylistName(name) {
    setPlaylistName(name);
  }

  function handleSavePlaylist() {
    const trackURIs = playlistTracks.map((track) => track.uri);
    console.log(trackURIs);
    setPlaylistName("New Playlist");
    setPlaylistTracks([]);
  }

  function handleSearch(term) {
    Spotify.search(term).then((tracks) => {
      setSearchResults(tracks);
    });
  }

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar onSearch={handleSearch} />
        <div className="App-playlist">
          <SearchResults onAdd={handleAddTracks} tracks={searchResults} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={handleRemoveTrack}
            onNameChange={handleUpdatePlaylistName}
            onSave={handleSavePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
```

### Explanation of Key Parts

1. **Spotify.js:**

   - The `search` method starts by obtaining the `accessToken` using the `getAccessToken` method.
   - It makes a GET request to the Spotify search endpoint with the appropriate headers.
   - It processes the response, converting it to JSON and mapping it to an array of track objects.

2. **App.js:**
   - State management hooks (`useState`) are used to manage playlist name, tracks, and search results.
   - `handleSearch` calls `Spotify.search` and updates the `searchResults` state with the fetched tracks.
   - Components `SearchBar`, `SearchResults`, and `Playlist` are used to handle user interactions and display data.

### Testing the Flow

1. **Search for Tracks:**

   - Enter a search term in the search bar and click the search button.
   - The `handleSearch` function will be called, triggering the `Spotify.search` method.
   - The `searchResults` state will be updated with the fetched tracks and displayed in the `SearchResults` component.

2. **Add Tracks to Playlist:**

   - Click the "+" button on a track in the search results to add it to the playlist.
   - The `handleAddTracks` function ensures that duplicate tracks are not added.

3. **Remove Tracks from Playlist:**

   - Click the "-" button on a track in the playlist to remove it.
   - The `handleRemoveTrack` function updates the playlist by filtering out the removed track.

4. **Save Playlist:**
   - Click the "SAVE TO SPOTIFY" button to save the playlist.
   - The `handleSavePlaylist` function logs the URIs of the tracks in the playlist and resets the playlist state.

This should complete the implementation for searching tracks using the Spotify API and managing the playlist in your app.
