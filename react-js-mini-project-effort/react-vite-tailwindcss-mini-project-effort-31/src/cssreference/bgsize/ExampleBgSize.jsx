import React, { useState } from 'react';

const ExampleBgSize = () => {
  return (
    <>
      <ExampleOne/>
    </>
  );
}

export default ExampleBgSize;

function ExampleOne() {
     const [bgSize, setBgSize] = useState("cover");
     const boxStyle = {
    width: "90%",
    maxWidth: "500px",
    height: "250px",
    margin: "2rem auto",
    border: "5px solid #6b7280", // gray-500
    backgroundColor: "#fef3c7", // yellow-100
    backgroundImage: "url('https://placehold.co/600x400/EEE/31343C')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: bgSize,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "1.2rem",
    color: "#1f2937", // gray-800
    transition: "all 0.3s ease",
  };
    return(
        <>
 <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>ReactJS: <code>background-size</code> Example</h2>

      <div style={boxStyle}>
        <p>Size: <code>{bgSize}</code></p>
      </div>

      <label htmlFor="bgSizeSelect">Choose background-size: </label>
      <select
        id="bgSizeSelect"
        value={bgSize}
        onChange={(e) => setBgSize(e.target.value)}
        style={{ marginLeft: "0.5rem" }}
      >
        <option value="auto">auto</option>
        <option value="cover">cover</option>
        <option value="contain">contain</option>
        <option value="100% 100%">100% 100%</option>
        <option value="50% auto">50% auto</option>
      </select>
    </div>
        </>
    )
}
