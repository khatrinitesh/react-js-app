import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ImgOverlayTextComp = () => {
  return (
    <>
      <ImageOverlayText/>
    </>
  );
}

export default ImgOverlayTextComp;

// Styled component for the image container
const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 300px; /* Width of the image container */
  height: 200px; /* Height of the image container */
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

// Styled component for the overlay with text
const Overlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); /* Semi-transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  opacity: 0; /* Initially hidden */
  pointer-events: none; /* Prevent overlay from interfering with interactions */
  border-radius: 10px;
`;

const ImageOverlayText = () => {
    return (
      <ImageContainer>
        {/* Image */}
        <Image
          src="https://via.placeholder.com/600x400?text=Hover+Me"
          alt="Image with Overlay Text"
        />
  
        {/* Overlay with text: Initially hidden */}
        <Overlay
          initial={{ opacity: 0 }}  // Start with overlay invisible
          whileHover={{ opacity: 1 }} // Fade in on hover
          transition={{ duration: 0.5 }} // Smooth transition duration
        >
          <div>More Information</div> {/* Text inside the overlay */}
        </Overlay>
      </ImageContainer>
    );
  };


