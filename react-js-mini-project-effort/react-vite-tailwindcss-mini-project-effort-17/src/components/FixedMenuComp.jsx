import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const FixedMenuComp = () => {
  return (
    <>
      <FixedMenu/>
    </>
  );
}

export default FixedMenuComp;

const FixedMenu = () => {
    return (
      <>
        {/* Fixed Menu with Framer Motion animation */}
        <motion.div
          initial={{ opacity: 0, y: -100 }} // Start above the screen, invisible
          animate={{ opacity: 1, y: 0 }}     // Fade in and slide down
          exit={{ opacity: 0, y: -100 }}     // Fade out and slide up when removed
          transition={{ duration: 0.5 }}     // Duration of the transition
        >
          <MenuWrapper>
            <div>Logo</div>
            <MenuItems>
              <MenuItem href="#home">Home</MenuItem>
              <MenuItem href="#about">About</MenuItem>
              <MenuItem href="#services">Services</MenuItem>
              <MenuItem href="#contact">Contact</MenuItem>
            </MenuItems>
          </MenuWrapper>
        </motion.div>
  
        {/* Main Content */}
        <ContentWrapper>
          <h1>Scroll to see the fixed menu effect</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
            Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
          </p>
          <p>
            Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis
            turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet.
          </p>
        </ContentWrapper>
      </>
    );
  };
  

// Styled Components for menu and content
const MenuWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #333;
  color: white;
  padding: 15px 20px;
  text-align: center;
  font-size: 18px;
  z-index: 10;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuItems = styled.div`
  display: flex;
  gap: 20px;
`;

const MenuItem = styled.a`
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  font-size: 16px;
  &:hover {
    background-color: #444;
    border-radius: 5px;
  }
`;

const ContentWrapper = styled.div`
  min-height: 100vh;
  padding-top: 70px; /* Add padding to ensure content doesn't hide behind the fixed menu */
  padding-bottom: 80px; /* Optional: Add padding at the bottom if there's more content */
  font-size: 18px;
`;

