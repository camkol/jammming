import React, { useState } from "react";
import "./Track.css";

export default function Track({ moveTracks, song }) {
  const [isRemoval, setIsRemoval] = useState(false);
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{song.name}</h3>
        <p>
          {song.artist} | {song.album}
        </p>
      </div>
      <button onClick={() => moveTracks(song)} className="Track-action">
        {isRemoval ? "-" : "+"}{" "}
      </button>
    </div>
  );
}
