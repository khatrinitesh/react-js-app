import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { accordionData } from './../constants.jsx/accordionData';

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        // Toggle the current accordion section or close it if already open
        setActiveIndex(activeIndex === index ? null : index);
      };
  return (
    <>
    
     <div className="accordion-container gap-[10px]">
     <h2 className="text-[50px] font-bold">Accordion</h2>
      {accordionData.map((item, index) => (
        <div key={index} className="accordion-item">
          {/* Accordion Header */}
           <motion.div
            className="accordion-header bg-gray-800 text-white p-4 cursor-pointer"
            onClick={() => toggleAccordion(index)}
            whileHover={{ scale: 1.05 }} // Hover effect
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
          </motion.div>

          {/* Accordion Content (animated) */}
          <AnimatePresence>
          {activeIndex === index && (
              <motion.div
                className="accordion-content bg-gray-200 p-4"
                initial={{ opacity: 0 }} // Start with opacity 0 (hidden)
                animate={{ opacity: 1 }}  // Fade-in effect when expanding
                exit={{
                  opacity: 0,           // Fade-out effect when collapsing
                  transition: { delay: 0.3 },  // Add a delay for a smoother fade-out
                }}
                transition={{
                  duration: 0.6,         // Duration of the fade-in effect
                  ease: "easeInOut",     // Smooth easing for both fade-in and fade-out
                }}
              >
                <p>{item.content}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div> 
    </>
  );
}

export default Accordion;
