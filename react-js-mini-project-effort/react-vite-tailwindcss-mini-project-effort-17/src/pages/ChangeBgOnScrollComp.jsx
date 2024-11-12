import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ChangeBgOnScrollComp = () => {

    // State to manage background color based on scroll position
  const [bgColor, setBgColor] = useState('white');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition < 100) {
        setBgColor('white');
      } else if (scrollPosition >= 100 && scrollPosition < 300) {
        setBgColor('lightblue');
      } else if (scrollPosition >= 300 && scrollPosition < 500) {
        setBgColor('lightgreen');
      } else {
        setBgColor('lightcoral');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
       <motion.div
      className="app-container"
      style={{ backgroundColor: bgColor }}
      animate={{ backgroundColor: bgColor }}
      transition={{ duration: 1 }} // Framer Motion transition for color change
    >
      <div className="content">
        <h1>Change Background Color on Scroll</h1>
        <p>Scroll down to see the background color change.</p>
        <div className="scrollable-content">
          <p>Scroll the page to see the background change based on the scroll position.</p>
          <div style={{ height: '1500px' }}></div>
        </div>
      </div>
    </motion.div>
    </>
  );
}

export default ChangeBgOnScrollComp;
