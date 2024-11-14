import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CollapisbleComp = () => {
  return (
    <>
      <Collapsible/>
    </>
  );
}

export default CollapisbleComp;

const Collapsible = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleCollapse = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="collapsible-container">
        {/* Button to toggle collapse */}
        <button className="toggle-btn" onClick={toggleCollapse}>
          {isOpen ? 'Collapse' : 'Expand'}
        </button>
  
        {/* Collapsible Content */}
        <motion.div
          className="collapsible-content"
          initial={{ height: 0 }}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          style={{ overflow: 'hidden' }}
        >
          <div className="content">
            <p>
              This is the collapsible content. It will expand and collapse when the button is clicked.
              You can put any content here, such as text, images, or even other React components.
            </p>
          </div>
        </motion.div>
      </div>
    );
  };
  
