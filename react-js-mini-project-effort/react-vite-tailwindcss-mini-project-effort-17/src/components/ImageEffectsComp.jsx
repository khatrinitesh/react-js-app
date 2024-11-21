import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ImageEffectsComp = () => {
  return (
    <>
      <HoverImageEffect/>
    </>
  );
}

export default ImageEffectsComp;

const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  overflow: hidden;
  position: relative;
  display: inline-block;
`;

const Image = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;


const HoverImageEffect = () => {
  return (
    <ImageContainer>
      <Image
        src="https://via.placeholder.com/300"
        alt="Example"
        whileHover={{ scale: 1.1 }} // Scale up on hover
        transition={{ duration: 0.3 }}
      />
    </ImageContainer>
  );
};