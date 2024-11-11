import React from 'react';
import { motion } from 'framer-motion';

const ArrowsComp = () => {
  return (
    <>
      <RotatingArrow/>
    </>
  );
}

export default ArrowsComp;

const BouncingArrow = () => {
    return (
      <div className="flex justify-center mt-20">
        <motion.svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-blue-500"
          animate={{ y: [0, -20, 0] }}  // Arrow bounces up and down
          transition={{
            duration: 1,
            repeat: Infinity,          // Repeat the animation infinitely
            repeatType: 'loop',        // Repeat in a loop
            ease: 'easeInOut',         // Smooth easing
          }}
        >
          <path
            d="M12 2L12 16M12 16L8 12M12 16L16 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </div>
    );
  };
  
  const RotatingArrow = () => {
    return (
      <div className="flex justify-center mt-20">
        <motion.svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-green-500"
          animate={{ rotate: 360 }}  // Arrow will rotate continuously
          transition={{
            repeat: Infinity,
            duration: 2,         // Full rotation takes 2 seconds
            ease: 'linear',      // Linear rotation
          }}
        >
          <path
            d="M12 2L12 16M12 16L8 12M12 16L16 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </div>
    );
  };
  
