import React, { useState } from 'react';
import styled from 'styled-components';

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: white;
  padding: 10px;
  z-index: 1000;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #555;
  }
`;

const FixedMenuApp = () => {
    const [selectedItem, setSelectedItem] = useState('Home');

    const handleItemClick = (item) => {
        setSelectedItem(item);
        // Add logic to handle navigation item click
    };
  return (
    <>
      <Header>
      <Navigation>
        <NavLink to="/" onClick={() => handleItemClick('Home')} style={{ backgroundColor: selectedItem === 'Home' ? '#555' : '' }}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={() => handleItemClick('About')} style={{ backgroundColor: selectedItem === 'About' ? '#555' : '' }}>
          About
        </NavLink>
        <NavLink to="/contact" onClick={() => handleItemClick('Contact')} style={{ backgroundColor: selectedItem === 'Contact' ? '#555' : '' }}>
          Contact
        </NavLink>
        {/* Add more navigation items as needed */}
      </Navigation>
    </Header>
    </>
  )
}

export default FixedMenuApp
