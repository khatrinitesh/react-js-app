import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ListGridViewComp = () => {
  return (
    <>
      <ListExample/>
    </>
  );
}

export default ListGridViewComp;

// Create a styled grid container using Styled Components
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  padding: 16px;
  max-width: 1200px;
  margin: 0 auto;
`;

// Create a styled grid item with some basic styling
const GridItem = styled(motion.div)`
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

// Define the animation variants
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ListExample = () => {
    // Example data for the grid
    const gridData = [
      "Item 1",
      "Item 2",
      "Item 3",
      "Item 4",
      "Item 5",
      "Item 6",
      "Item 7",
      "Item 8",
    ];
  
    return (
      <GridContainer>
        {gridData.map((item, index) => (
          <GridItem
            key={index}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            {item}
          </GridItem>
        ))}
      </GridContainer>
    );
  };


