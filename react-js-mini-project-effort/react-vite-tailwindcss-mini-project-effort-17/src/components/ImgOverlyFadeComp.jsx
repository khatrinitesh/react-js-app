import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ImgOverlyFadeComp = () => {
  return (
    <>
      <ImageOverlay/>
    </>
  );
}

export default ImgOverlyFadeComp;

// Styled component for the image container
const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 300px; /* Set width of the image container */
  height: 200px; /* Set height of the image container */
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

// Styled component for the overlay
const Overlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  opacity: 0; /* Initially hidden */
  pointer-events: none; /* Prevent overlay from interfering with mouse events */
  border-radius: 10px;
`;

const ImageOverlay = () => {
    return (
      <ImageContainer>
        {/* Image */}
        <Image
          src="https://via.placeholder.com/600x400?text=Hover+Me"
          alt="Image with Overlay"
        />
  
        {/* Overlay with fade effect */}
        <Overlay
          initial={{ opacity: 0 }} // Start with overlay invisible
          whileHover={{ opacity: 1 }} // Fade in on hover
          transition={{ duration: 0.5 }} // Duration of fade-in
        >
          <div>More Info</div> {/* Content inside the overlay */}
        </Overlay>
      </ImageContainer>
    );
  };
