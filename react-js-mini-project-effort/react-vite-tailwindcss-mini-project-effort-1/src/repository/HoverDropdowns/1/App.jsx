import React, { useState } from "react";

const HoverDropdowns = () => {
  return (
    <>
      <Dropdown />
    </>
  );
};

export default HoverDropdowns;

const Dropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <div
      className="dropdown"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="dropdown-button">Hover me</button>
      {isDropdownOpen && (
        <div className="dropdown-content">
          <p>Dropdown Item 1</p>
          <p>Dropdown Item 2</p>
          <p>Dropdown Item 3</p>
        </div>
      )}
    </div>
  );
};
