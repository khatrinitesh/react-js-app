import React from 'react';
import { motion } from 'framer-motion';

const BlurBackgroundImage = () => {
  return (
    <>
      <BlurBackgroundImageWithFade/>
    </>
  );
}

export default BlurBackgroundImage;

const BlurBackgroundImageWithFade = () => {
    return (
      <div
        style={{
          width: '100%',
          height: '100vh',
          position: 'relative',
          overflow: 'hidden',
          backgroundImage: 'url(https://via.placeholder.com/1200x800)', // Add your image URL here
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent overlay
          }}
          initial={{ filter: 'blur(10px)', opacity: 1 }} // Start with blurred and full opacity
          whileHover={{
            filter: 'blur(0px)', // Remove blur
            opacity: 0.5, // Fade out overlay on hover
          }}
          transition={{
            duration: 0.6,
            ease: 'easeInOut',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#fff',
            textAlign: 'center',
            zIndex: 1,
          }}
        >
          <h1 style={{ fontSize: '48px', fontWeight: 'bold' }}>Welcome to Our Website</h1>
          <p style={{ fontSize: '20px' }}>Explore our latest content and updates</p>
        </div>
      </div>
    );
  };
