import React from "react";
import "./TrackList.css";
import Track from "../Track";

export default function TrackList({ tracks, isRemoval, onAdd, onRemove }) {
  return (
    <div className="TrackList">
      {tracks.map((song) => (
        <Track
          key={song.id}
          song={song}
          isRemoval={isRemoval}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}
