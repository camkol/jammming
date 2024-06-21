import React from "react";
import "./Playlist.css";
import TrackList from "../TrackList";

export default function Playlist() {
  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"} />
      <TrackList>-</TrackList>
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}
