import React from "react";
import "./Playlist.css";
import TrackList from "../TrackList";

export default function Playlist({ tracks, removeTracks }) {
  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"} />
      <TrackList songs={tracks} moveTracks={removeTracks}>
        -
      </TrackList>
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}
