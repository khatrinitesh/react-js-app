import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HideNavbarScrollComp = () => {
  return (
    <>
      <Navbar/>
    </>
  );
}

export default HideNavbarScrollComp;

const Navbar = () => {
    const [scrollingDown, setScrollingDown] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
          setScrollingDown(true); // Scroll down
        } else {
          setScrollingDown(false); // Scroll up
        }
        setLastScrollY(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);
  
    return (
      <motion.div
        className="navbar"
        initial={{ y: 0 }} // Initial position
        animate={{ y: scrollingDown ? -70 : 0 }} // Move navbar up when scrolling down
        transition={{ type: 'spring', stiffness: 300, damping: 30 }} // Smooth animation
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: 'black',
          padding: '10px 20px',
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h1>Logo</h1>
        <nav>
          <ul style={{ display: 'flex', gap: '20px' }}>
            <li><a href="#home" style={{ color: 'white' }}>Home</a></li>
            <li><a href="#about" style={{ color: 'white' }}>About</a></li>
            <li><a href="#services" style={{ color: 'white' }}>Services</a></li>
            <li><a href="#contact" style={{ color: 'white' }}>Contact</a></li>
          </ul>
        </nav>
      </motion.div>
    );
  };
