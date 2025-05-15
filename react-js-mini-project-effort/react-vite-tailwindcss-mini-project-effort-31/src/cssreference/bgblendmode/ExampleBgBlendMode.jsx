import React, { useState } from 'react';

const ExampleBgBlendMode = () => {
    const [blendMode,setBlendMode] = useState('normal');

    const boxStyle = {
    height: "300px",
    width: "100%",
    maxWidth: "600px",
    margin: "2rem auto",
    padding: "2rem",
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#ff0080", // bright pink
    backgroundImage:
      'url("https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendMode: blendMode,
    borderRadius: "12px",
    transition: "background-blend-mode 0.3s ease",
  };
  return (
    <>
      <div style={{ padding: "2rem" }}>
      <h2 style={{ textAlign: "center" }}>ReactJS: background-blend-mode</h2>

      <div style={boxStyle}>
        <p>Blend Mode: <code>{blendMode}</code></p>
        <p>Text over blended background</p>
      </div>

      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <label htmlFor="blendSelect">Choose blend mode: </label>
        <select
          id="blendSelect"
          value={blendMode}
          onChange={(e) => setBlendMode(e.target.value)}
        >
          <option value="normal">normal</option>
          <option value="multiply">multiply</option>
          <option value="screen">screen</option>
          <option value="overlay">overlay</option>
          <option value="darken">darken</option>
          <option value="lighten">lighten</option>
          <option value="difference">difference</option>
          <option value="color-dodge">color-dodge</option>
        </select>
      </div>
    </div>
    </>
  );
}

export default ExampleBgBlendMode;

function ExampleOne(){
   return(
    <>
    </>
   )
}