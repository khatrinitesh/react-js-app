import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';


const CurtainMenuComp = () => {
  return (
    <>
      <CurtainMenu/>
    </>
  );
}

export default CurtainMenuComp;

const CurtainMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    // Toggles the curtain menu open/close
    const toggleMenu = () => setIsOpen((prev) => !prev);
  
    return (
      <Container>
        <motion.div
          className="menu-toggle"
          onClick={toggleMenu}
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <ToggleButton>☰</ToggleButton>
        </motion.div>
  
        <motion.div
          className="curtain-menu"
          initial={{ width: 0 }}
          animate={{ width: isOpen ? '250px' : '0' }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <MenuContent>
            <MenuItem href="#">Home</MenuItem>
            <MenuItem href="#">About</MenuItem>
            <MenuItem href="#">Services</MenuItem>
            <MenuItem href="#">Contact</MenuItem>
          </MenuContent>
        </motion.div>
  
        {/* Content of the page */}
        <Content>
          <h1>Welcome to the Curtain Menu</h1>
          <p>Click the menu icon to open the curtain menu.</p>
        </Content>
      </Container>
    );
  };


  // Styled Components

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: relative;
height: 100vh;
background-color: #f5f5f5;
`;

const ToggleButton = styled.div`
font-size: 2rem;
cursor: pointer;
position: absolute;
top: 20px;
left: 20px;
z-index: 10;
`;

const MenuContent = styled.div`
padding-top: 60px;
display: flex;
flex-direction: column;
justify-content: space-around;
height: 100%;
`;

const MenuItem = styled.a`
color: white;
font-size: 1.5rem;
text-decoration: none;
padding: 10px 20px;
background-color: #333;
margin-bottom: 10px;
border-radius: 4px;
transition: background-color 0.3s ease;

&:hover {
  background-color: #3498db;
}
`;

const Content = styled.div`
position: absolute;
top: 100px;
padding: 20px;
text-align: center;

h1 {
  font-size: 2rem;
  color: #333;
}

p {
  font-size: 1rem;
  color: #777;
}
`;

const CurtainMenuStyles = `
.curtain-menu {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: #333;
  color: white;
  z-index: 5;
  overflow: hidden;
}
.menu-toggle {
  cursor: pointer;
}
`;

