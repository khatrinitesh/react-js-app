import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const GlassmorphismComp = () => {
  return (
    <>
      <GlassmorphismCard/>
    </>
  );
}

export default GlassmorphismComp;

// Styled Components for Glassmorphism Effect
const GlassCard = styled(motion.div)`
  width: 300px;
  padding: 20px;
  border-radius: 15px;
  backdrop-filter: blur(10px); /* This creates the blur effect */
  background: rgba(255, 255, 255, 0.1); /* Semi-transparent background */
  border: 2px solid rgba(255, 255, 255, 0.3); /* Light border */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: #fff;
  font-family: 'Arial', sans-serif;
  transition: transform 0.2s ease;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.05); /* Slightly enlarge the card on hover */
  }
`;

// Header with some style
const CardHeader = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  color: #fff;
`;

// Body content
const CardBody = styled.p`
  font-size: 14px;
  color: #fff;
  text-align: center;
`;

// Main component
const GlassmorphismCard = () => {
    return (
      <GlassCard
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}  // Enlarge the card on hover
      >
        <CardHeader>Glassmorphism Card</CardHeader>
        <CardBody>
          This is a card with the glassmorphism effect. Hover over it to see the animation!
        </CardBody>
      </GlassCard>
    );
  };
