import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const HowToCenterImgDivComp = () => {
  return (
    <>
      <CenteredImage/>
    </>
  );
}

export default HowToCenterImgDivComp;

// Container to center the image using Flexbox
const ImageContainer = styled.div`
  display: flex;
  justify-content: center; /* Horizontal center */
  align-items: center;     /* Vertical center */
  height: 100vh;           /* Full viewport height */
  background-color: #f0f0f0;
`;

// Styled component for the image
const StyledImage = styled(motion.img)`
  width: 300px;
  height: auto;
  border-radius: 10px; /* Optional: adds rounded corners */
`;

const CenteredImage = () => {
    return (
      <ImageContainer>
        <StyledImage
          src="https://via.placeholder.com/300" // Replace with your image URL
          alt="Centered"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </ImageContainer>
    );
  };


