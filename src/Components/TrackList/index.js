import React from "react";
import "./TrackList.css";
import Track from "../Track";

export default function TrackList({ moveTracks, songs, children }) {
  return (
    <div className="TrackList">
      {songs.map((song) => (
        <Track
          key={song.id}
          song={song}
          moveTracks={moveTracks}
          children={children}
        />
      ))}
    </div>
  );
}
