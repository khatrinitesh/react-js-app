import React, { useState } from 'react';

const ExampleBlockSize = () => {
  return (
    <>
     <ExampleOne/> 
    </>
  );
}

export default ExampleBlockSize;


function ExampleOne() {

      const [blockSize, setBlockSize] = useState("150px");

  const boxStyle = {
    width: "300px",
    blockSize: blockSize,
    writingMode: "horizontal-tb", // normal writing mode
    backgroundColor: "#60a5fa", // blue-400
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "1rem",
    border: "2px solid #1e3a8a",
    margin: "2rem auto",
    transition: "block-size 0.3s ease",
  };
    return(
        <>
        <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>ReactJS: <code>block-size</code> Example</h2>

      <div style={boxStyle}>
        Block Size: <code>{blockSize}</code>
      </div>

      <label htmlFor="sizeInput">Set block-size (e.g. 100px, 50%): </label>
      <input
        id="sizeInput"
        type="text"
        value={blockSize}
        onChange={(e) => setBlockSize(e.target.value)}
        style={{ marginLeft: "0.5rem", padding: "0.25rem" }}
        placeholder="e.g. 200px or 50%"
      />
    </div>
        </>
    )
}
