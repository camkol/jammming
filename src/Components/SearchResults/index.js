import React from "react";
import "./SearchResults.css";
import TrackList from "../TrackList";

export default function SearchResults({ songs }) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList songs={songs}>+</TrackList>
    </div>
  );
}
