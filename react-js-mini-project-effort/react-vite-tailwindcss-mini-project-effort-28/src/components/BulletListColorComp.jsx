import React from 'react';
import { useBulletStore } from './../store/useBulletStore';
import { bulletColors } from './../constants/constants';
import { motion } from 'framer-motion';

const BulletListColorComp = () => {
    const { activeIndex, setActiveIndex } = useBulletStore();
  return (
    <>
      <div className="bullet-row">
      {bulletColors.map((color, index) => (
        <motion.div
          key={index}
          className="bullet"
          onClick={() => setActiveIndex(index)}
          animate={{
            backgroundColor: activeIndex === index ? color : '#ccc',
            scale: activeIndex === index ? 1.2 : 1,
          }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
      ))}
    </div>
    </>
  );
}

export default BulletListColorComp;
