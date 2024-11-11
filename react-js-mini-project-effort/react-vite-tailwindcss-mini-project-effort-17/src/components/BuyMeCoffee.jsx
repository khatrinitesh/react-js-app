import React from 'react';
import { motion } from 'framer-motion';

const BuyMeCoffeeComp = () => {
  return (
    <>
     <BuyMeACoffeeButton/> 
    </>
  );
}

export default BuyMeCoffeeComp;

const BuyMeACoffeeButton = () => {
    return (
      <motion.div
        className="buy-coffee-container"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Floating animated button */}
        <motion.button
          className="buy-coffee-button"
          style={{
            padding: '12px 24px',
            backgroundColor: '#FF813F',
            color: '#fff',
            fontSize: '16px',
            borderRadius: '30px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
          whileHover={{
            scale: 1.1,
            backgroundColor: '#e5762e',
            boxShadow: '0 8px 15px rgba(0,0,0,0.2)',
            transition: { duration: 0.3 },
          }}
          whileTap={{
            scale: 0.95,
            backgroundColor: '#c66d2d',
            transition: { duration: 0.1 },
          }}
          animate={{
            y: [0, -10, 0],
            transition: {
              duration: 2,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 0.5,
            },
          }}
          onClick={() => window.open('https://www.buymeacoffee.com', '_blank')}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Buy_Me_A_Coffee_logo.png"
            alt="Buy Me a Coffee Logo"
            style={{ width: '24px', height: '24px' }}
          />
          Buy Me a Coffee
        </motion.button>
      </motion.div>
    );
  };