import React from 'react';
import { motion } from 'framer-motion';
import { useBentoStore } from '../store/useBentoStore';
import { bentoitems } from '../constants/constants';

const BentoGridComp = () => {
    const {activeTile,setActiveTile}= useBentoStore();


  return (
    <>
       <div className="bento-grid">
      {bentoitems.map((item) => (
        <motion.div
          key={item.id}
          className={`bento-tile ${activeTile === item.id ? 'active' : ''}`}
          style={{ backgroundColor: item.color }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          layout
          onClick={() => setActiveTile(item.id === activeTile ? null : item.id)}
        >
          <h3>{item.title}</h3>
          {activeTile === item.id && <p>Expanded content for {item.title}</p>}
        </motion.div>
      ))}
    </div>
    </>
  );
}

export default BentoGridComp;
