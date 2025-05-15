import React, { useState } from 'react';

const ExampleBgOrigin = () => {
  return (
    <>
      <ExampleOne/>
    </>
  );
}

export default ExampleBgOrigin;

function ExampleOne() {
     const [origin, setOrigin] = useState("padding-box");

  const boxStyle = {
    width: "90%",
    maxWidth: "500px",
    height: "250px",
    padding: "2rem",
    margin: "2rem auto",
    border: "10px dashed #111",
    backgroundColor: "#facc15", // yellow-400
    backgroundImage: "url('https://via.placeholder.com/150')",
    backgroundRepeat: "no-repeat",
    backgroundOrigin: origin,
    backgroundSize: "150px 150px",
    backgroundPosition: "top left",
    color: "#111",
    fontSize: "1.2rem",
    fontWeight: "bold",
    transition: "all 0.3s ease",
  };
    return(
        <>
         <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>ReactJS: <code>background-origin</code> Example</h2>

      <div style={boxStyle}>
        <p>Background Origin: <code>{origin}</code></p>
      </div>

      <label>
        Choose background-origin:
        <select
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          style={{ marginLeft: "0.5rem" }}
        >
          <option value="border-box">border-box</option>
          <option value="padding-box">padding-box</option>
          <option value="content-box">content-box</option>
        </select>
      </label>
    </div>
        </>
    )
}