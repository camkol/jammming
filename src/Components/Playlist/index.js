import React from "react";
import "./Playlist.css";
import TrackList from "../TrackList";

export default function Playlist({
  playlistName,
  playlistTracks,
  removeTracks,
}) {
  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"} />
      <TrackList tracks={playlistTracks} moveTracks={removeTracks} />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}
