import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaCog } from 'react-icons/fa'; // Using react-icons

const IconBarComp = () => {
  return (
    <>
      <IconBar/>
    </>
  );
}

export default IconBarComp;

const IconBar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    // Toggle the sidebar state
    const toggleSidebar = () => setIsOpen(!isOpen);
  
    return (
      <div>
        {/* Sidebar toggle button */}
        <button onClick={toggleSidebar} style={{ position: 'absolute', top: 20, left: 20 }}>
          {isOpen ? 'Close' : 'Open'} Sidebar
        </button>
  
        {/* Sidebar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isOpen ? 200 : 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100%',
            background: '#333',
            overflow: 'hidden',
            padding: '10px',
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={{ delay: 0.2 }}
          >
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '20px' }}>
                <FaHome style={{ color: 'white', fontSize: '24px' }} />
              </li>
              <li style={{ marginBottom: '20px' }}>
                <FaUser style={{ color: 'white', fontSize: '24px' }} />
              </li>
              <li>
                <FaCog style={{ color: 'white', fontSize: '24px' }} />
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    );
  };
  
