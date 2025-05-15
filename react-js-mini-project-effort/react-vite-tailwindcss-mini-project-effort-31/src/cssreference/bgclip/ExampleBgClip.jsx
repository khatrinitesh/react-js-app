import React, { useState } from "react";

const ExampleBgClip = () => {
  return(
    <>
    <ExampleOne/>
    </>
  )
};

export default ExampleBgClip;

function ExampleOne() {
  const [clipType, setClipType] = useState("border-box");

  const boxStyle = {
    border: "10px dashed #333",
    padding: "2rem",
    margin: "2rem auto",
    width: "90%",
    maxWidth: "500px",
    backgroundColor: "#f43f5e", // rose-500
    backgroundImage: "linear-gradient(45deg, #0ea5e9, #8b5cf6)", // cyan to violet
    backgroundClip: clipType !== "text" ? clipType : undefined,
    WebkitBackgroundClip: clipType === "text" ? "text" : undefined,
    color: clipType === "text" ? "transparent" : "#fff",
    WebkitTextFillColor: clipType === "text" ? "transparent" : undefined,
    fontSize: "1.5rem",
    textAlign: "center",
    transition: "all 0.3s ease",
  };
  return (
    <>
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>ReactJS: background-clip Property</h2>

        <div style={boxStyle}>
          <p>
            {clipType === "text" ? "Gradient in Text!" : `Clip: ${clipType}`}
          </p>
        </div>

        <label>
          Choose background-clip:
          <select
            value={clipType}
            onChange={(e) => setClipType(e.target.value)}
            style={{ marginLeft: "0.5rem" }}
          >
            <option value="border-box">border-box (default)</option>
            <option value="padding-box">padding-box</option>
            <option value="content-box">content-box</option>
            <option value="text">text (with gradient text)</option>
          </select>
        </label>
      </div>
    </>
  );
}
