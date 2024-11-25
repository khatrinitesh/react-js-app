import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const MenuIconHamburgerComp = () => {
  return (
    <>
      <HamburgerMenu/>
    </>
  );
}

export default MenuIconHamburgerComp;

// Styled Components for the layout
const Navbar = styled.nav`
  background-color: #333;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    display: none; /* Hide menu items on mobile */
  }
`;

const MenuItem = styled.a`
  color: white;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    color: #6200ea;
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Line = styled(motion.div)`
  width: 25px;
  height: 3px;
  background-color: white;
  border-radius: 5px;
`;

const SideMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100%;
  background-color: #333;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  z-index: 10;
  transform: translateX(100%);
  transition: transform 0.3s ease;
`;

const SideMenuItem = styled.a`
  color: white;
  text-decoration: none;
  font-size: 20px;
  &:hover {
    color: #6200ea;
  }
`;


const HamburgerMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    // Toggle the side menu and the hamburger icon animation
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
    return (
      <>
        <Navbar>
          <div style={{ color: 'white', fontSize: '24px' }}>My Logo</div>
          <HamburgerIcon onClick={toggleMenu}>
            <Line
              initial={{ rotate: 0, y: 0 }}
              animate={{
                rotate: menuOpen ? 45 : 0, // Rotate to 45 degrees when open
                y: menuOpen ? 8 : 0,        // Move the middle line when open
              }}
              transition={{ duration: 0.3 }}
            />
            <Line
              initial={{ opacity: 1 }}
              animate={{
                opacity: menuOpen ? 0 : 1, // Fade out the middle line when open
              }}
              transition={{ duration: 0.3 }}
            />
            <Line
              initial={{ rotate: 0, y: 0 }}
              animate={{
                rotate: menuOpen ? -45 : 0, // Rotate the bottom line to -45 degrees
                y: menuOpen ? -8 : 0,       // Move the bottom line when open
              }}
              transition={{ duration: 0.3 }}
            />
          </HamburgerIcon>
          <Menu>
            <MenuItem href="#">Home</MenuItem>
            <MenuItem href="#">About</MenuItem>
            <MenuItem href="#">Services</MenuItem>
            <MenuItem href="#">Contact</MenuItem>
          </Menu>
        </Navbar>
  
        {/* Side menu animation */}
        <SideMenu
          animate={{ x: menuOpen ? 0 : '100%' }}
          transition={{ duration: 0.3 }}
        >
          <SideMenuItem href="#">Home</SideMenuItem>
          <SideMenuItem href="#">About</SideMenuItem>
          <SideMenuItem href="#">Services</SideMenuItem>
          <SideMenuItem href="#">Contact</SideMenuItem>
        </SideMenu>
      </>
    );
  };
