import React, { useState } from "react";

const ExampleAspectRatio = () => {
  return (
    <>
    <ExampleOne/>
    </>
  )
};

export default ExampleAspectRatio;

function ExampleOne() {
  const [ratio, setRatio] = useState("16/9");

  const boxStyle = {
    aspectRatio: ratio,
    backgroundColor: "#60a5fa",
    width: "100%", // Width is fixed, height adjusts according to aspect ratio
    maxWidth: "500px",
    margin: "auto",
    borderRadius: "8px",
    border: "2px solid #2563eb",
  };
  return (
    <>
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Dynamic Aspect Ratio Box</h2>

        <div style={boxStyle}></div>

        <div style={{ marginTop: "1rem" }}>
          <label htmlFor="aspect" style={{ marginRight: "0.5rem" }}>
            Choose Aspect Ratio:
          </label>
          <select
            id="aspect"
            value={ratio}
            onChange={(e) => setRatio(e.target.value)}
          >
            <option value="1 / 1">1:1 (Square)</option>
            <option value="4 / 3">4:3</option>
            <option value="16 / 9">16:9</option>
            <option value="21 / 9">21:9</option>
          </select>
        </div>
      </div>
    </>
  );
}
