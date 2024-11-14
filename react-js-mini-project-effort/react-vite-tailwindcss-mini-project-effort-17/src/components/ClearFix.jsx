import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ClearFixComp = () => {
  return (
    <>
      <AnimatedClearFix/>
    </>
  );
}

export default ClearFixComp;

const AnimatedClearFix = () => {
    const [items, setItems] = useState([1, 2, 3]);

    const addItem = () => {
        setItems([...items, items.length + 1]);
      };
    
      const removeItem = () => {
        setItems(items.slice(0, -1));
      };
    return(
        <>
        <div className="container clearfix">
      <motion.div
        className="box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        Box 1
      </motion.div>

      <motion.div
        className="box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        Box 2
      </motion.div>

      <motion.div
        className="box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        Box 3
      </motion.div>

      <button onClick={addItem}>Add Box</button>
      <button onClick={removeItem}>Remove Box</button>
    </div>
        </>
    )
}

