import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ListWoBulletComp = () => {
  return (
    <>
      <ListExample/>
    </>
  );
}

export default ListWoBulletComp;



// Styled component for the list container
const ListContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

// Styled component for the individual list items
const ListItem = styled(motion.div)`
  background-color: #f8f9fa;
  padding: 16px;
  margin: 8px 0;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:hover {
    background-color: #e9ecef;
  }
`;

// Variants for Framer Motion animation
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

const ListExample = () => {
  // List of all items
  const allItems = [
    "Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10"
  ];

  // State to keep track of the number of visible items
  const [visibleItems, setVisibleItems] = useState(3); // Initially, show 3 items

  // Function to handle the "Load More" button click
  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 3); // Load 3 more items
  };

  // Get the items to display based on the visibleItems count
  const itemsToDisplay = allItems.slice(0, visibleItems);

  return (
    <ListContainer>
      {itemsToDisplay.map((item, index) => (
        <ListItem
          key={index}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          whileHover={{ scale: 1.05 }}
        >
          {item}
        </ListItem>
      ))}
      
      {/* "Load More" button */}
      {visibleItems < allItems.length && (
        <button
          onClick={handleLoadMore}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Load More
        </button>
      )}
    </ListContainer>
  );
};
