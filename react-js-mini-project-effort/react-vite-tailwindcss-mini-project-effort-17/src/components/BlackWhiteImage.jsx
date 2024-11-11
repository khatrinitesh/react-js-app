import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BlackWhiteImage = () => {
  return (
    <>
       <div className="image-container" style={{ display: 'flex', gap: '20px' }}>
      <AnimatedImage src="https://randomuser.me/api/portraits/men/32.jpg" alt="Avatar 1" size={300} />
      <AnimatedImage src="https://randomuser.me/api/portraits/women/44.jpg" alt="Avatar 2" size={300} />
      <AnimatedImage src="https://randomuser.me/api/portraits/men/51.jpg" alt="Avatar 3" size={300} />
    </div>
    </>
  );
}

export default BlackWhiteImage;

const AnimatedImage = ({ src, alt, size = 300 }) => {
    const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Once the image has loaded, we can trigger the transition
    setIsLoaded(true);
  }, 1000);

    return (
        <motion.div
      style={{
        width: size,
        height: size,
        overflow: 'hidden',
        borderRadius: '8px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      }}
      initial={{ filter: 'grayscale(100%)' }} // Start in black and white
      animate={{ filter: isLoaded ? 'grayscale(0%)' : 'grayscale(100%)' }} // Animate once the image is loaded
      transition={{
        duration: 1, // Transition duration
        ease: 'easeInOut', // Smooth easing
      }}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        onLoad={() => setIsLoaded(true)} // Set the loaded state once the image has loaded
      />
    </motion.div>
    );
  };
  
