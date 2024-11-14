import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const DropupComp = () => {
  return (
    <>
      <DropupMenu/>
    </>
  );
}

export default DropupComp;

// Main Dropup Component
const DropupMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    // Toggle the menu open/close
    const toggleDropup = () => setIsOpen(!isOpen);
  
    return (
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <Button onClick={toggleDropup}>Toggle Dropup</Button>
  
        {/* Dropup Menu */}
        {isOpen && (
          <DropupContainer
            initial={{ opacity: 0, y: 20 }}  // Initial state (hidden and slightly below)
            animate={{ opacity: 1, y: 0 }}    // Animate to fully visible and upward position
            exit={{ opacity: 0, y: 20 }}      // Exit animation (fade out and slide down)
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
            }}
          >
            <MenuItem>Option 1</MenuItem>
            <MenuItem>Option 2</MenuItem>
            <MenuItem>Option 3</MenuItem>
          </DropupContainer>
        )}
      </div>
    );
  };

// Button that triggers the Dropup
const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #2f3b52;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1c2b40;
  }
`;

// Dropup Menu container
const DropupContainer = styled(motion.div)`
  position: absolute;
  bottom: 50px; // Adjust this based on your button's position
  left: 0;
  width: 200px;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  z-index: 1000;
`;

// Menu Items in the Dropup
const MenuItem = styled.div`
  padding: 12px 20px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #f1f1f1;
  }
`;


