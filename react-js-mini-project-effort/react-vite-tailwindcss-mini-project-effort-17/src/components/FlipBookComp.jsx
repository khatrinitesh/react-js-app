import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const FlipBookComp = () => {
  return (
    <>
      <FlipbookComponent/>
    </>
  );
}

export default FlipBookComp;

// Styled component for the container
const BookContainer = styled.div`
  perspective: 2000px;
  width: 600px;
  height: 400px;
  margin: 50px auto;
  cursor: pointer;
`;

// Book wrapper component with 3D effect
const Flipbook = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transform: rotateY(0deg);
  transition: transform 0.8s ease;
`;

// Styled component for each page
const Page = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  backface-visibility: hidden;
  border: 1px solid #ccc;
`;

// Page styles for front and back
const Front = styled(Page)`
  background-color: #4CAF50;
  color: white;
`;

const Back = styled(Page)`
  background-color: #FF6347;
  color: white;
  transform: rotateY(180deg);
`;

const FlipbookComponent = () => {
    const [pageIndex, setPageIndex] = useState(0);
  
    const pages = [
      "Page 1: Welcome to the Flipbook!",
      "Page 2: This is the second page.",
      "Page 3: More pages ahead.",
      "Page 4: Almost done!",
      "Page 5: The End.",
    ];
  
    // Flip the book to the next page
    const flipToNextPage = () => {
      setPageIndex((prevIndex) => (prevIndex + 1) % pages.length);
    };
  
    return (
      <BookContainer onClick={flipToNextPage}>
        <Flipbook
          animate={{ rotateY: pageIndex * 180 }}
          transition={{ duration: 0.8 }}
        >
          {/* Front side */}
          <Front>{pages[pageIndex]}</Front>
          {/* Back side (used for flip effect) */}
          <Back>{pages[(pageIndex + 1) % pages.length]}</Back>
        </Flipbook>
      </BookContainer>
    );
  };
  


