import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FullScreenVideoComp = () => {
  return (
    <>
      <FullscreenVideo/>
    </>
  );
}

export default FullScreenVideoComp;

// Styled component for the fullscreen video container
const FullscreenVideoWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Dark background overlay */
  z-index: 9999; /* Ensures it appears above other content */
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden; /* Hidden by default */
`;

// Styled component for the video player
const VideoPlayer = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the video covers the screen */
  border-radius: 10px;
`;

// Close button style
const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  font-size: 30px;
  color: white;
  cursor: pointer;
  z-index: 1000;
`;


const FullscreenVideo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleVideo = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Button to open the fullscreen video */}
      <button onClick={toggleVideo} style={{ fontSize: '20px', padding: '10px 20px', cursor: 'pointer' }}>
        Play Video
      </button>

      {/* Fullscreen video overlay */}
      {isOpen && (
        <FullscreenVideoWrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, visibility: 'visible' }}
          exit={{ opacity: 0, visibility: 'hidden' }}
          transition={{ duration: 0.5 }}
        >
          <VideoPlayer
            src="https://www.w3schools.com/html/movie.mp4"
            type="video/mp4"
            controls
            autoPlay
          />

          {/* Close button */}
          <CloseButton onClick={toggleVideo}>X</CloseButton>
        </FullscreenVideoWrapper>
      )}
    </div>
  );
};