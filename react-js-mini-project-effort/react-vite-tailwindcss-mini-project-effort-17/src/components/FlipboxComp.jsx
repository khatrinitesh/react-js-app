import React, { useState } from "react";
import { motion } from "framer-motion";

const FlipboxComp = () => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <>
      <div className="flip-container" onClick={handleFlip}>
        <motion.div
          className={`flip-box ${flipped ? "flipped" : ""}`}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flip-box-front"
            initial={{ opacity: 1 }}
            animate={{ opacity: flipped ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2>Front Side</h2>
          </motion.div>

          <motion.div
            className="flip-box-back"
            initial={{ opacity: 0 }}
            animate={{ opacity: flipped ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2>Back Side</h2>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default FlipboxComp;
