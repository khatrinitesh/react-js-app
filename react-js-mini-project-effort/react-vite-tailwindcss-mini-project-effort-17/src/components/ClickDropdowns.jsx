import React, { useState } from "react";
import { motion } from "framer-motion";

const ClickDropdowns = () => {
  return (
    <>
    <DropdownComp/>
    </>
  )
};

export default ClickDropdowns;

const DropdownComp = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle dropdown open and close
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  // Handle mouse leave to close the dropdown
  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="dropdown-container" onMouseLeave={handleMouseLeave}>
        <button className="dropdown-button" onClick={toggleDropdown}>
          Toggle dropdown
        </button>
        {/* Framer Motion Dropdown */}
        <motion.div
          className="dropdown-menu"
          initial={{ opacity: 0, y: -20 }} // Start from above and invisible
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }} // Animate into view
          exit={{ opacity: 0, y: -20 }} // Animate out of view
          transition={{ duration: 0.3 }} // Control the speed of the transition
          style={{ display: isOpen ? "block" : "none" }} // Hide when closed
        >
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        </motion.div>
      </div>
    </>
  );
};
