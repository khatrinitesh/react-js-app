import React from 'react';
import { motion } from 'framer-motion';
import { avatars } from '../constants.jsx/avatarData';

// Animated Avatar Images with Framer Motion

const AvatarImages = () => {
  return (
    <>
      <div className="avatars-container" style={{ display: 'flex', gap: '20px' }}>
      {avatars.map((val,index) => (
        <Avatar src={val.src} key={index} alt={val.src} size={120}/>
      ))}
    </div>
    </>
  );
}

export default AvatarImages;



const Avatar = ({ src, alt, size = 100 }) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          overflow: 'hidden',
          border: '3px solid #fff',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <motion.img
          src={src}
          alt={alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
      </motion.div>
    );
  };
