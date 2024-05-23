import React, { useState, useEffect } from "react";

const StickyNavbarApp = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      if (offset > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
        <div className="navbar-content">
          <div className="navbar-logo">Your Logo</div>
          <ul className="navbar-links">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default StickyNavbarApp;
