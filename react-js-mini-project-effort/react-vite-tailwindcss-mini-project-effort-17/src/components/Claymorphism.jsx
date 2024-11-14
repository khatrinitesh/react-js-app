import React from 'react';
import { motion } from "framer-motion";

const Claymorphism = () => {
  return (
    <>
      <ClayCard/>
    </>
  );
}

export default Claymorphism;

const ClayCard = () => {
    return (
      <motion.div
        className="clay-card"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <h3>Claymorphism Card</h3>
        <p>This is a claymorphism inspired UI element!</p>
      </motion.div>
    );
  };


