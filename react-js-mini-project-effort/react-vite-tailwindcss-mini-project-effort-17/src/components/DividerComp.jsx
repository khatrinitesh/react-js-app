import React from 'react';
import { motion } from 'framer-motion';

const DividerComp = () => {
  return (
    <>
      <ClaymorphismDivider/>
    </>
  );
}

export default DividerComp;

const ClaymorphismDivider = () => {
    return (
      <motion.div
        initial={{ scaleX: 1, boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
        whileHover={{
          scaleX: 1.05,
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
          transition: { type: "spring", stiffness: 400, damping: 25 },
        }}
        style={{
          width: '80%',  // Adjust the width based on your layout
          height: '6px',  // Divider height
          margin: '20px auto',
          borderRadius: '50px', // Rounded corners for Claymorphism look
          background: 'linear-gradient(135deg, #f9c6f3, #c8f0f3)', // Soft pastel gradient
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Soft shadow for 3D effect
          cursor: 'pointer',
          transition: 'all 0.3s ease', // Smooth transition for all properties
        }}
      />
    );
  };
  

