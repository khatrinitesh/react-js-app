import React, { useState } from "react";

const ExampleBreakAfter = () => {
  return (
    <>
    <Example/>
    </>
  )
};

export default ExampleBreakAfter;

function Example() {
  const [breakValue, setBreakValue] = useState("auto");

  const containerStyle = {
    columnCount: 2,
    columnGap: "40px",
    padding: "2rem",
    backgroundColor: "#f0f0f0",
  };

  const itemStyle = {
    backgroundColor: "#93c5fd", // blue-300
    padding: "1rem",
    marginBottom: "1rem",
    breakAfter: breakValue,
  };
  return (
    <>
      <div style={{ padding: "2rem" }}>
        <h2>
          ReactJS: <code>break-after</code> Example
        </h2>

        <label htmlFor="breakSelect">Choose break-after value:</label>
        <select
          id="breakSelect"
          value={breakValue}
          onChange={(e) => setBreakValue(e.target.value)}
          style={{ marginLeft: "0.5rem" }}
        >
          <option value="auto">auto</option>
          <option value="avoid">avoid</option>
          <option value="always">always</option>
          <option value="column">column</option>
          <option value="page">page</option>
        </select>

        <div style={containerStyle}>
          <div style={{ ...itemStyle }}>Item 1</div>
          <div style={{ ...itemStyle }}>Item 2 (break-after: {breakValue})</div>
          <div style={{ ...itemStyle }}>Item 3</div>
          <div style={{ ...itemStyle }}>Item 4</div>
        </div>
      </div>
    </>
  );
}
