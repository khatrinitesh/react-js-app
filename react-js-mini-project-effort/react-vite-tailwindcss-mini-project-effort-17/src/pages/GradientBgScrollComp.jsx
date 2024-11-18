import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const GradientBgScrollComp = () => {
  return (
    <>
      <ScrollingGradientBackground/>
    </>
  );
}

export default GradientBgScrollComp;

// Styled component for the container
const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden; /* Hide overflowing content */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #111; /* Optional background color */
  color: white;
`;

// Styled component for the gradient background
const GradientBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200%; /* Height is larger than viewport to create the scrolling effect */
  background: linear-gradient(45deg, #ff7e5f, #feb47b, #6a11cb, #2575fc);
  background-size: 400% 400%; /* Ensure the gradient spans a large area */
  animation: gradientScroll 10s linear infinite; /* Infinite scrolling animation */
  
  @keyframes gradientScroll {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 100%;
    }
  }
`;

// Styled component for content inside the container
const Content = styled.div`
  z-index: 1;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
`;


const ScrollingGradientBackground = () => {
    return (
      <Container>
        <GradientBackground
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
        <Content>
          <h1>Scrolling Gradient Background</h1>
          <p>Enjoy the animated gradient effect!</p>
        </Content>
      </Container>
    );
  };
