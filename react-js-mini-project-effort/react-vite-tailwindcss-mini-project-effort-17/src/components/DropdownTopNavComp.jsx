import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const DropdownTopNavComp = () => {
  return (
    <>
      <TopNavWithDropdown/>
    </>
  );
}

export default DropdownTopNavComp;

// Styled Components for Top Navigation Bar
const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2f3b52;
  padding: 10px 20px;
  color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const NavItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  &:hover {
    background-color: #1c2b40;
    border-radius: 5px;
  }
`;

const DropdownMenu = styled(motion.div)`
  position: absolute;
  top: 50px; // Adjust based on your navbar height
  right: 0;
  width: 200px;
  background-color: #ffffff;
  color: #333;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  z-index: 1000;
`;

const DropdownItem = styled.div`
  padding: 12px 20px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #f1f1f1;
  }
`;


// Main Component with TopNav and Dropdown
const TopNavWithDropdown = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  
    return (
      <NavBar>
        <div>Logo</div>
  
        {/* NavItem triggers the dropdown */}
        <NavItem onClick={toggleDropdown}>
          Menu
        </NavItem>
  
        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <DropdownMenu
            initial={{ opacity: 0, y: -20 }} // Starts offscreen above
            animate={{ opacity: 1, y: 0 }}     // Slides in
            exit={{ opacity: 0, y: -20 }}      // Slides out
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
            }}
          >
            <DropdownItem>Profile</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem>Logout</DropdownItem>
          </DropdownMenu>
        )}
      </NavBar>
    );
  };
  


