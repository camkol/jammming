import React from "react";
import "./Track.css";

export default function Track({ children }) {
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>Track Name</h3>
        <p>Track Artist | Track Album</p>
      </div>
      <button className="Track-action">{children} </button>
    </div>
  );
}
