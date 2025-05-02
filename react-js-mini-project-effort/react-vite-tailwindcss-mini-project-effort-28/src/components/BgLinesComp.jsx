import React, { useEffect } from 'react';
import { useLineStore } from './../store/useBgLinesStore';
import { motion } from 'framer-motion';

const BgLinesComp = () => {
    const { lines, updateLines } = useLineStore();

    useEffect(() => {
      const interval = setInterval(updateLines, 30);
      return () => clearInterval(interval);
    }, [updateLines]);
  return (
    <>
       <div className="background-lines">
      {lines.map((line) => (
        <motion.div
          key={line.id}
          className="line"
          animate={{ x: line.x, y: line.y }}
          transition={{ type: 'tween', duration: 0.03 }}
          style={{
            width: line.direction === 'horizontal' ? '100vw' : '2px',
            height: line.direction === 'horizontal' ? '2px' : '100vh',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          }}
        />
      ))}
    </div>
    </>
  );
}

export default BgLinesComp;
