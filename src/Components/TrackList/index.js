import React from "react";
import "./TrackList.css";
import Track from "../Track";

export default function TrackList({ moveTracks, tracks }) {
  return (
    <div className="TrackList">
      {tracks.map((song) => (
        <Track key={song.id} song={song} moveTracks={moveTracks} />
      ))}
    </div>
  );
}
