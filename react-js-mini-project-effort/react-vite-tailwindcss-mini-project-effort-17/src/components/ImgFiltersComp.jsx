import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ImgFiltersComp = () => {
  return (
    <>
      <AnimatedFilterTransition/>
    </>
  );
}

export default ImgFiltersComp;

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

const AnimatedFilterTransition = () => {
    const [isBlurred, setIsBlurred] = useState(true);
  
    return (
      <ImageContainer onClick={() => setIsBlurred(!isBlurred)}>
        <Image
          src="https://via.placeholder.com/300"
          alt="Blur to Sharp"
          initial={{ filter: 'blur(10px)' }}
          animate={{ filter: isBlurred ? 'blur(10px)' : 'blur(0px)' }}  // Toggle between blur and sharpness
          transition={{ duration: 1 }}
        />
      </ImageContainer>
    );
  };
  


