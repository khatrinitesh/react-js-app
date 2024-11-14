import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import framer motion

const ChangeBgColorWithDropdownMenuComp = () => {
  return (
    <div>
      <ChangeBgColorWithDM/>
    </div>
  );
}

export default ChangeBgColorWithDropdownMenuComp;

const ChangeBgColorWithDM = () => {
     // State to manage the selected background color
  const [bgColor, setBgColor] = useState('lightgreen'); // default color

  const handleColorChange = (e) => {
    setBgColor(e.target.value) // Update background color
  }
    return(
        <>
         <motion.div 
      className="app-container"
      style={{ backgroundColor: bgColor }}
      initial={{ backgroundColor: 'white' }}  // Initial background color
      animate={{ backgroundColor: bgColor }}  // Animate to the selected color
      transition={{ duration: 1 }}  // Set the transition duration for animation
    >
      <div className="content">
        <h1>Change Background Color with Framer Motion</h1>
        <p>Select a color from the dropdown below:</p>
          <select onChange={handleColorChange} value={bgColor}>
            <option value="lightgreen">Light Green</option>
            <option value="lightblue">Light Blue</option>
            <option value="lightyellow">Light Yellow</option>
            <option value="lightgray">Light Gray</option>
            <option value="lightpink">Light Pink</option>
          </select>
          </div>
    </motion.div>
        </>
    )
}
