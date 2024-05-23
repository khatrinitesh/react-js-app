    import React, { useState } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  transition: opacity 0.3s ease;
`;

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 80%;
  height: 100%;
  background: #333;
  color: white;
  padding: 20px;
  transition: left 0.3s ease;
`;

const ToggleButton = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;


const FullScreenNavigation = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavigation = () => {
      setIsOpen(!isOpen);
    };
  return (
    <>
      <ToggleButton onClick={toggleNavigation}>☰</ToggleButton>
      <Overlay isOpen={isOpen} onClick={toggleNavigation} />
      <MenuContainer isOpen={isOpen}>
        <h2>Fullscreen Navigation</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </MenuContainer>
    </>
  )
}

export default FullScreenNavigation
