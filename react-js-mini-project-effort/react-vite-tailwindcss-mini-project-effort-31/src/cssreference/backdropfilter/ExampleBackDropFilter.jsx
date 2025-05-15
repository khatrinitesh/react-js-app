import React, { useState } from "react";

const ExampleBackDropFilter = () => {
  return (
    <>
    <ExampleOne/>
    </>
  )
};

export default ExampleBackDropFilter;

function ExampleOne() {
  const [filter, setFilter] = useState("blur(8px)");

  const containerStyle = {
    position: "relative",
    height: "300px",
    backgroundImage:
      "url('https://img.freepik.com/free-photo/city-mumbai-with-text_23-2150907706.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const overlayStyle = {
    backdropFilter: filter,
    WebkitBackdropFilter: filter, // Safari support
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: "2rem",
    borderRadius: "12px",
    color: "#fff",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  };
  return (
    <>
      <div style={{ padding: "2rem" }}>
        <h2 style={{ marginBottom: "1rem" }}>
          ReactJS Backdrop Filter Example
        </h2>

        <div style={containerStyle}>
          <div style={overlayStyle}>
            <h3>Frosted Glass Panel</h3>
            <p>
              Current Filter: <code>{filter}</code>
            </p>
          </div>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <label htmlFor="filter">Choose a backdrop filter: </label>
          <select
            id="filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="blur(8px)">Blur</option>
            <option value="brightness(0.5)">Brightness</option>
            <option value="contrast(200%)">Contrast</option>
            <option value="grayscale(100%)">Grayscale</option>
            <option value="saturate(150%)">Saturate</option>
          </select>
        </div>
      </div>
    </>
  );
}
