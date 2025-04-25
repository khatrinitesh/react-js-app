import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';


const About = () => {
    useEffect(() => {
        gsap.from(".about-heading", { opacity: 0, y: -50, duration: 1 });
      }, []);
  return (
    <>
      <div className="page about">
      <motion.h1
        className="about-heading"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Us
      </motion.h1>
    </div>
    </>
  );
}

export default About;
