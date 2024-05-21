import React from "react";
import "./SearchResults.css";
import TrackList from "../TrackList";

export default function SearchResults() {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList />
    </div>
  );
}
