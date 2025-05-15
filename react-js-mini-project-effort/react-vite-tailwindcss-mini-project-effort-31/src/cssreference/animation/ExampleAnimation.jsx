import React, { useState } from "react";
import './animation.css';

const ExampleAnimation = () => {
  return (
    <>
    <ExampleOne/>
    </>
  )
};

export default ExampleAnimation;

function ExampleOne() {
  const [animationPlayState, setAnimationPlayState] = useState("running");

  const animationStyles = {
    animationName: "bounce",
    animationDuration: "2s",
    animationTimingFunction: "ease-in-out",
    animationDelay: "0.5s",
    animationIterationCount: 3,
    animationDirection: "alternate",
    animationFillMode: "forwards",
    animationPlayState: animationPlayState,
  };
  return (
    <>
    <div style={{ padding: "1rem" }}>
      <div
        style={{
          ...animationStyles,
          width: "80px",
          height: "80px",
          backgroundColor: "#3b82f6",
          borderRadius: "8px",
        }}
      />

      <button
        onClick={() =>
          setAnimationPlayState((prev) => (prev === "running" ? "paused" : "running"))
        }
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#10b981",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {animationPlayState === "running" ? "Pause" : "Play"} Animation
      </button>
    </div>
    </>
  )
}
