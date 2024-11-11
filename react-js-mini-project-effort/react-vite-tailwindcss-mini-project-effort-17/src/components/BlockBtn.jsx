import React from 'react';
import { motion } from 'framer-motion';

const BlockBtn = () => {
    const handleButtonClick = (buttonName) => {
        alert(`${buttonName} clicked`);
      };
  return (
    <>
      <BlockButton text="Sign up" onClick={() =>handleButtonClick('sign up')}/>
      <BlockButton text="Sign in" onClick={() =>handleButtonClick('sign in')}/>
      <BlockButton text="Learn More" onClick={() =>handleButtonClick('Learn More')}/>
    </>
  );
}

export default BlockBtn;

const BlockButton = ({ text, onClick }) => {
    return (
      <motion.button
        onClick={onClick}
        style={{
          display: 'block',         // Makes the button a block element (full width)
          width: '100%',            // Ensure it spans the full width of its container
          padding: '15px 20px',     // Add some padding to the button
          fontSize: '18px',         // Set a font size
          fontWeight: 'bold',       // Make the text bold
          color: '#fff',            // White text
          backgroundColor: '#007BFF', // Default button color (blue)
          border: 'none',           // Remove border
          borderRadius: '8px',      // Rounded corners
          cursor: 'pointer',       // Change the cursor on hover
          transition: 'background-color 0.3s ease', // Transition for background color
        }}
        initial={{ opacity: 0 }} // Start with the button invisible
        animate={{ opacity: 1 }} // Fade in the button
        whileHover={{
          scale: 1.1,             // Scale the button on hover
          backgroundColor: '#0056b3', // Change background color on hover
        }}
        whileTap={{ scale: 0.95 }} // Slightly scale down when clicked
        transition={{
          type: 'spring',         // Smooth spring animation for scale
          stiffness: 300,         // Control the spring stiffness
          damping: 20,            // Control the damping for smoothness
        }}
      >
        {text}
      </motion.button>
    );
  };
