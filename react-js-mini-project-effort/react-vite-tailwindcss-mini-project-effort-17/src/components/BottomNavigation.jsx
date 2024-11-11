import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BottomNavigation = () => {
  return (
    <>
      <MobileNavbar/>
    </>
  );
}

export default BottomNavigation;

const MobileNavbar = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    return (
      <div>
        <button onClick={() => setIsVisible(!isVisible)} className="p-2">
          Toggle Navbar
        </button>
        {isVisible && (
          <motion.div
            className="fixed bottom-0 left-0 w-full bg-gray-800 text-white"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          >
            <div className="flex justify-around items-center p-4">
              <NavItem to="/" label="Home" />
              <NavItem to="/about" label="About" />
              <NavItem to="/services" label="Services" />
              <NavItem to="/contact" label="Contact" />
            </div>
          </motion.div>
        )}
      </div>
    );
  };

  const BottomNav = () => {
    return (
      <motion.div
        className="fixed bottom-0 left-0 w-full bg-gray-800 text-white"
        initial={{ y: 100, opacity: 0 }} // Initial state: offscreen and invisible
        animate={{ y: 0, opacity: 1 }}   // Animate to visible and on-screen
        exit={{ y: 100, opacity: 0 }}    // Exit animation: slide off-screen
        transition={{ type: 'spring', stiffness: 80, damping: 20 }} // Smooth spring transition
      >
        <div className="flex justify-around items-center p-4">
          <NavItem to="/" label="Home" />
          <NavItem to="/about" label="About" />
          <NavItem to="/services" label="Services" />
          <NavItem to="/contact" label="Contact" />
        </div>
      </motion.div>
    );
  };
  
  const NavItem = ({ to, label }) => {
    return (
      <motion.div
        whileHover={{
          scale: 1.2, // Scale up the nav item on hover
          transition: { duration: 0.3 },
        }}
        whileTap={{
          scale: 0.95, // Slightly shrink on tap/click
          transition: { duration: 0.2 },
        }}
      >
        <Link to={to} className="text-lg font-semibold">
          {label}
        </Link>
      </motion.div>
    );
  };