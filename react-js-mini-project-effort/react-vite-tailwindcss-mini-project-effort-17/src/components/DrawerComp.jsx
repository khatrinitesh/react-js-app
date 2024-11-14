import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// Styled Component for the drawer overlay
const DrawerOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  z-index: 999; /* Overlay on top of everything */
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

// Styled Component for the drawer content
const DrawerContent = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 250px;
  background: #fff;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  z-index: 1000; /* Drawer is above the overlay */
  transform: translateX(100%); /* Initially off-screen to the right */
`;

// Styled button to trigger drawer opening
const ToggleButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: #2575fc;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  z-index: 1010; /* Button is above everything else */
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #6a11cb;
  }
`;



const DrawerComp = () => {
  return (
    <>
      <Drawer/>
    </>
  );
}

export default DrawerComp;

const Drawer = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    // Toggle the drawer open/close
    const toggleDrawer = () => setIsOpen((prev) => !prev);
  
    return (
      <>
        {/* Toggle Button */}
        <ToggleButton onClick={toggleDrawer}>
          {isOpen ? 'Close Drawer' : 'Open Drawer'}
        </ToggleButton>
  
        {/* Drawer Overlay */}
        <DrawerOverlay
          isOpen={isOpen}
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={toggleDrawer} // Close drawer when clicking the overlay
        />
  
        {/* Drawer Content */}
        <DrawerContent
          initial={{ x: '100%' }}  // Start off-screen
          animate={{ x: isOpen ? 0 : '100%' }} // Slide in/out
          exit={{ x: '100%' }} // Slide out when exiting
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <h2>Drawer Content</h2>
          <p>Here is some content inside the drawer!</p>
        </DrawerContent>
      </>
    );
  };


