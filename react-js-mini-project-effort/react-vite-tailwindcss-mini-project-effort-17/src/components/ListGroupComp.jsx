import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ListGroupComp = () => {
  return (
    <>
      <ListGrpExample/>
    </>
  );
}

export default ListGroupComp;


// Create a styled container for the list group
const ListContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

// Styled component for individual list items
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

// Define the motion variants for the animation
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};


const ListGrpExample = () => {
    // List of items to display
    const [items, setItems] = useState([
      "Item 1",
      "Item 2",
      "Item 3",
      "Item 4",
      "Item 5",
    ]);
  
    const handleItemClick = (index) => {
      alert(`Clicked on: ${items[index]}`);
    };
  
    // Remove item from the list
    const handleRemoveItem = (index) => {
      const newItems = items.filter((_, i) => i !== index);
      setItems(newItems);
    };
  
    return (
      <ListContainer>
        {items.map((item, index) => (
          <ListItem
            key={index}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => handleItemClick(index)}
            whileHover={{ scale: 1.05 }}
          >
            {item}
            <button
              style={{
                marginLeft: "10px",
                padding: "5px 10px",
                backgroundColor: "#dc3545",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
              }}
              onClick={(e) => {
                e.stopPropagation();
                handleRemoveItem(index);
              }}
            >
              Remove
            </button>
          </ListItem>
        ))}
      </ListContainer>
    );
  };
  

