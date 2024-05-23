import React, { useState } from 'react';
import styled from 'styled-components';

const NavigationContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
`;

const NavLink = styled.a`
  padding: 10px;
  text-decoration: none;
  color: #333;
  margin-left: 20px;
  cursor: pointer;
`;

const RightAlignedMenuLinks = () => {
    const [selectedItem, setSelectedItem] = useState('Home');

  const handleItemClick = (item) => {
    setSelectedItem(item);
    // Add logic to handle navigation item click
  };
  return (
    <>
      <NavigationContainer>
      <NavLink onClick={() => handleItemClick('Home')} style={{ color: selectedItem === 'Home' ? '#333' : '' }}>
        Home
      </NavLink>
      <NavLink onClick={() => handleItemClick('About')} style={{ color: selectedItem === 'About' ? '#333' : '' }}>
        About
      </NavLink>
      <NavLink onClick={() => handleItemClick('Contact')} style={{ color: selectedItem === 'Contact' ? '#333' : '' }}>
        Contact
      </NavLink>
      {/* Add more navigation items as needed */}
    </NavigationContainer>
    </>
  )
}

export default RightAlignedMenuLinks
