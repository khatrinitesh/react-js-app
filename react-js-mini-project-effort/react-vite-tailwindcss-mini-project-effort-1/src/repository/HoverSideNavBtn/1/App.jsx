import React, { useState } from 'react';
import styled from 'styled-components';

const SideNavContainer = styled.div`
  position: fixed;
  left: ${({ isOpen }) => (isOpen ? '0' : '-250px')};
  top: 0;
  height: 100%;
  width: 250px;
  background-color: #333;
  color: white;
  padding: 20px;
  transition: left 0.3s ease;
`;

const NavButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const HoverSideNavBtnApp = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideNavContainer isOpen={isOpen}>
      <NavButton>Home</NavButton>
      <NavButton>About</NavButton>
      <NavButton>Contact</NavButton>
      <NavButton onClick={toggleNavigation}>Close</NavButton>
    </SideNavContainer>
    </>
  )
}

export default HoverSideNavBtnApp
