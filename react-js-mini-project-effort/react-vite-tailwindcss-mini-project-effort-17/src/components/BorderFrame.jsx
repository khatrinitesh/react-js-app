import React from 'react';
import { motion } from 'framer-motion';

const BorderFrame = () => {
  return (
    <>
      <AnimatedBorderFrameExpand/>
    </>
  );
}

export default BorderFrame;

const AnimatedBorderFrameExpand = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <motion.div
          style={{
            width: '300px',
            height: '300px',
            position: 'relative',
            borderRadius: '15px',
            overflow: 'hidden',
          }}
          initial={{ scale: 1 }} // Start with normal size
          whileHover={{
            scale: 1.1, // Slightly grow the container on hover to create "expansion" effect
            border: '4px solid #f39c12', // New border color and thickness on hover
            transition: { duration: 0.4 },
          }}
        >
          <motion.img
            src="https://via.placeholder.com/300" // Your image source
            alt="Animated Border"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              borderRadius: '15px', // Keep the image corners rounded
            }}
          />
        </motion.div>
      </div>
    );
  };
