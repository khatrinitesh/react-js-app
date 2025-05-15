import React, { useState } from "react";

const ExampleBreakInside = () => {
  return (
    <>
    <Example/>
    </>
  )
};

export default ExampleBreakInside;

function Example() {
  const [breakValue, setBreakValue] = useState("auto");
  const containerStyle = {
    columnCount: 2,
    columnGap: "30px",
    padding: "2rem",
    backgroundColor: "#f9fafb",
  };

  const itemStyle = {
    backgroundColor: "#34d399", // green-400
    padding: "1rem",
    marginBottom: "1rem",
    breakInside: breakValue,
  };
  return (
    <>
      <div style={{ padding: "2rem" }}>
        <h2>
          ReactJS: <code>break-inside</code> Example
        </h2>

        <label htmlFor="breakSelect">Choose break-inside value:</label>
        <select
          id="breakSelect"
          value={breakValue}
          onChange={(e) => setBreakValue(e.target.value)}
          style={{ marginLeft: "0.5rem" }}
        >
          <option value="auto">auto</option>
          <option value="avoid">avoid</option>
        </select>

        <div style={containerStyle}>
          {[...Array(6)].map((_, index) => (
            <div key={index} style={itemStyle}>
              <p>
                <strong>Item {index + 1}</strong>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
                metus ac nulla consequat aliquet id quis turpis.
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
