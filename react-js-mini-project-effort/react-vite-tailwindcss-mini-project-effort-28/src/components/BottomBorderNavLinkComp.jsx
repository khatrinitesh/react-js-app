import React from 'react';
import { motion } from 'framer-motion';
import { useNavStore } from './../store/useNavStore';
import { navLinks } from './../constants/constants';

const BottomBorderNavLinkComp = () => {
    const {activeLink,setActiveLink} = useNavStore();

  return (
    <>
       <nav className="nav-container">
      <ul className="nav-list">
        {navLinks.map((link, index) => (
          <li key={index} className="nav-item">
            <motion.div
              className={`nav-link ${activeLink === index ? 'active' : ''}`}
              onClick={() => setActiveLink(index)}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              {link}
              <motion.div
                className="bottom-border"
                initial={{ width: 0 }}
                animate={{ width: activeLink === index ? '100%' : '0%' }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            </motion.div>
          </li>
        ))}
      </ul>
    </nav>
    </>
  );
}

export default BottomBorderNavLinkComp;
