import React, { useState } from "react";

const ExampleBgColor = () => {
  return (
    <>
        <ExampleOne/>
    </>
  )
};

export default ExampleBgColor;

function ExampleOne() {
  const [color, setCouseStatelor] = ("#10b981");
  const boxStyle = {
    height: "200px",
    width: "100%",
    maxWidth: "500px",
    margin: "2rem auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: "1.5rem",
    backgroundColor: color,
    borderRadius: "12px",
    transition: "background-color 0.4s ease",
  };
  return (
    <>
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>ReactJS: background-color Control</h2>

        <div style={boxStyle}>
          Background Color: <code>{color}</code>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <label htmlFor="colorPicker">Pick a color: </label>
          <input
            id="colorPicker"
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            style={{
              marginLeft: "0.5rem",
              height: "2rem",
              width: "3rem",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </>
  );
}
