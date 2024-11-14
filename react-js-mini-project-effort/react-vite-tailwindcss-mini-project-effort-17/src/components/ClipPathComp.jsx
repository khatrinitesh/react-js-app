import React, { useState } from "react";
import { motion } from "framer-motion";

const ClipPathComp = () => {
  return (
    <>
    <ClipPathAnimation/>
    </>
  )
};

export default ClipPathComp;

const ClipPathAnimation = () => {
  const [isCircle, setIsCircle] = useState(false);

  // Toggle between square and circle shape
  const toggleShape = () => {
    setIsCircle(!isCircle);
  };
  return(
    <>
     <div className="appClip">
      <motion.div
        className="clip-shape"
        onClick={toggleShape}  // Toggle shape on click
        initial={{ clipPath: "circle(50% at 50% 50%)" }}  // Initially a small circle
        animate={{
          clipPath: isCircle ? "circle(50% at 50% 50%)" : "circle(0% at 50% 50%)",  // Toggle between circle and square
        }}
        transition={{ duration: 0.6 }}  // Animation duration
      />
    </div>
    </>
  )
};
