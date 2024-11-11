import React  from 'react';
import { motion } from 'framer-motion';

const BtnImgComp = () => {
  return (
    <>
      <BtnImg/>
    </>
  );
}

export default BtnImgComp;

const BtnImg = () => {

    
  
    return (
        <>
          <div className="image-container" style={{ position: 'relative', display: 'inline-block' }}>
      {/* Image element */}
      <img
        src="https://via.placeholder.com/500x300"
        alt="Sample"
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '10px',
          display: 'block',
        }}
      />

      {/* Motion Button on top of the image */}
      <motion.button
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          color: '#fff',
          backgroundColor: '#007bff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        whileHover={{
          scale: 1.1,
          backgroundColor: '#0056b3',
          transition: { duration: 0.3 },
        }}
        whileTap={{
          scale: 0.95,
          backgroundColor: '#004085',
          transition: { duration: 0.1 },
        }}
      >
        Learn More
      </motion.button>
    </div>
        </>
    );
  };
  
