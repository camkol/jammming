import React from "react";
import "./TrackList.css";
import Track from "../Track";

export default function TrackList({children}) {
  return (
    <div className="TrackList">
      <Track children={children} />
    </div>
  );
}
