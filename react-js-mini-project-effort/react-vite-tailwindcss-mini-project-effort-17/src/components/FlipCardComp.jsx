import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const FlipCardComp = () => {
  return (
    <>
      <FlipCardComponent/>
    </>
  );
}

export default FlipCardComp;

const FlipCardComponent = () => {
    const [flipped, setFlipped] = useState(false);
  
    // Handle the flip toggle
    const handleFlip = () => setFlipped(!flipped);
  
    return (
      <FlipContainer onClick={handleFlip}>
        <FlipCard
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
        >
          <FrontSide>
            <h2>Front Side</h2>
          </FrontSide>
          <BackSide>
            <h2>Back Side</h2>
          </BackSide>
        </FlipCard>
      </FlipContainer>
    );
  };

// Styled Components for the flip card
const FlipContainer = styled.div`
  perspective: 1000px;
  width: 300px;
  height: 200px;
  cursor: pointer;
`;

const FlipCard = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transform: rotateY(0deg);
  transition: transform 0.6s;
`;

const CardSide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  border: 1px solid #ccc;
  background-color: #f4f4f4;
`;

const FrontSide = styled(CardSide)`
  background-color: #4CAF50;
  color: white;
`;

const BackSide = styled(CardSide)`
  background-color: #f44336;
  color: white;
  transform: rotateY(180deg);
`;

