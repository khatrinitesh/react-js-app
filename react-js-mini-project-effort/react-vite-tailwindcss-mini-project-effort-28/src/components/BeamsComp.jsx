import React, { useEffect } from 'react';
import { useBeamStore } from '../store/useBeamsStore';
import { motion } from 'framer-motion';

const BeamsComp = () => {

    const { beams, updateBeams } = useBeamStore();

  useEffect(() => {
    const interval = setInterval(updateBeams, 30);
    return () => clearInterval(interval);
  }, [updateBeams]);
  return (
    <>
       <div className="beam-background">
      {beams.map((beam) => (
        <motion.div
          key={beam.id}
          className="beam"
          animate={{
            x: beam.x,
            y: beam.y,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        />
      ))}
    </div>
    </>
  );
}

export default BeamsComp;
