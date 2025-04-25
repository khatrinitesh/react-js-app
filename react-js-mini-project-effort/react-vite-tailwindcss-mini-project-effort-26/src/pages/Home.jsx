import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const Home = () => {
    useEffect(() => {
        gsap.from(".home-heading", { opacity: 0, y: -50, duration: 1 });
      }, []);
  return (
    <>
      <div className="page home">
      <motion.h1
        className="home-heading"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to Our Home Page!
      </motion.h1>
    </div>
    </>
  );
}

export default Home;
