import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ImageMagnifierGlassComp = () => {
  return (
    <>
      <ImageMagnifier/>
    </>
  );
}

export default ImageMagnifierGlassComp;

// Container for the magnifier image and the zoomed area
const MagnifierContainer = styled.div`
  position: relative;
  display: inline-block;
  overflow: hidden;
  cursor: pointer; /* Changed to pointer for click */
`;

// The image itself
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// The zoomed-in area (magnifier glass)
const MagnifierGlass = styled(motion.div)`
  position: absolute;
  border: 3px solid #fff;
  border-radius: 50%;
  pointer-events: none;
  width: 150px;
  height: 150px;
  background-repeat: no-repeat;
  background-size: 400%;
  visibility: hidden;
  transition: visibility 0.3s ease;
`;

const ImageMagnifier = () => {
  const [magnifierStyle, setMagnifierStyle] = useState({
    left: '0px',
    top: '0px',
    backgroundPosition: '0px 0px',
  });
  const [isMagnifierVisible, setIsMagnifierVisible] = useState(false); // Track visibility of magnifier
  const imageRef = useRef(null);

  // Function to handle mouse movement and update the magnifier position
  const handleMouseMove = (e) => {
    if (!isMagnifierVisible) return; // Only move the magnifier if it's visible
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Calculate the magnifier's background position based on mouse position
    const backgroundX = ((x / width) * 100) * 4; // 4x zoom factor
    const backgroundY = ((y / height) * 100) * 4;

    setMagnifierStyle({
      left: `${x - 75}px`, // Position the magnifier at mouse coordinates
      top: `${y - 75}px`,
      backgroundPosition: `${-backgroundX}px ${-backgroundY}px`, // Adjust the background zoom position
    });
  };

  // Function to toggle magnifier visibility when image is clicked
  const handleImageClick = () => {
    setIsMagnifierVisible((prev) => !prev); // Toggle visibility on click
  };

  return (
    <MagnifierContainer
      onMouseMove={handleMouseMove}
      onClick={handleImageClick} // Trigger zoom on click
    >
      <Image
        src="https://via.placeholder.com/800x600?text=Image"
        alt="Zoomable Image"
        ref={imageRef}
      />
      <MagnifierGlass
        style={{
          ...magnifierStyle,
          backgroundImage: `url('https://via.placeholder.com/800x600?text=Image')`,
          visibility: isMagnifierVisible ? 'visible' : 'hidden', // Toggle visibility of magnifier
        }}
        initial={{ scale: 0 }}
        animate={{ scale: isMagnifierVisible ? 1 : 0 }} // Animate scale for smoother transition
        transition={{
          duration: 0.3,
          ease: 'easeOut',
        }}
      />
    </MagnifierContainer>
  );
};


