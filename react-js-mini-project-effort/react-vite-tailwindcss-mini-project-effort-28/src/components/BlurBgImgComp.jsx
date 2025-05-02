import React from 'react';
import { useBlurStore } from './../store/useBlurStore';
import { motion } from 'framer-motion';

const BlurBgImgComp = () => {

    const {isBlurred, toggleBlur} = useBlurStore();
  return (
    <>
      <motion.div
        className="blur-background"
        animate={{
          filter: isBlurred ? 'blur(10px)' : 'blur(0px)',
          scale: isBlurred ? 1.05 : 1,
        }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />
      <div className="content-overlay">
        <h1>Blur Background Demo</h1>
        <button onClick={toggleBlur}>
          {isBlurred ? 'Unblur' : 'Blur'} Background
        </button>
      </div>
    </>
  );
}

export default BlurBgImgComp;
