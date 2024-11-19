import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { tiles } from './../constants/tilesData';

const GridTileComp = () => {
  return (
    <>
      <GridTiles/>
    </>
  );
}

export default GridTileComp;

// Styled component for the grid container
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Responsive grid */
  gap: 20px;
  padding: 20px;
`;

// Styled component for individual grid tiles (each tile is a motion div)
const GridTile = styled(motion.div)`
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease;
  overflow: hidden; /* Prevent overflow of content */
  
  &:hover {
    transform: translateY(-10px); /* Hover effect: move tile up */
  }
`;

const GridTiles = () => {
    return (
      <GridContainer>
        {tiles.map((tile) => (
          <GridTile
            key={tile.id}
            initial={{ opacity: 0, y: 50 }}  // Initial state: off-screen
            animate={{ opacity: 1, y: 0 }}    // Animate into view
            transition={{ duration: 0.6, ease: 'easeOut', delay: tile.id * 0.1 }} // Staggered animation
          >
            <h3>{tile.title}</h3>
            <p>{tile.description}</p>
          </GridTile>
        ))}
      </GridContainer>
    );
  };

