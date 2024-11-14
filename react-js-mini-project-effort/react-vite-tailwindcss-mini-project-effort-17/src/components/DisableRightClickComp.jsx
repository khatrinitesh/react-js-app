import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const DisableRightClickComp = () => {
  return (
    <>
     <DisableRightClickComponent/> 
    </>
  );
}

export default DisableRightClickComp;

const DisableRightClickComponent = () => {
    // Function to prevent right-click
    const handleContextMenu = (event) => {
      event.preventDefault(); // This disables the right-click context menu
    };
  
    // Set up the event listener when the component mounts and clean up on unmount
    useEffect(() => {
      // Attach the event listener to the document
      document.addEventListener('contextmenu', handleContextMenu);
  
      // Clean up the event listener on component unmount
      return () => {
        document.removeEventListener('contextmenu', handleContextMenu);
      };
    }, []);
  
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          width: '300px',
          height: '200px',
          backgroundColor: 'lightblue',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          borderRadius: '8px',
        }}
      >
        <h2>Right-click is Disabled</h2>
      </motion.div>
    );
  };
  
