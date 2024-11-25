import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';


const MagnifiedDocComp = () => {
  return (
    <>
      <AnimatedBox/>
    </>
  );
}

export default MagnifiedDocComp;

// Create a styled component using Styled Components
const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: lightcoral;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
`;

// Animate the styled component with Framer Motion
const AnimatedBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, rotate: 360 }}
      transition={{ duration: 2 }}
    >
      <Box>
        Hello World!
      </Box>
    </motion.div>
  );
}
