import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ExpandingGridComp = () => {
  return (
    <>
    <ExpandingGrid/>
    </>
  )
};

export default ExpandingGridComp;

const ExpandingGrid = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleExpand = (id) => {
    setExpandedItem(id === expandedItem ? null : id); // toggle expand/collapse
  };
  return (
    <>
      <GridContainer>
        {Array.from({ length: 6 }).map((_, index) => (
          <GridItem
            key={index}
            id={index}
            expanded={expandedItem === index}
            onClick={() => handleExpand(index)}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ItemContent expanded={expandedItem === index}>
                <h3>Item {index + 1}</h3>
                <p>
                  This is a description for item {index + 1}.
                </p>
                <span className="my-[10px]">Click to {expandedItem ? 'collapse' : 'expand'}</span>
              </ItemContent>
            </motion.div>
          </GridItem>
        ))}
      </GridContainer>
    </>
  );
};

// Styled Components
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const GridItem = styled(motion.div)`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;

  /* Expanding animation */
  ${(props) =>
    props.expanded &&
    `
    transform: scale(1.2);
    z-index: 10;
  `}

  &:hover {
    transform: scale(1.05);
  }
`;

const ItemContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color:powderblue;

  h3 {
    font-size: 24px;
    margin-bottom: 10px;
    text-align: center;
  }

  p {
    font-size: 16px;
    color: #666;
    text-align: center;
  }

  /* Expanding text size and padding for expanded items */
  ${(props) =>
    props.expanded &&
    `
    padding: 40px;
    background-color:orange;
    h3 {
      font-size: 28px;
    }
    p {
      font-size: 18px;
    }
  `}
`;
