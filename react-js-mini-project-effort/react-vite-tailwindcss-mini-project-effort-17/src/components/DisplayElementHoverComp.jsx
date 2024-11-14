import React from 'react';
import { motion } from 'framer-motion';

const DisplayElementHoverComp = () => {
  return (
    <>
      <ClaymorphismCard/>
    </>
  );
}

export default DisplayElementHoverComp;

const ClaymorphismCard = () => {
    return (
      <motion.div
        initial={{ scale: 1, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.2)",
          transition: { type: "spring", stiffness: 400, damping: 10 },
        }}
        whileTap={{
          scale: 0.95,
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
        }}
        style={{
          width: '300px',
          height: '200px',
          background: 'linear-gradient(135deg, #f9c6f3, #c8f0f3)',  // Soft pastel gradient
          borderRadius: '20px', // Rounded corners
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Soft shadow for the Claymorphism effect
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
      >
        <h3 style={{ fontSize: '24px', color: '#fff', fontWeight: 'bold' }}>
          Hover Me!
        </h3>
      </motion.div>
    );
  };


