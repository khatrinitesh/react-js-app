import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ImgOverlaySlideComp = () => {
  return (
    <>
      <ImageOverlaySlide/>
    </>
  );
}

export default ImgOverlaySlideComp;


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
  bottom: 0; /* Start at the bottom of the container */
  left: 0;
  width: 100%;
  height: 50%; /* Adjust overlay height as needed */
  background-color: rgba(0, 0, 0, 0.6); /* Semi-transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  pointer-events: none; /* Prevent interaction with the overlay until visible */
  border-radius: 10px;
`;


const ImageOverlaySlide = () => {
    return (
      <ImageContainer>
        {/* Image */}
        <Image
          src="https://via.placeholder.com/600x400?text=Hover+Me"
          alt="Image with Overlay Slide"
        />
  
        {/* Overlay with slide-in effect */}
        <Overlay
          initial={{ y: '100%' }} // Start with the overlay below the image (invisible)
          whileHover={{ y: '0%' }} // Slide the overlay in from the bottom on hover
          transition={{ duration: 0.5 }} // Duration for the slide effect
        >
          <div>More Info</div> {/* Content inside the overlay */}
        </Overlay>
      </ImageContainer>
    );
  };

