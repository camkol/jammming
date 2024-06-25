import React from "react";
import "./Playlist.css";
import TrackList from "../TrackList";

export default function Playlist({
  playlistName,
  playlistTracks,
  onRemove,
  onNameChange,
}) {
  const handleNameChange = (e) => {
    onNameChange(e.target.value);
  };
  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"} onChange={handleNameChange} />
      <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true} />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}
