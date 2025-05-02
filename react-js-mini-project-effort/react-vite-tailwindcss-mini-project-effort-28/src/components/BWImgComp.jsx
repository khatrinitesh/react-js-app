import React from 'react';
import { motion } from 'framer-motion';
import { useImgStore } from '../store/useImgStore';

const BWImgComp = () => {
    const { isColor, toggleImage } = useImgStore();
  return (
    <>
       <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <motion.img
        src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
        alt="BW to Color"
        onClick={toggleImage}
        initial={false}
        animate={{ filter: isColor ? 'grayscale(0%)' : 'grayscale(100%)' }}
        transition={{ duration: 0.5 }}
        style={{
          width: '300px',
          height: 'auto',
          borderRadius: '12px',
          cursor: 'pointer',
        }}
      />
      <p style={{ color: '#fff' }}>Click the image to toggle color</p>
    </div>
    </>
  );
}

export default BWImgComp;
