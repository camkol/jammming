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
  const [playlistName, setPlaylistName] = useState("");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  function handleAddTracks(track) {
    if (playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }

    setPlaylistTracks((tracks) => [...tracks, track]);
    console.log(track);
  }

  function handleDeleteTrack(track) {
    setPlaylistTracks((tracks) =>
      tracks.filter((savedtrack) => savedtrack.id !== track.id)
    );
  }

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults addTracks={handleAddTracks} tracks={tracks} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            removeTracks={handleDeleteTrack}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
