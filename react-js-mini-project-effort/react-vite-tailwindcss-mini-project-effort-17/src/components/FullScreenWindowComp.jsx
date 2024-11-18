import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FullScreenWindowComp = () => {
  return (
    <>
      <FullscreenWindow/>
    </>
  );
}

export default FullScreenWindowComp;

// Wrapper for the fullscreen window
const FullscreenWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Dark semi-transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Make sure it's on top of all content */
  opacity: 0; /* Hidden by default */
  visibility: hidden; /* Hidden by default */
`;

// Styled content inside the fullscreen window
const FullscreenContent = styled(motion.div)`
  background-color: white;
  width: 80%;
  max-width: 900px;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// Styled close button
const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 25px;
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

// Open Button (used to trigger fullscreen window)
const OpenButton = styled.button`
  font-size: 18px;
  padding: 15px 30px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;


const FullscreenWindow = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleWindow = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div>
        {/* Button to open the fullscreen window */}
        <OpenButton onClick={toggleWindow}>
          Open Fullscreen Window
        </OpenButton>
  
        {/* Fullscreen Window */}
        {isOpen && (
          <FullscreenWrapper
            initial={{ opacity: 0, visibility: 'hidden' }}
            animate={{ opacity: 1, visibility: 'visible' }}
            exit={{ opacity: 0, visibility: 'hidden' }}
            transition={{ duration: 0.5 }}
          >
            <FullscreenContent
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h1>Welcome to the Fullscreen Window!</h1>
              <p>This is a fullscreen window that you can open and close.</p>
              <CloseButton onClick={toggleWindow}>×</CloseButton>
            </FullscreenContent>
          </FullscreenWrapper>
        )}
      </div>
    );
  };
