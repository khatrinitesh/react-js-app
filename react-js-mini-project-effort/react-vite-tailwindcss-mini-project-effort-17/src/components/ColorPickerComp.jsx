import React, { useState } from "react";
import { motion } from "framer-motion";

const ColorPickerComp = () => {
  return (
    <>
      <ColorPicker/>
    </>
  );
};

export default ColorPickerComp;

const ColorPicker = () => {
  const [color, setColor] = useState("#3498db"); // Default color
  const [isOpen, setIsOpen] = useState(false); // For toggling the color options

  // Function to handle the color change
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  // Toggle color picker visibility
  const togglePicker = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className="color-picker-container">
      {/* Color display box */}
      <motion.div
        className="color-display"
        style={{ backgroundColor: color }}
        onClick={togglePicker}
        animate={{ scale: isOpen ? 1.1 : 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <span>{color}</span>
      </motion.div>

      {/* Color Picker Button */}
      <button className="toggle-btn" onClick={togglePicker}>
        {isOpen ? 'Close Picker' : 'Pick a Color'}
      </button>

      {/* Color Picker Options */}
      {isOpen && (
        <motion.div
          className="color-options"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {/* Color Input */}
          <input
            type="color"
            value={color}
            onChange={handleColorChange}
            className="color-input"
          />
          <div className="color-palette">
            {/* Predefined colors */}
            <div
              className="color-swatch"
              style={{ backgroundColor: '#ff5733' }}
              onClick={() => setColor('#ff5733')}
            />
            <div
              className="color-swatch"
              style={{ backgroundColor: '#2ecc71' }}
              onClick={() => setColor('#2ecc71')}
            />
            <div
              className="color-swatch"
              style={{ backgroundColor: '#f39c12' }}
              onClick={() => setColor('#f39c12')}
            />
            <div
              className="color-swatch"
              style={{ backgroundColor: '#9b59b6' }}
              onClick={() => setColor('#9b59b6')}
            />
          </div>
        </motion.div>
      )}
    </div>
    </>
  )
};
