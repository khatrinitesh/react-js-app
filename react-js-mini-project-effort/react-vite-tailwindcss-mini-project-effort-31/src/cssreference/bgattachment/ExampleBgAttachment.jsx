import React, { useState } from 'react';

const ExampleBgAttachment = () => {
    const [attachment,setAttachment] = useState('scroll');

    const containerStyle = {
         height: "300px",
    overflow: "auto",
    padding: "2rem",
    border: "2px solid #333",
    margin: "2rem auto",
    width: "90%",
    maxWidth: "600px",
    backgroundImage:
      'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: attachment,
    color: "#fff",
    }
  return (
    <>
      <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>ReactJS Background Attachment Example</h2>

      <label>
        Choose Attachment:
        <select
          value={attachment}
          onChange={(e) => setAttachment(e.target.value)}
          style={{ marginLeft: "0.5rem" }}
        >
          <option value="scroll">scroll (default)</option>
          <option value="fixed">fixed (background stays put)</option>
          <option value="local">local (scrolls with content)</option>
        </select>
      </label>

      <div style={containerStyle}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          fermentum justo in nulla commodo luctus. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>
        <p>
          Praesent vitae quam nec augue pharetra vehicula. Curabitur fringilla
          lacus a nunc fermentum, at iaculis arcu facilisis. Proin porttitor
          sapien ut pulvinar vehicula.
        </p>
        <p>
          Morbi consequat enim a justo porta, ut pretium tortor rutrum. Integer
          convallis bibendum orci non tincidunt.
        </p>
      </div>
    </div>
    </>
  );
}

export default ExampleBgAttachment;
