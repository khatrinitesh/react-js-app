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

// Styled component for the preloader (loading spinner)
const Loader = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  &::after {
    content: "";
    width: 30px;
    height: 30px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #007bff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
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
  const [loading, setLoading] = useState(false); // Loading state for "Load More" button

  // Function to handle the "Load More" button click
  const handleLoadMore = () => {
    setLoading(true); // Set loading state to true

    // Simulate an async request (e.g., fetching data)
    setTimeout(() => {
      setVisibleItems((prevVisibleItems) => prevVisibleItems + 3); // Load 3 more items
      setLoading(false); // Set loading state to false after items are loaded
    }, 1000); // Simulate 1 second delay (e.g., network request delay)
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
      
      {/* Show loader if loading is true */}
      {loading && <Loader />}
      
      {/* "Load More" button */}
      {!loading && visibleItems < allItems.length && (
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
