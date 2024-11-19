import React from 'react';
import { motion } from "framer-motion";

const Headlinesanimationtexteffect = () => {
  return (
    <>
      <AnimatedHeadline text="Mollit irure exercitation irure eiusmod officia ut."/>
    </>
  );
}

export default Headlinesanimationtexteffect;

const AnimatedHeadline = ({ text }) => {
    // Split the text into individual letters
    const letters = text.split("");
  
    return (
      <h1 style={{ display: "flex", fontSize: "3rem", fontWeight: "bold" }}>
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}  // Start off screen (or invisible)
            animate={{ opacity: 1, y: 0 }}   // Animate to visible and default position
            transition={{
              delay: index * 0.1,           // Delay each letter's animation
              duration: 0.5,                // Duration for the animation
              type: "spring",               // Spring physics for smooth animation
              stiffness: 100                // Optional, adjust the stiffness of the spring
            }}
          >
            {letter}
          </motion.span>
        ))}
      </h1>
    );
  };
