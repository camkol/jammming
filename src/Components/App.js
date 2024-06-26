import React, { useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Playlist from "./Playlist";
const tracks = [
  // Each object represents a song with properties like id, title, artist, duration, and source URL

  {
    id: 0,
    name: "Basket Case",
    artist: "Green Day",
    album: "Dookie",
  },
  {
    id: 1,
    name: "Here is the House",
    artist: "Andain",
    album: "Bloom",
  },
  {
    id: 2,
    name: "Like A Stone",
    artist: "Audioslave",
    album: "Audioslave",
  },
  {
    id: 3,
    name: "Money Trees (Feat. Jay Rock)",
    artist: "Kendrick Lamar",
    album: "good kid, m.A.A.d city",
  },
  {
    id: 4,
    name: "One In A Million (Radio Edit)",
    artist: "Andrew Rayel Ft. Jonathan Mendelsohn",
    album: "Andrew Rayel Mini Mix",
  },
  {
    id: 5,
    name: "Outside",
    artist: "Staind",
    album: "Break the Cycle",
  },
  {
    id: 6,
    name: "Pain",
    artist: "Jimmy Eat World",
    album: "Futures",
  },
  {
    id: 7,
    name: "Spiders",
    artist: "System Of A Down",
    album: "System Of A Down",
  },
  {
    id: 8,
    name: "Stir It Up",
    artist: "Bob Marley & The Wailers",
    album: "Catch A Fire",
  },
  {
    id: 9,
    name: "T.N.T.",
    artist: "AC/DC",
    album: "High Voltage",
  },
];
function App() {
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  function handleAddTracks(track) {
    if (playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }

    setPlaylistTracks((tracks) => [...tracks, track]);
    console.log(track);
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

  function handleSearch(search) {
    console.log(search);
  }

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar onSearch={handleSearch} />
        <div className="App-playlist">
          <SearchResults onAdd={handleAddTracks} tracks={tracks} />
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
