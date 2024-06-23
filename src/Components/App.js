import React from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Playlist from "./Playlist";
const songs = [
  // Each object represents a song with properties like id, title, artist, duration, and source URL

  {
    id: 0,
    title: "Basket Case",
    artist: "Green Day",
    album: "Dookie",
  },
  {
    id: 1,
    title: "Here is the House",
    artist: "Andain",
    album: "Bloom",
  },
  {
    id: 2,
    title: "Like A Stone",
    artist: "Audioslave",
    album: "Audioslave",
  },
  {
    id: 3,
    title: "Money Trees (Feat. Jay Rock)",
    artist: "Kendrick Lamar",
    album: "good kid, m.A.A.d city",
  },
  {
    id: 4,
    title: "One In A Million (Radio Edit)",
    artist: "Andrew Rayel Ft. Jonathan Mendelsohn",
    album: "Andrew Rayel Mini Mix",
  },
  {
    id: 5,
    title: "Outside",
    artist: "Staind",
    album: "Break the Cycle",
  },
  {
    id: 6,
    title: "Pain",
    artist: "Jimmy Eat World",
    album: "Futures",
  },
  {
    id: 7,
    title: "Spiders",
    artist: "System Of A Down",
    album: "System Of A Down",
  },
  {
    id: 8,
    title: "Stir It Up",
    artist: "Bob Marley & The Wailers",
    album: "Catch A Fire",
  },
  {
    id: 9,
    title: "T.N.T.",
    artist: "AC/DC",
    album: "High Voltage",
  },
];
function App() {
  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults songs={songs} />
          <Playlist songs={songs} />
        </div>
      </div>
    </div>
  );
}

export default App;
