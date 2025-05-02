import React, { useEffect } from 'react';
import { useBoxStore } from '../store/useBgBoxesStore';
import { motion } from 'framer-motion';

const BgBoxesComp = () => {
    const { boxes, updateBoxes } = useBoxStore();

  useEffect(() => {
    const interval = setInterval(updateBoxes, 30);
    return () => clearInterval(interval);
  }, [updateBoxes]);

  return (
    <>
     <div className="background-boxes">
      {boxes.map((box) => (
        <motion.div
          key={box.id}
          className="box"
          animate={{ x: box.x, y: box.y }}
          transition={{ type: 'tween', ease: 'linear', duration: 0.03 }}
          style={{
            width: box.size,
            height: box.size,
            backgroundColor: box.color,
          }}
        />
      ))}
    </div>
    </>
  )
}

export default BgBoxesComp;
