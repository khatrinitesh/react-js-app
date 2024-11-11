import React from 'react';
import { motion } from "framer-motion";

const AnimateIcons = () => {
  return (
    <>
      <motion.svg
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 1 }}
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 100 100"
    >
      <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="blue" />
    </motion.svg>
    </>
  );
}

export default AnimateIcons;


