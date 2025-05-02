import React from 'react';
import { useBorderStore } from '../store/useBorderStore';
import { motion } from 'framer-motion';

const BorderAroundImgComp = () => {
    const { borderColor, borderThickness, changeBorder } = useBorderStore();
  return (
    <>
      <div className="image-container">
      <motion.img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        alt="Example"
        initial={{ borderColor, borderWidth: borderThickness }}
        animate={{
          borderColor,
          borderWidth: borderThickness,
        }}
        transition={{ duration: 0.5 }}
        className="border-image"
      />
      <div className="controls">
        <button onClick={() => changeBorder('red', 10)}>Red Border</button>
        <button onClick={() => changeBorder('green', 15)}>Green Border</button>
        <button onClick={() => changeBorder('yellow', 5)}>Yellow Border</button>
      </div>
    </div>
    </>
  );
}

export default BorderAroundImgComp;
