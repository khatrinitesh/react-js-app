import React, { useState } from "react";
import "./index.css";

const ExampleBackFaceVisibility = () => {
  return(
    <>
    <ExampleOne/>
    </>
  )
};

export default ExampleBackFaceVisibility;

function ExampleOne() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isBackfaceVisible, setIsBackfaceVisible] = useState(false);

  return (
    <>
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>ReactJS Flip Card Example</h2>

        <div
          className={`card-container ${isFlipped ? "flipped" : ""}`}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div
            className="card"
            style={{
              backfaceVisibility: isBackfaceVisible ? "visible" : "hidden",
              WebkitBackfaceVisibility: isBackfaceVisible
                ? "visible"
                : "hidden",
            }}
          >
            <div className="card-front">Front</div>
            <div className="card-back">Back</div>
          </div>
        </div>

        <label style={{ marginTop: "1rem", display: "block" }}>
          <input
            type="checkbox"
            checked={isBackfaceVisible}
            onChange={(e) => setIsBackfaceVisible(e.target.checked)}
          />{" "}
          Show Backface on Flip
        </label>
      </div>
    </>
  );
}
