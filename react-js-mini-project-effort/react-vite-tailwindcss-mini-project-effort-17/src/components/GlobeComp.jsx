import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Wrapper for the globe container
const GlobeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
  overflow: hidden;
`;

// Styled component for the globe (circle)
const Globe = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(56, 120, 248, 0.8), rgba(37, 72, 157, 0.8));
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d; /* Enable 3D effects */
  perspective: 1000px; /* Add perspective */
`;


const GlobeComp = () => {
  return (
    <>
      <GlobeAnimation/>
    </>
  );
}

export default GlobeComp;

// A simple animated effect to simulate a rotating globe
const GlobeAnimation = () => {
    return (
      <GlobeContainer>
        <Globe
          initial={{ rotateY: 0 }}
          animate={{ rotateY: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
        >
          {/* You can add more elements here, like continents or map projections */}
          {/* This is just a simple circle that rotates */}
        </Globe>
      </GlobeContainer>
    );
  };
  