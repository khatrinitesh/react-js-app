import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const CreateZoomInOutComp = () => {
  return (
    <>
      <ZoomImage/>
    </>
  );
}

export default CreateZoomInOutComp;

const ZoomImage = () => {
    const [isZoomed, setIsZoomed] = useState(false); // Track zoom state
  
    // Variants for zoom effect
    const zoomInVariants = {
      initial: { scale: 1 },
      hover: { scale: 1.2 },
    };
  
    return (
      <Container>
        <motion.div
          variants={zoomInVariants}
          initial="initial"
          whileHover="hover"
          transition={{ type: 'spring', stiffness: 300 }}
          style={{ display: 'inline-block' }}
        >
          <Image
            src="https://via.placeholder.com/400" // Replace with your image URL
            alt="Zoomable"
          />
        </motion.div>
      </Container>
    );
  };

  const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f6f9;
`;

const Image = styled.img`
  width: 400px;  // Adjust size as needed
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.2); // Apply zoom-in effect on hover
  }
`;
