import React from 'react';
import { motion } from 'framer-motion';

const BigHeaderComp = () => {
  return (
    <>
      <BigHeader/>
    </>
  );
}

export default BigHeaderComp;

const BigHeader = () => {
    return (
      <div className="big-header-container" style={{ textAlign: 'center', marginTop: '100px' }}>
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{
            opacity: { duration: 1 },
            scale: { duration: 0.8, ease: 'easeOut' },
          }}
          style={{
            fontSize: '80px',
            fontWeight: 'bold',
            color: '#333',
            margin: 0,
          }}
        >
          Welcome to My Website
        </motion.h1>
  
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{
            fontSize: '20px',
            color: '#555',
          }}
        >
          The best place for awesome content.
        </motion.p>
      </div>
    );
  };
