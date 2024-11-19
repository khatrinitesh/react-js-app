import React from 'react';
import { motion } from 'framer-motion';

const HorizontalScrollMenuComp = () => {
  return (
    <>
      <HorizontalScrollMenu/>
    </>
  );
}

export default HorizontalScrollMenuComp;

const HorizontalScrollMenu = () => {
    const menuItems = ["Home", "About", "Services", "Portfolio", "Contact", "Blog", "Testimonials"];
  
    return (
      <div style={styles.container}>
        <motion.div
          style={styles.menuWrapper}
          whileHover={{ x: -20 }}  // Optional: Adds a little hover effect
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              style={styles.menuItem}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }} // Stagger the appearance of items
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  };

  
  const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        padding: '20px',
        overflowX: 'auto',
        width: '100%',
        backgroundColor: '#f4f4f4',
      },
      menuWrapper: {
        display: 'flex',
        gap: '30px',  // Space between menu items
        alignItems: 'center',
        padding: '10px 0',
        whiteSpace: 'nowrap',  // Prevent wrapping of menu items
      },
      menuItem: {
        fontSize: '18px',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'color 0.3s ease',  // Smooth transition for hover effect
      },
  }


