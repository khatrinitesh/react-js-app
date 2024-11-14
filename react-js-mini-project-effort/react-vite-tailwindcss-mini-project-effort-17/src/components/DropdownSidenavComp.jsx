import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const DropdownSidenavComp = () => {
  return (
    <>
      <SideNavWithDropdown/>
    </>
  );
}

export default DropdownSidenavComp;

const SideNavWithDropdown = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    // Toggle dropdown open/close
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  
    return (
      <Sidebar>
        <SidebarHeader>My Sidebar</SidebarHeader>
  
        {/* Static Menu Links */}
        <SidebarLink>Home</SidebarLink>
        <SidebarLink>About</SidebarLink>
        <SidebarLink>Services</SidebarLink>
  
        {/* Dropdown Menu */}
        <SidebarLink onClick={toggleDropdown}>
          More Options
        </SidebarLink>
  
        <DropdownContainer
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isDropdownOpen ? 1 : 0,
            height: isDropdownOpen ? 'auto' : 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
        >
          {/* Dropdown Items */}
          {isDropdownOpen && (
            <>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem>Option 3</DropdownItem>
            </>
          )}
        </DropdownContainer>
      </Sidebar>
    );
  };
  

// Sidebar container
const Sidebar = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #2f3b52;
  color: white;
  padding: 20px;
  position: fixed;
  left: 0;
  top: 0;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 1000;
`;

// Sidebar Header
const SidebarHeader = styled.h2`
  color: white;
  font-size: 24px;
  margin-bottom: 40px;
`;

// Sidebar Link
const SidebarLink = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  font-size: 18px;
  border-radius: 5px;
  &:hover {
    background-color: #1c2b40;
  }
  transition: background-color 0.3s ease;
`;

// Dropdown container (hidden by default)
const DropdownContainer = styled(motion.div)`
  padding-left: 20px;
`;

// Dropdown Item
const DropdownItem = styled.div`
  padding: 10px 0;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #1c2b40;
  }
`;
