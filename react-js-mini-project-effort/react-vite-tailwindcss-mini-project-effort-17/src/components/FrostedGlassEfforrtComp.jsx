import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FrostedGlassEfforrtComp = () => {
  return (
    <>
      <FrostedGlass/>
    </>
  );
}

export default FrostedGlassEfforrtComp;

// Styled component for the wrapper (Full screen container)
const FrostedGlassWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('https://source.unsplash.com/random'); /* Background image */
  background-size: cover;
  background-position: center;
  position: relative;
`;

// Styled component for the frosted glass effect container
const FrostedGlassContainer = styled(motion.div)`
  background: rgba(255, 255, 255, 0.2); /* Semi-transparent white background */
  backdrop-filter: blur(10px); /* The frosted glass effect */
  border-radius: 15px;
  padding: 40px;
  max-width: 600px;
  width: 90%;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

// Styled components for the text inside the frosted glass container
const Title = styled.h1`
  color: white;
  font-size: 36px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  color: white;
  font-size: 18px;
  line-height: 1.6;
`;

const FrostedGlass = () => {
    return (
      <FrostedGlassWrapper>
        <FrostedGlassContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }} // Animation for fade-in effect
        >
          <Title>Frosted Glass Effect</Title>
          <Description>
            This is an example of a frosted glass effect using the CSS `backdrop-filter` property.
          </Description>
        </FrostedGlassContainer>
      </FrostedGlassWrapper>
    );
  };