import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const GlowingTxtComp = () => {
  return (
    <>
      <GlowingTextComponent/>
    </>
  );
}

export default GlowingTxtComp;

// Styled component for the glowing text
const GlowingText = styled(motion.h1)`
  font-size: 60px;
  font-weight: 700;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;

  /* Glowing effect */
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.8), 
               0 0 10px rgba(255, 255, 255, 0.8),
               0 0 15px rgba(255, 255, 255, 0.8),
               0 0 20px rgba(255, 255, 255, 0.8),
               0 0 30px rgba(0, 204, 255, 1), 
               0 0 40px rgba(0, 204, 255, 1),
               0 0 50px rgba(0, 204, 255, 1),
               0 0 75px rgba(0, 204, 255, 1);

  /* Animation */
  animation: glow 1.5s ease-in-out infinite alternate;

  @keyframes glow {
    0% {
      text-shadow: 0 0 5px rgba(255, 255, 255, 0.8),
                   0 0 10px rgba(255, 255, 255, 0.8),
                   0 0 15px rgba(255, 255, 255, 0.8),
                   0 0 20px rgba(255, 255, 255, 0.8),
                   0 0 30px rgba(0, 204, 255, 1), 
                   0 0 40px rgba(0, 204, 255, 1),
                   0 0 50px rgba(0, 204, 255, 1),
                   0 0 75px rgba(0, 204, 255, 1);
    }
    100% {
      text-shadow: 0 0 10px rgba(255, 255, 255, 1),
                   0 0 20px rgba(255, 255, 255, 1),
                   0 0 30px rgba(255, 255, 255, 1),
                   0 0 40px rgba(255, 255, 255, 1),
                   0 0 50px rgba(0, 204, 255, 1), 
                   0 0 60px rgba(0, 204, 255, 1),
                   0 0 80px rgba(0, 204, 255, 1),
                   0 0 100px rgba(0, 204, 255, 1);
    }
  }
`;


const GlowingTextComponent = () => {
    return (
      <div style={{ background: '#111', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <GlowingText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        >
          Glowing Text
        </GlowingText>
      </div>
    );
  };
  


