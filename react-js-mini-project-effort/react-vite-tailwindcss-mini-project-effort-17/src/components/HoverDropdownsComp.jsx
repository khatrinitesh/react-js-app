import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const HoverDropdownsComp = () => {
  return (
    <>
      <HoverDropdown/>
    </>
  );
}

export default HoverDropdownsComp;

// Styled Component for the Navbar
const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  background-color: #333;
  padding: 15px;
`;

// Styled Component for individual menu items
const MenuItem = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 600;
  padding: 10px 20px;
  cursor: pointer;
  position: relative; /* This is important for the positioning of the dropdown */
  &:hover {
    background-color: #444;
  }
`;

// Styled Component for the dropdown menu
const Dropdown = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #444;
  padding: 10px 0;
  width: 200px;
  border-radius: 5px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
`;

// Dropdown Item
const DropdownItem = styled.div`
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;

const HoverDropdown = () => {
    return (
      <Navbar>
        <MenuItem>
          Menu
          {/* Dropdown Menu */}
          <Dropdown
            initial={{ opacity: 0, visibility: 'hidden' }}
            animate={{ opacity: 1, visibility: 'visible' }}
            exit={{ opacity: 0, visibility: 'hidden' }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <DropdownItem>Option 1</DropdownItem>
            <DropdownItem>Option 2</DropdownItem>
            <DropdownItem>Option 3</DropdownItem>
          </Dropdown>
        </MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Contact</MenuItem>
      </Navbar>
    );
  };
