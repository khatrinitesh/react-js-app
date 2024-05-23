import React, { useState } from "react";
import "./custom.css";

const CurtainMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`curtain-menu-container ${isMenuOpen ? "menu-open" : ""}`}>
      <button onClick={toggleMenu} className="menu-button">
        Toggle Menu
      </button>
      <div className="curtain-menu">
        <ul>
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
          <li>Menu Item 3</li>
          {/* Add more menu items as needed */}
        </ul>
      </div>
    </div>
  );
};

export default CurtainMenu;
