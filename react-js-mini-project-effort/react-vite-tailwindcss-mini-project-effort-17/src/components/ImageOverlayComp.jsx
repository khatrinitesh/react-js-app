import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ImageOverlayComp = () => {
  return (
    <>
      <ImageOverlay/>
    </>
  );
}

export default ImageOverlayComp;


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
  pointer-events: auto; /* Enable pointer events on overlay */
  border-radius: 10px;
`;


const ImageOverlay = () => {
    const [isClicked, setIsClicked] = useState(false);
  
    // Handle the click event on the overlay
    const handleClick = () => {
      setIsClicked(true);
      alert('Image overlay clicked!');
    };
  
    return (
      <ImageContainer>
        {/* Image */}
        <Image
          src="https://via.placeholder.com/600x400?text=Hover+Me"
          alt="Image with Overlay"
        />
  
        {/* Overlay: This will appear on hover */}
        <Overlay
          initial={{ opacity: 0 }} // Start with overlay invisible
          whileHover={{ opacity: 1 }} // Show the overlay when hovered
          transition={{ duration: 0.3 }}
          onClick={handleClick} // Add the onClick handler here
        >
          <div>{isClicked ? 'You clicked the overlay!' : 'More Info'}</div> {/* Content inside the overlay */}
        </Overlay>
      </ImageContainer>
    );
  };
