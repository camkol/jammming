import React from "react";
import "./Playlist.css";
import TrackList from "../TrackList";

export default function Playlist({ tracks }) {
  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"} />
      <TrackList songs={tracks}>-</TrackList>
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}
