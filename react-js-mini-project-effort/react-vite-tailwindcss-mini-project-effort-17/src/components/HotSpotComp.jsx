import React from 'react';
import { motion } from 'framer-motion';

const HotSpotComp = () => {
  return (
    <>
      <HotspotExample/>
    </>
  );
}

export default HotSpotComp;

const HotspotExample = () => {
  return (
    <div style={styles.container}>
      {/* Image or any other container */}
      <div style={styles.imageContainer}>
        {/* Hotspot 1 */}
        <motion.div
          style={{ ...styles.hotspot, top: '20%', left: '30%' }}
          whileHover={{ scale: 1.2, opacity: 1 }}
          initial={{ opacity: 0.6 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Hotspot 1
        </motion.div>
        
        {/* Hotspot 2 */}
        <motion.div
          style={{ ...styles.hotspot, top: '50%', left: '70%' }}
          whileHover={{ scale: 1.2, opacity: 1 }}
          initial={{ opacity: 0.6 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Hotspot 2
        </motion.div>

        {/* Hotspot 3 */}
        <motion.div
          style={{ ...styles.hotspot, top: '70%', left: '40%' }}
          whileHover={{ scale: 1.2, opacity: 1 }}
          initial={{ opacity: 0.6 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Hotspot 3
        </motion.div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
  },
  imageContainer: {
    position: 'relative',
    width: '600px',
    height: '400px',
    backgroundImage: 'url("https://via.placeholder.com/600x400")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  hotspot: {
    position: 'absolute',
    width: '100px',
    height: '100px',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    cursor: 'pointer',
    textAlign: 'center',
    fontWeight: 'bold',
  },
};

