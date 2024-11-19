import React from 'react';
import { motion } from 'framer-motion';

const HeroImgComp = () => {
  return (
    <>
      <HeroImage/>
    </>
  );
}

export default HeroImgComp;


const HeroImage = () => {
    return (
      <div className="hero-container" style={{ position: 'relative', height: '100vh' }}>
        <motion.div
          className="hero-image"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url(https://your-image-url.com)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          initial={{ opacity: 0, scale: 1.1 }} // Initial state
          animate={{ opacity: 1, scale: 1 }} // Final state
          transition={{ duration: 2 }} // Transition duration
        />
  
        <motion.div
          className="hero-text"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            textAlign: 'center',
          }}
          initial={{ opacity: 0, y: 30 }} // Initial state for text
          animate={{ opacity: 1, y: 0 }} // Final state for text
          transition={{ duration: 1, delay: 0.5 }} // Transition duration for text
        >
          <h1>Welcome to Our Website</h1>
          <p>Your adventure starts here</p>
        </motion.div>
      </div>
    );
  };