import React, { useState } from "react";

const ExampleBgRepeat = () => {
  return (
    <>
    <ExampleOne/>
    </>
  )
};

export default ExampleBgRepeat;

function ExampleOne() {
  const [repeatType, setRepeatType] = useState("repeat");

  const boxStyle = {
    width: "90%",
    maxWidth: "500px",
    height: "250px",
    margin: "2rem auto",
    border: "5px solid #4b5563",
    backgroundColor: "#93c5fd", // blue-300
    backgroundImage: "url('https://placehold.co/600x400/EEE/31343C')",
    backgroundRepeat: repeatType,
    backgroundPosition: "center",
    backgroundSize: "60px 60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#1f2937",
    fontWeight: "bold",
    transition: "all 0.3s ease",
  };
  return (
    <>
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>
          ReactJS: <code>background-repeat</code> Example
        </h2>

        <div style={boxStyle}>
          <p>
            Repeat: <code>{repeatType}</code>
          </p>
        </div>

        <label htmlFor="repeatSelect">Choose repeat type: </label>
        <select
          id="repeatSelect"
          value={repeatType}
          onChange={(e) => setRepeatType(e.target.value)}
          style={{ marginLeft: "0.5rem" }}
        >
          <option value="repeat">repeat (default)</option>
          <option value="repeat-x">repeat-x</option>
          <option value="repeat-y">repeat-y</option>
          <option value="no-repeat">no-repeat</option>
          <option value="space">space</option>
          <option value="round">round</option>
        </select>
      </div>
    </>
  );
}
