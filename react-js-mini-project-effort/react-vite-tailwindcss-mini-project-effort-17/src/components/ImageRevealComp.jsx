import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ImageRevealComp = () => {
  return (
    <div>
      <ImageReveal/>
    </div>
  );
}

export default ImageRevealComp;

// Styled component for the image container
const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 300px; /* Set the width of the image container */
  height: 200px; /* Set the height of the image container */
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
`;

// Styled component for the image itself
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

// Styled component for the reveal effect (hidden initially)
const Reveal = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  opacity: 0; /* Initially hidden */
  pointer-events: none; /* Prevent interaction until revealed */
  border-radius: 10px;
`;

const ImageReveal = () => {
    return (
      <ImageContainer>
        {/* Image */}
        <Image
          src="https://via.placeholder.com/600x400?text=Hover+to+Reveal"
          alt="Image with Reveal Effect"
        />
  
        {/* Reveal effect with text */}
        <Reveal
          initial={{ x: '-100%' }}  // Start with the overlay hidden to the left
          whileHover={{ x: '0%' }}   // Slide the reveal effect in from the left on hover
          transition={{ duration: 0.5 }}  // Duration for the slide-in effect
        >
          <div>Revealed Image!</div> {/* Text content inside the reveal */}
        </Reveal>
      </ImageContainer>
    );
  };