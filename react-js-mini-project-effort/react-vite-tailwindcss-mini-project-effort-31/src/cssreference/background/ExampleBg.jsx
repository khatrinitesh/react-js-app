import React, { useState } from "react";

const ExampleBg = () => {
  return (
    <>
    <Example/>
    </>
  )
};

export default ExampleBg;

function Example() {
  const [bgType, setBgType] = useState("color");

  const backgroundStyles = {
    color: "#fff",
    textAlign: "center",
    padding: "4rem 1rem",
    borderRadius: "12px",
    transition: "background 0.5s ease",
    ...(bgType === "color"
      ? {
          background: "linear-gradient(to right, #3b82f6, #06b6d4)",
        }
      : bgType === "image"
      ? {
          background: `url("https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=800&q=80") center/cover no-repeat`,
        }
      : {
          background: "#111", // fallback
        }),
  };

  return(
    <>
     <div style={{ padding: "2rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
        ReactJS Background Property Example
      </h2>

      <div style={backgroundStyles}>
        <h3>Dynamic Background: {bgType}</h3>
        <p>This box changes background based on selection.</p>
      </div>

      <div style={{ marginTop: "1rem", textAlign: "center" }}>
        <label>
          <input
            type="radio"
            name="bgType"
            value="color"
            checked={bgType === "color"}
            onChange={() => setBgType("color")}
          />{" "}
          Gradient Color
        </label>
        {"  "}
        <label>
          <input
            type="radio"
            name="bgType"
            value="image"
            checked={bgType === "image"}
            onChange={() => setBgType("image")}
          />{" "}
          Background Image
        </label>
        {"  "}
        <label>
          <input
            type="radio"
            name="bgType"
            value="none"
            checked={bgType === "none"}
            onChange={() => setBgType("none")}
          />{" "}
          No Background
        </label>
      </div>
    </div>
    </>
  )
}
