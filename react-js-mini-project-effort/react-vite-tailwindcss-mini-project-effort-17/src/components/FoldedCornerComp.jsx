import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// Container for the element with a folded corner
const FoldedBox = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  background-color: #4CAF50;
  color: white;
  border-radius: 8px;
  padding: 20px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-family: "bebasregular";
`;

// The folded corner itself
const FoldedCorner = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  background-color: #FF6347;
  transform-origin: top right;
  border-top-right-radius: 10px;
  transform: rotate(45deg);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: white;
  font-size: 14px;
  font-family: "bebasregular";
`;


const FoldedCornerComp = () => {
  return (
    <>
      <FoldedCornerComponent/>
    </>
  );
}

export default FoldedCornerComp;

// Main component to render the folded corner box
const FoldedCornerComponent = () => {
    return (
      <FoldedBox>
        <FoldedCorner
          initial={{ rotate: 0 }}
          animate={{ rotate: 45 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          New
        </FoldedCorner>
        <div>Content goes here</div>
      </FoldedBox>
    );
  };

