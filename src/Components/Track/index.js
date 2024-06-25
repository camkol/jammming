import React from "react";
import "./Track.css";

export default function Track({ song, isRemoval, onAdd, onRemove }) {
  const addTrack = (track) => {
    onAdd(track);
  };
  const removeTrack = (track) => {
    onRemove(track);
  };
  const renderAction = () => {
    return (
      <button
        className="Track-action"
        onClick={isRemoval ? () => removeTrack(song) : () => addTrack(song)}
      >
        {isRemoval ? "-" : "+"}
      </button>
    );
  };
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{song.name}</h3>
        <p>
          {song.artist} | {song.album}
        </p>
      </div>

      {renderAction()}
    </div>
  );
}
