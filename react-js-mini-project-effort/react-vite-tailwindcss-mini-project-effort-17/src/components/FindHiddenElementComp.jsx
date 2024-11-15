import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';


const FindHiddenElementComp = () => {
  return (
    <>
      <RevealHiddenElement/>
    </>
  );
}

export default FindHiddenElementComp;

const RevealHiddenElement = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    const handleToggleVisibility = () => {
      setIsVisible(!isVisible);
    };
  
    return (
      <Container>
        <Button onClick={handleToggleVisibility}>
          {isVisible ? 'Hide Element' : 'Show Hidden Element'}
        </Button>
  
        {/* Framer Motion's Motion Component */}
        {isVisible && (
          <HiddenElement
            initial={{ opacity: 0, y: 50 }} // Start from being invisible and below
            animate={{ opacity: 1, y: 0 }}   // Fade in and slide up
            exit={{ opacity: 0, y: 50 }}     // Fade out and slide down
            transition={{ duration: 0.5 }}   // Set the animation duration
          >
            This is a hidden element that can be revealed!
          </HiddenElement>
        )}
      </Container>
    );
  };

// Styled Components for UI Styling
const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  text-align: center;
  background-color: #f9f9f9;
  border-radius: 8px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

const HiddenElement = styled(motion.div)`
  margin-top: 20px;
  padding: 20px;
  background-color: #ffeb3b;
  border-radius: 8px;
  color: #333;
`;
