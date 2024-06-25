import React from "react";
import "./Track.css";

export default function Track({ moveTracks, song, children }) {
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{song.title}</h3>
        <p>
          {song.artist} | {song.album}
        </p>
      </div>
      <button onClick={() => moveTracks(song)} className="Track-action">
        {children}
      </button>
    </div>
  );
}
