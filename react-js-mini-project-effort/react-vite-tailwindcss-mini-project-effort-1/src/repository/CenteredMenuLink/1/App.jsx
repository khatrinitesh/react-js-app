import React, { useState } from 'react';
import styled from 'styled-components';

const NavigationContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: #333;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  padding: 10px;
  margin: 0 20px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ddd;
  }
`;

const CenteredMenuLink = () => {
    const [selectedItem, setSelectedItem] = useState('Home');

    const handleItemClick = (item) => {
      setSelectedItem(item);
      // Add logic to handle navigation item click
    };

  return (
    <>
      <NavigationContainer>
      <NavLink onClick={() => handleItemClick('Home')} style={{ color: selectedItem === 'Home' ? '#ddd' : '' }}>
        Home
      </NavLink>
      <NavLink onClick={() => handleItemClick('About')} style={{ color: selectedItem === 'About' ? '#ddd' : '' }}>
        About
      </NavLink>
      <NavLink onClick={() => handleItemClick('Contact')} style={{ color: selectedItem === 'Contact' ? '#ddd' : '' }}>
        Contact
      </NavLink>
      {/* Add more navigation items as needed */}
    </NavigationContainer>
    </>
  )
}

export default CenteredMenuLink
