import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FullPageBgImgComp = () => {
  return (
    <>
      <FullPageBackground/>
    </>
  );
}

export default FullPageBgImgComp;

// Styled component for the full-page wrapper
const FullPageWrapper = styled.div`
  height: 100vh; /* Full viewport height */
  width: 100%; /* Full viewport width */
  background-image: url('https://source.unsplash.com/random'); /* Replace with your image */
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Prevent scrolling */
`;

// Styled component for the content inside the full-page background
const FullPageContent = styled(motion.div)`
  background: rgba(255, 255, 255, 0.6); /* Semi-transparent background */
  border-radius: 15px;
  padding: 40px;
  text-align: center;
  max-width: 600px;
  width: 90%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h1`
  font-size: 40px;
  color: #333;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  color: #555;
  line-height: 1.6;
`;

const FullPageBackground = () => {
    return (
      <FullPageWrapper>
        <FullPageContent
          initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and slide up
          animate={{ opacity: 1, y: 0 }}   // Fade in and slide to original position
          transition={{ duration: 1 }}     // Animation duration
        >
          <Title>Full Page Background</Title>
          <Description>
            This is an example of a full-page background image with some animated content using Framer Motion.
          </Description>
        </FullPageContent>
      </FullPageWrapper>
    );
  };


