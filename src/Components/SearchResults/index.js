import React from "react";
import "./SearchResults.css";
import TrackList from "../TrackList";

export default function SearchResults({ tracks, addTracks }) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList moveTracks={addTracks} tracks={tracks} />
    </div>
  );
}
