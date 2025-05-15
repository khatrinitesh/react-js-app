import React, { useState } from "react";

const ExampleBoxShadow = () => {
  return (
    <>
      <ExampleOne />
    </>
  );
};

export default ExampleBoxShadow;

function ExampleOne() {
  const [offsetX, setOffsetX] = useState(10);
  const [offsetY, setOffsetY] = useState(10);
  const [blur, setBlur] = useState(15);
  const [spread, setSpread] = useState(0);
  const [color, setColor] = useState("rgba(0,0,0,0.3)");

  const boxStyle = {
    width: "200px",
    height: "200px",
    backgroundColor: "#60a5fa", // blue-400
    margin: "2rem auto",
    boxShadow: `${offsetX}px ${offsetY}px ${blur}px ${spread}px ${color}`,
    transition: "box-shadow 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    color: "#fff",
  };
  return (
    <>
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>
          ReactJS: <code>box-shadow</code> Example
        </h2>
        <div style={boxStyle}>Shadow</div>

        <div style={{ maxWidth: "400px", margin: "0 auto", textAlign: "left" }}>
          <label>Offset X: {offsetX}px</label>
          <input
            type="range"
            min="-50"
            max="50"
            value={offsetX}
            onChange={(e) => setOffsetX(Number(e.target.value))}
          />

          <label>Offset Y: {offsetY}px</label>
          <input
            type="range"
            min="-50"
            max="50"
            value={offsetY}
            onChange={(e) => setOffsetY(Number(e.target.value))}
          />

          <label>Blur Radius: {blur}px</label>
          <input
            type="range"
            min="0"
            max="50"
            value={blur}
            onChange={(e) => setBlur(Number(e.target.value))}
          />

          <label>Spread Radius: {spread}px</label>
          <input
            type="range"
            min="-20"
            max="20"
            value={spread}
            onChange={(e) => setSpread(Number(e.target.value))}
          />

          <label>Shadow Color:</label>
          <input type="color" onChange={(e) => setColor(e.target.value)} />
        </div>
      </div>
    </>
  );
}
