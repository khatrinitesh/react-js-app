import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const EqualWidthNavLinksComp = () => {
  return (
    <>
      <NavbarComp/>
    </>
  );
}

export default EqualWidthNavLinksComp;

const NavbarComp = () => {
    return(
        <>
        <NavBar>
      <NavLinks>
        <motion.a
          className="text-white" href="#home"
          whileHover={{ scale: 1.1, y: -5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Home
        </motion.a>
        <motion.a
          className="text-white" href="#about"
          whileHover={{ scale: 1.1, y: -5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          About
        </motion.a>
        <motion.a
          className="text-white" href="#services"
          whileHover={{ scale: 1.1, y: -5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Services
        </motion.a>
        <motion.a
          className="text-white" href="#contact"
          whileHover={{ scale: 1.1, y: -5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Contact
        </motion.a>
      </NavLinks>
    </NavBar>
        </>
    )
}

// Styled Components
const NavBar = styled.nav`
  background-color: #333;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  max-width: 1200px;
  gap: 20px;
`;

const Link = styled(motion.a)`
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-transform: uppercase;
  position: relative;
  padding: 10px 0;
  flex: 1;  /* Ensures equal width */
  justify-content: center;
  text-align: center;

  &:hover {
    color: #1e90ff;
    cursor: pointer;
  }

  &:active {
    color: #4682b4;
  }
`;
 
