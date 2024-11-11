import React from 'react';
import { motion } from 'framer-motion';

const BorderAroundImg = () => {
  return (
    <>
      <AnimatedImageWithBorder/>
    </>
  );
}

export default BorderAroundImg;


const AnimatedImageWithBorder = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <motion.div
          style={{
            width: '300px',
            height: '300px',
            borderRadius: '10px',
            overflow: 'hidden',
          }}
          initial={{ borderWidth: '5px', borderColor: '#fff' }}
          whileHover={{
            borderWidth: '8px', // Grow the border on hover
            borderColor: '#f39c12', // Change the border color on hover
            transition: { duration: 0.4 },
          }}
          animate={{
            borderWidth: '5px',
            borderColor: '#fff',
            transition: { type: 'spring', stiffness: 100 },
          }}
        >
          <motion.img
            src="https://via.placeholder.com/300" // Replace with your image URL
            alt="Animated Border"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </motion.div>
      </div>
    );
  };
