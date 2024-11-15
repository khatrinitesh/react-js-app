import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const FatNavComp = () => {
  return (
    <>
      <FatNav/>
    </>
  );
}

export default FatNavComp;

const FatNav = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
      setIsOpen(!isOpen);
    };
  
    return(
        <>
<Wrapper>
      <Nav>
        {/* Toggle Button */}
        <NavToggle onClick={toggleNav}>
          {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </NavToggle>

        {/* Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <NavMenu
              initial={{ width: 0 }}
              animate={{ width: '250px' }}
              exit={{ width: 0 }}
              transition={{ duration: 0.5 }}
            >
              <MenuItems>
                <MenuItem>
                  <NavLink href="#home">Home</NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink href="#about">About</NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink href="#services">Services</NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink href="#contact">Contact</NavLink>
                </MenuItem>
              </MenuItems>
            </NavMenu>
          )}
        </AnimatePresence>
      </Nav>
      <MainContent>
        <h1>FatNav Example</h1>
        <p>
          This is a simple example of a fat navigation bar with animations using
          ReactJS, Styled Components, and Framer Motion.
        </p>
      </MainContent>
    </Wrapper>
        </>
    )
}

// Styled Components for the FatNav layout and design
const Wrapper = styled.div`
  display: flex;
`;

const Nav = styled.div`
  position: relative;
  height: 100vh;
  width: 60px;
  background-color: #333;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: width 0.3s ease-in-out;
  padding-top: 20px;
`;

const NavToggle = styled.div`
  position: absolute;
  top: 20px;
  left: 15px;
  cursor: pointer;
  z-index: 1000;
`;

const NavMenu = styled(motion.div)`
  background-color: #444;
  height: 100%;
  padding-top: 50px;
  position: absolute;
  top: 0;
  left: 0;
  width: 250px; // Default width when opened
  display: flex;
  flex-direction: column;
`;

const MenuItems = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const MenuItem = styled.li`
  padding: 15px;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

const NavLink = styled.a`
  color: white;
  font-size: 18px;
  text-decoration: none;
  width: 100%;
`;

const MainContent = styled.div`
  margin-left: 60px;
  padding: 20px;
`;


