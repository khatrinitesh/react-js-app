import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { items } from '../constants/gridlayoutData';

const GridLayoutComp = () => {
  return (
    <>
      <AnimatedGridLayout/>
    </>
  );
}

export default GridLayoutComp;

// Styled component for the grid container
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Responsive grid */
  gap: 20px;
  padding: 20px;
`;

// Styled component for individual grid items
const GridItem = styled(motion.div)`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const AnimatedGridLayout = () => {
    return (
      <GridContainer>
        {items.map((item) => (
          <GridItem
            key={item.id}
            initial={{ opacity: 0, y: 50 }} // Initial state: off-screen
            animate={{ opacity: 1, y: 0 }}   // Final state: visible and in place
            transition={{ duration: 0.6, ease: 'easeOut', delay: item.id * 0.1 }} // Staggered animation
          >
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </GridItem>
        ))}
      </GridContainer>
    );
  };


