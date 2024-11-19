import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const HoverSideNavBtnComp = () => {
  return (
    <>
      <HoverSidebar/>
    </>
  );
}

export default HoverSideNavBtnComp;

// Sidebar Container
const Sidebar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 250px;
  height: 100%;
  background-color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  z-index: 1000;
`;

// Styled Component for the Button
const SidebarButton = styled(motion.div)`
  width: 200px;
  height: 50px;
  background-color: #444;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  margin: 15px 0;
  cursor: pointer;
  text-transform: uppercase;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  
  &:hover {
    background-color: #555;
    transform: translateX(10px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;


// Sidebar Component with Hover Animation
const HoverSidebar = () => {
    return (
      <Sidebar>
        <SidebarButton
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1, rotate: 5, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Home
        </SidebarButton>
        <SidebarButton
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1, rotate: -5, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          About
        </SidebarButton>
        <SidebarButton
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1, rotate: 5, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Services
        </SidebarButton>
        <SidebarButton
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1, rotate: -5, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Contact
        </SidebarButton>
      </Sidebar>
    );
  };