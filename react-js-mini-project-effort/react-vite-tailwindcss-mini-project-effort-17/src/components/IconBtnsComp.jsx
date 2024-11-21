import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaCog } from 'react-icons/fa'; // Using react-icons for icons

const IconBtnsComp = () => {
  return (
    <>
      <AnimatedIconButtons/>
    </>
  );
}

export default IconBtnsComp;

// Constants for animation variants and transitions
const animationVariants = {
    initial: {
      opacity: 0.7,
      scale: 1,
      rotate: 0,
    },
    hover: {
      opacity: 1,
      scale: 1.2,
      rotate: 10,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
    tap: {
      scale: 0.9,
      rotate: -10,
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 20,
      },
    },
  };
  
  // Reusable styles for icon buttons
  const buttonStyle = {
    backgroundColor: '#333',
    border: 'none',
    padding: '20px',
    borderRadius: '50%',
    cursor: 'pointer',
    outline: 'none',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  
  const iconStyle = {
    color: 'white',
    fontSize: '24px',
  };

  const AnimatedIconButtons = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <motion.button
          variants={animationVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          style={buttonStyle}
        >
          <FaHome style={iconStyle} />
        </motion.button>
  
        <motion.button
          variants={animationVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          style={buttonStyle}
        >
          <FaUser style={iconStyle} />
        </motion.button>
  
        <motion.button
          variants={animationVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          style={buttonStyle}
        >
          <FaCog style={iconStyle} />
        </motion.button>
      </div>
    );
  };





