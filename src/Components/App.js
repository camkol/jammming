import React from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Playlist from "./Playlist";

const allSongs = [
  // Each object represents a song with properties like id, title, artist, duration, and source URL

  {
    id: 0,
    title: "Basket Case",
    artist: "Green Day",
    duration: "3:01",
    src: "music/Basket Case.mp3",
  },
  {
    id: 1,
    title: "Here is the House",
    artist: "Andain",
    duration: "4:52",
    src: "music/Here is the House.mp3",
  },
  {
    id: 2,
    title: "Like A Stone",
    artist: "Audioslave",
    duration: "4:54",
    src: "music/Like A Stone.mp3",
  },
  {
    id: 3,
    title: "Money Trees (Feat. Jay Rock)",
    artist: "Kendrick Lamar",
    duration: "6:26",
    src: "music/Money Trees (Feat. Jay Rock).mp3",
  },
  {
    id: 4,
    title: "One In A Million (Radio Edit)",
    artist: "Andrew Rayel Ft. Jonathan Mendelsohn",
    duration: "3:09",
    src: "music/One In A Million (Radio Edit).mp3",
  },
  {
    id: 5,
    title: "Outside",
    artist: "Staind",
    duration: "4:52",
    src: "music/Outside.mp3",
  },
  {
    id: 6,
    title: "Pain",
    artist: "Jimmy Eat World",
    duration: "3:01",
    src: "music/Pain.mp3",
  },
  {
    id: 7,
    title: "Spiders",
    artist: "System Of A Down",
    duration: "3:35",
    src: "music/Spiders.mp3",
  },
  {
    id: 8,
    title: "Stir It Up",
    artist: "Bob Marley",
    duration: "5:32",
    src: "music/Stir It Up.mp3",
  },
  {
    id: 9,
    title: "T.N.T.",
    artist: "AC/DC",
    duration: "3:47",
    src: "music/T.N.T..mp3",
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
          <SearchResults />
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;
