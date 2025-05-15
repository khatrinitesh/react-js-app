import React, { useState } from 'react';

const ExampleBgPosition = () => {

    
  return (
    <>
     <ExampleOne/>
    </>
  );
}

export default ExampleBgPosition;

function ExampleOne(){
 const [position, setPosition] = useState("center center");

      const boxStyle = {
    width: "90%",
    maxWidth: "500px",
    height: "250px",
    margin: "2rem auto",
    padding: "2rem",
    border: "5px solid #4b5563", // gray-700
    backgroundColor: "#fcd34d", // yellow-300
    backgroundImage: "url('https://placehold.co/600x400/EEE/31343C')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: position,
    backgroundSize: "100px 100px",
    textAlign: "center",
    color: "#1f2937",
    fontSize: "1.2rem",
    fontWeight: "bold",
    transition: "background-position 0.3s ease",
  };
    return(
        <>
         <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>ReactJS: <code>background-position</code> Example</h2>

      <div style={boxStyle}>
        Background Position: <code>{position}</code>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <label htmlFor="positionSelect">Choose position: </label>
        <select
          id="positionSelect"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        >
          <option value="left top">left top</option>
          <option value="left center">left center</option>
          <option value="left bottom">left bottom</option>
          <option value="center top">center top</option>
          <option value="center center">center center</option>
          <option value="center bottom">center bottom</option>
          <option value="right top">right top</option>
          <option value="right center">right center</option>
          <option value="right bottom">right bottom</option>
        </select>
      </div>
    </div>
        </>
    )
}
