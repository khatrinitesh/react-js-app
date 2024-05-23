import React, { useState } from "react";

const DropUpApp = () => {
  const [isDropUpOpen, setDropUpOpen] = useState(false);

  const toggleDropUp = () => {
    setDropUpOpen(!isDropUpOpen);
  };
  return (
    <>
      <div className="dropup-container">
        <button onClick={toggleDropUp}>Toggle DropUp</button>
        {isDropUpOpen && (
          <div className="dropup-content">
            <p>Content of the DropUp</p>
          </div>
        )}
      </div>
    </>
  );
};

export default DropUpApp;
