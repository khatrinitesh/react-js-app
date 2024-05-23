import React, { useState } from 'react';
import styled from 'styled-components';

const NavigationContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavLink = styled.a`
  padding: 10px 20px;
  text-decoration: none;
  color: #333;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #333;
    transition: all 0.3s ease;
  }

  &:hover::after {
    width: 100%;
    left: 0;
  }
`;

const BottomBorderNavLinksApp = () => {
    const [selectedItem, setSelectedItem] = useState('Home');

    const handleItemClick = (item) => {
      setSelectedItem(item);
      // Add logic to handle navigation item click
    };

  return (
    <>
      <NavigationContainer>
      <NavLink href="#home" onClick={() => handleItemClick('Home')} style={{ borderBottom: selectedItem === 'Home' ? '2px solid #333' : '' }}>
        Home
      </NavLink>
      <NavLink href="#about" onClick={() => handleItemClick('About')} style={{ borderBottom: selectedItem === 'About' ? '2px solid #333' : '' }}>
        About
      </NavLink>
      <NavLink href="#contact" onClick={() => handleItemClick('Contact')} style={{ borderBottom: selectedItem === 'Contact' ? '2px solid #333' : '' }}>
        Contact
      </NavLink>
      {/* Add more navigation items as needed */}
    </NavigationContainer>
    </>
  )
}

export default BottomBorderNavLinksApp
