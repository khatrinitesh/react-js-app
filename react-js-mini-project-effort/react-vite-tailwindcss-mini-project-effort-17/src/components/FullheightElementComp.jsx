import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FullheightElementComp = () => {
  return (
    <>
      <FullHeightElement/>
    </>
  );
}

export default FullheightElementComp;

// Styled Components for full-height container and content
const FullHeightWrapper = styled.div`
  height: 100vh; /* Full viewport height */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2c3e50; /* Dark background */
  color: white;
  position: relative;
`;

const FullHeightContent = styled(motion.div)`
  text-align: center;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  max-width: 600px;
  width: 90%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
`;

const FullHeightElement = () => {
    return (
      <FullHeightWrapper>
        <FullHeightContent
          initial={{ opacity: 0, y: 100 }}  // Start with opacity 0 and slide from below
          animate={{ opacity: 1, y: 0 }}    // Fade in and slide to original position
          transition={{ duration: 1 }}      // Duration of the animation
        >
          <Title>Full Height Element</Title>
          <Description>
            This element takes up the full height of the viewport and animates in using Framer Motion.
          </Description>
        </FullHeightContent>
      </FullHeightWrapper>
    );
  };
