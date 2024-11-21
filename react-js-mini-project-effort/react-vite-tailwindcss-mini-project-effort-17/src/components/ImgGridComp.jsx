import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { imggridData } from '../constants/imggridData';

const ImgGridComp = () => {
  return (
    <>
      <AnimatedImageGrid/>
    </>
  );
}

export default ImgGridComp;

// Define the layout for the grid
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
`;

// Style for each image item in the grid
const ImageWrapper = styled(motion.div)`
  overflow: hidden;
  border-radius: 8px;
  position: relative;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  
  &:hover img {
    transform: scale(1.1);  // Zoom effect on hover
  }
`;

// Styled component for the image element
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
`;


const AnimatedImageGrid = () => {
    
  
    return (
      <GridContainer>
        {imggridData.map((src, index) => (
          <ImageWrapper
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: index * 0.1, // Stagger animation delays for each item
              duration: 0.5,
              type: 'spring',
              stiffness: 100,
            }}
          >
            <Image src={src} alt={`Image ${index + 1}`} />
          </ImageWrapper>
        ))}
      </GridContainer>
    );
  };