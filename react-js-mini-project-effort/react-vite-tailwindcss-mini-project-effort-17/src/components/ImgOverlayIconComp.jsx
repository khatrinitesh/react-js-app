import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa'; // Example icon from react-icons

const ImgOverlayIconComp = () => {
  return (
    <>
      <ImageOverlay/>
    </>
  );
}

export default ImgOverlayIconComp;

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

// Styled component for the icon inside the overlay
const IconContainer = styled.div`
  font-size: 40px; /* Icon size */
  transition: transform 0.3s ease; /* Smooth transform transition */
`;


// The actual component
const ImageOverlay = () => {
    return (
      <ImageContainer>
        {/* Image */}
        <Image
          src="https://via.placeholder.com/600x400?text=Hover+Me"
          alt="Image with Overlay Icon"
        />
  
        {/* Overlay with fade effect and icon */}
        <Overlay
          initial={{ opacity: 0 }} // Start with overlay invisible
          whileHover={{ opacity: 1 }} // Fade in overlay on hover
          transition={{ duration: 0.3 }} // Duration of fade effect
        >
          {/* Icon inside the overlay */}
          <IconContainer>
            <FaSearch /> {/* Search icon from react-icons */}
          </IconContainer>
        </Overlay>
      </ImageContainer>
    );
  };




