import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const FlipAnImageComp = () => {
  return (
    <>
      <FlipImage/>
    </>
  );
}

export default FlipAnImageComp;

// Styled Components for styling
const FlipContainer = styled.div`
  perspective: 1000px; /* Add perspective for 3D effect */
  width: 300px;
  height: 400px;
  margin: 20px auto;
`;

const FlipCard = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transform: rotateY(0deg);
  transition: transform 0.5s;
  cursor: pointer;
`;

const FlipCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

const FlipCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FlipImage = () => {
    const [flipped, setFlipped] = useState(false);
  
    const handleFlip = () => {
      setFlipped(!flipped);
    };
  
    return (
        // container
      <FlipContainer>
        {/* card */}
        <FlipCard
          animate={{ rotateY: flipped ? 180 : 0 }}
          onClick={handleFlip}
        >
            {/* front */}
          <FlipCardFront>
            <Image src="https://t3.ftcdn.net/jpg/05/92/45/74/360_F_592457481_U9HwJCzC5zvYApnE0UMpzroqqVsUjocF.jpg" alt="Front Image" />
          </FlipCardFront>
          {/* back */}
          <FlipCardBack>
            <Image src="https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?cs=srgb&dl=pexels-iriser-1379636.jpg&fm=jpg" alt="Back Image" />
          </FlipCardBack>
        </FlipCard>
        {/* card */}
      </FlipContainer>
    //   container
    );
  };
  

