import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const HowVerticallyMiddleAlignFloatingElementUnknownHeightsComp = () => {
  return (
    <>
     <FloatingElements/> 
    </>
  );
}

export default HowVerticallyMiddleAlignFloatingElementUnknownHeightsComp;

// Container that will center the floating elements
const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;  /* Horizontally center */
  align-items: center;      /* Vertically center */
  height: 100vh;            /* Full viewport height */
  background-color: #f0f0f0;
  position: relative;       /* Make sure it can contain absolute positioned elements */
`;

// Styled component for the floating elements
const FloatingElement = styled(motion.div)`
  position: absolute;       /* Floating effect */
  top: 50%;                 /* Initial position at 50% of the container's height */
  left: 50%;                /* Initial position at 50% of the container's width */
  transform: translate(-50%, -50%); /* Adjust the position to center the element */
  background-color: #3498db;
  padding: 20px;
  color: white;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  font-size: 18px;
`;

const FloatingElements = () => {
  return (
    <CenteredContainer>
      {/* You can have multiple floating elements */}
      {/* START > FLOAT 1 */}
      <FloatingElement
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Floating Element 1
      </FloatingElement>
      {/* END > FLOAT 1 */}

       {/* START > FLOAT 2 */}
      <FloatingElement
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Floating Element 2
      </FloatingElement>
      {/* END > FLOAT 2 */}
    </CenteredContainer>
  );
};


