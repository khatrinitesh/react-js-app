import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const MediaQueriesComp = () => {
  return (
    <>
      <MediaQueriesExample/>
    </>
  );
}

export default MediaQueriesComp;

// Styled Component for the container with media queries
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;

  // Media Query for mobile devices (up to 600px)
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }

  // Media Query for tablet devices (601px - 900px)
  @media (min-width: 601px) and (max-width: 900px) {
    flex-direction: row;
    justify-content: space-around;
  }

  // Media Query for desktop devices (larger than 900px)
  @media (min-width: 901px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

// Styled component for individual items
const Box = styled(motion.div)`
  width: 250px;
  height: 250px;
  background-color: #6200ea;
  color: white;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  font-size: 18px;
  font-weight: bold;

  &:hover {
    background-color: #3700b3;
  }
`;

const MediaQueriesExample = () => {
    return(
        <>
        <Container>
      <Box
        initial={{ opacity: 0, x: -100 }}  // Start with hidden and move from left
        animate={{ opacity: 1, x: 0 }}     // Animate to full opacity and normal position
        transition={{ duration: 1 }}
      >
        Box 1
      </Box>
      <Box
        initial={{ opacity: 0, x: 100 }}  // Start with hidden and move from right
        animate={{ opacity: 1, x: 0 }}     // Animate to full opacity and normal position
        transition={{ duration: 1 }}
      >
        Box 2
      </Box>
      <Box
        initial={{ opacity: 0, scale: 0 }} // Start small and hidden
        animate={{ opacity: 1, scale: 1 }} // Animate to full size and opacity
        transition={{ duration: 1 }}
      >
        Box 3
      </Box>
    </Container>
        </>
    )
}