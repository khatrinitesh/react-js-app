import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { bulletData } from '../constants/bulletData';

const BulletColorComp = () => {
  return (
    <>
      <BulletList/>
    </>
  );
}

export default BulletColorComp;

const BulletList = () => {
   
  
    return (
        <div className="bullet-list-container">
        <motion.ul
          className="list-none"
          initial={{ opacity: 0 }} // Initial state: invisible
          animate={{ opacity: 1 }} // Fade in
          transition={{ duration: 1 }} // Duration of fade-in
        >
          {bulletData.map((item, index) => (
            <motion.li
              key={index}
              className="text-lg"
              style={{
                listStyleType: 'none', // Remove default bullet
                paddingLeft: '1.5rem', // Add padding to simulate bullet space
                position: 'relative',
              }}
              initial={{ color: '#000' }} // Start with black color
              animate={{
                color: ['#000', '#ff6347', '#4682b4', '#32cd32'], // Color transition
              }}
              transition={{
                duration: 3, // Duration for full color change
                repeat: Infinity, // Infinite repeat
                repeatType: 'loop', // Loop the color change animation
                ease: 'easeInOut', // Easing function for smooth transitions
              }}
              whileHover={{ color: '#ff69b4' }} // Change color on hover
            >
              {/* Bullet point simulation using `::before` pseudo-element */}
              <motion.span
                style={{
                  position: 'absolute',
                  left: '-1.5rem',
                  top: '0.5rem',
                  width: '8px',
                  height: '8px',
                  backgroundColor: 'currentColor', // Bullet color uses the current text color
                  borderRadius: '50%',
                }}
              />
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    );
  };
  
