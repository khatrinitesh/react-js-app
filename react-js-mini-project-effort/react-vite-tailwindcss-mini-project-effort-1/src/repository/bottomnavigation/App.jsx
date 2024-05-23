import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: white;
  display: flex;
  justify-content: space-around;
  padding: 10px;
`;

const NavItem = styled.div`
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }
`;


const BottomNavigation = () => {
    const [selectedItem, setSelectedItem] = useState('Home');

    const handleItemClick = (item) => {
      setSelectedItem(item);
      // Add logic to handle navigation item click
    };
  return (
    <>
      <NavigationContainer>
      <NavItem onClick={() => handleItemClick('Home')} style={{ color: selectedItem === 'Home' ? '#fff' : '' }}>
        <Link to="https://www.google.com" target="_blank" style={{color:'white',textDecoration:'none'}}>
        Home
        </Link>
      </NavItem>
      <NavItem onClick={() => handleItemClick('About')} style={{ color: selectedItem === 'About' ? '#fff' : '' }}>
        About
      </NavItem>
      <NavItem onClick={() => handleItemClick('Contact')} style={{ color: selectedItem === 'Contact' ? '#fff' : '' }}>
        Contact
      </NavItem>
      {/* Add more navigation items as needed */}
    </NavigationContainer>
    </>
  )
}

export default BottomNavigation
