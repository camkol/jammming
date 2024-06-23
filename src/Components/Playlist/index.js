import React from "react";
import "./Playlist.css";
import TrackList from "../TrackList";

export default function Playlist({ songs }) {
  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"} />
      <TrackList songs={songs}>-</TrackList>
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}
