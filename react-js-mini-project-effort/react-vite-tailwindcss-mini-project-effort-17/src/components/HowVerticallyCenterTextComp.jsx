import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';


const HowVerticallyCenterTextComp = () => {
  return (
    <>
      <VerticalCenterText/>
    </>
  );
}

export default HowVerticallyCenterTextComp;

// Container that will center the text
const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
  background-color: #f0f0f0;
`;

// Styled Component for the text
const CenteredText = styled(motion.div)`
  font-size: 40px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;

const VerticalCenterText = () => {
  return (
    <CenteredContainer>
      <CenteredText
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Vertically Centered Text
      </CenteredText>
    </CenteredContainer>
  );
};
