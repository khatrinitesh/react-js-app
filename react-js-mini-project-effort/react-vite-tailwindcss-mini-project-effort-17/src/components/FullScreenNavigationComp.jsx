import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const FullScreenNavigationComp = () => {
  return (
    <>
      <FullscreenNavigation/>
    </>
  );
}

export default FullScreenNavigationComp;

// Styled components for the fullscreen navigation
const FullscreenNavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9); /* Dark background with opacity */
  z-index: 1000; /* Ensures it's on top of other content */
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0; /* Start with the nav hidden */
`;

const NavContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NavItem = styled.a`
  font-size: 30px;
  color: white;
  margin: 20px 0;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: #3498db; /* Add a hover effect */
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 40px;
  color: white;
  cursor: pointer;
`;

const FullscreenNavigation = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleNav = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div>
        {/* Button to toggle the navigation */}
        <button onClick={toggleNav} style={{ fontSize: '20px', padding: '10px', cursor: 'pointer' }}>
          {isOpen ? 'Close Menu' : 'Open Menu'}
        </button>
  
        {/* Fullscreen Navigation */}
        {isOpen && (
          <FullscreenNavWrapper
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <NavContent
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 120 }}
            >
              <NavItem href="#">Home</NavItem>
              <NavItem href="#">About</NavItem>
              <NavItem href="#">Services</NavItem>
              <NavItem href="#">Contact</NavItem>
            </NavContent>
  
            {/* Close Button */}
            <CloseButton onClick={toggleNav}>
              <FaTimes />
            </CloseButton>
          </FullscreenNavWrapper>
        )}
      </div>
    );
  };
