import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const GradientBorderComp = () => {
  return (
    <>
      <GradientBorderExample/>s
    </>
  );
}

export default GradientBorderComp;

// Styled component for the container with a gradient border
const GradientBorderContainer = styled(motion.div)`
  display: inline-block;
  padding: 30px;
  background-color: #111;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;

  /* Create the gradient border */
  background: linear-gradient(45deg, #ff7e5f, #feb47b, #6a11cb, #2575fc);
  border: 5px solid transparent;
  border-radius: 20px;
  background-clip: padding-box;

  /* Adding the border animation */
  animation: gradientBorder 5s linear infinite;

  @keyframes gradientBorder {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 100% 100%;
    }
    100% {
      background-position: 0% 0%;
    }
  }
`;

// Styled component for the content inside the container
const Content = styled.div`
  position: relative;
  z-index: 1;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`;


const GradientBorderExample = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
        <GradientBorderContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        >
          <Content>
            <h1>Gradient Border</h1>
            <p>This container has an animated gradient border!</p>
          </Content>
        </GradientBorderContainer>
      </div>
    );
  };
