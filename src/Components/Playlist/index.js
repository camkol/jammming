import React from "react";
import "./Playlist.css";
import TrackList from "../TrackList";

export default function Playlist({ playlistName, playlistTracks, onRemove }) {
  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"} />
      <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true} />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}
