import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`;

const OffCanvasContainer = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-250px')};
  height: 100%;
  width: 250px;
  background-color: #333;
  color: white;
  padding: 20px;
  transition: left 0.3s ease;
`;

const ToggleButton = styled.button`
  position: fixed;
  top: 20px;
  left: ${({ isOpen }) => (isOpen ? '250px' : '20px')};
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  transition: left 0.3s ease;
`;


const OffCanvasMenuApp = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <>
       <Container>
            <MainContent>
                <h1>Your App Content</h1>
                <p>This is the main content area.</p>
            </MainContent>

            <OffCanvasContainer isOpen={isOpen}>
                <h2>Off-Canvas Menu</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </OffCanvasContainer>

            <ToggleButton isOpen={isOpen} onClick={toggleMenu}>
                ☰
            </ToggleButton>
        </Container>
    </>
  )
}

export default OffCanvasMenuApp
