import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const DeviceLookComp = () => {
  return (
    <>
      <DeviceMockup/>
    </>
  );
}

export default DeviceLookComp;

const DeviceMockup = () => {
    return (
      <DeviceContainer>
        <DeviceFrame
          initial="hidden"
          animate="visible"
          variants={deviceVariants}
        >
          <DeviceScreen>
            <AppContent>
              <Heading>Welcome to My App</Heading>
              <TextContent>
                This is a simple device mockup inside React with smooth animations using Framer Motion.
              </TextContent>
            </AppContent>
          </DeviceScreen>
        </DeviceFrame>
      </DeviceContainer>
    );
  };

// Framer Motion transition variants
const deviceVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 },
    },
  };
  

// Styled component for device container (mockup)
const DeviceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const DeviceFrame = styled(motion.div)`
  position: relative;
  width: 350px;
  height: 700px;
  border-radius: 40px;
  background-color: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  /* Device screen appearance */
  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    background-color: #f8f8f8;
    border-radius: 20px;
  }

  /* Responsiveness for different screen sizes */
  @media (max-width: 768px) {
    width: 90%;
    height: 500px;
  }

  @media (max-width: 480px) {
    width: 90%;
    height: 400px;
  }
`;

const DeviceScreen = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppContent = styled.div`
  text-align: center;
  padding: 20px;
  width: 100%;
  height: 100%;
`;

const Heading = styled.h2`
  color: #333;
  font-size: 24px;
`;

const TextContent = styled.p`
  color: #555;
  font-size: 16px;
  margin-top: 20px;
`;

