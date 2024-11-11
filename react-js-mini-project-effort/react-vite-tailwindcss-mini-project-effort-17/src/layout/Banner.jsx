import React from "react";
import { motion } from "framer-motion";

const Banner = ({ bannerStyle, title, content }) => {
  return (
    <motion.div
    className={`${bannerStyle} bannerContent py-[50px] bg-orange-300`}
    initial={{ opacity: 0, y: 50 }}  // Start with opacity 0 and slide from the bottom
    animate={{ opacity: 1, y: 0 }}   // Animate to full opacity and position (slide up to its final position)
    transition={{ duration: 1, ease: "easeOut" }} // Control animation duration and easing
  >
    <div className="container mx-auto">
      <motion.h2
        className="text-2xl font-bold"
        initial={{ opacity: 0, x: -50 }}  // Start the title from the left (x-axis)
        animate={{ opacity: 1, x: 0 }}    // Move to its final position
        transition={{ duration: 1, delay: 0.3 }}  // Delay the title animation for a staggered effect
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: 50 }}  // Start the content from the right (x-axis)
        animate={{ opacity: 1, x: 0 }}    // Move to its final position
        transition={{ duration: 1, delay: 0.6 }}  // Delay the content animation for a staggered effect
      >
        {content}
      </motion.p>
    </div>
  </motion.div>
  );
};

export default Banner;
