import React, { useState, useEffect } from "react";

const BgGradientScrollApp = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  // Calculate gradient based on scroll position
  const gradient = `linear-gradient(to bottom, #ffcc00, #ff6600 ${scrollPosition}px, #ffffff ${scrollPosition}px)`;
  return (
    <>
      <div
        className="scroll-gradient-container"
        style={{ background: gradient }}
      >
        <div className="content">
          <h1>Your Content Goes Here</h1>
        </div>
      </div>
    </>
  );
};

export default BgGradientScrollApp;
