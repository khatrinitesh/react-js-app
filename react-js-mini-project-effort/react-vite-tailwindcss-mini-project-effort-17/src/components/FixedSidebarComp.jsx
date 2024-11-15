import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const FixedSidebarComp = () => {
  return (
    <>
      <FixedSidebar/>
    </>
  );
}

export default FixedSidebarComp;

// Styled Components for the sidebar and content
const SidebarWrapper = styled.div`
  width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: #333;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

const SidebarItem = styled.a`
  color: white;
  text-decoration: none;
  font-size: 18px;
  margin: 15px 0;
  padding: 10px;
  width: 100%;
  text-align: left;
  border-radius: 5px;
  &:hover {
    background-color: #444;
  }
`;

const ContentWrapper = styled.div`
  margin-left: 250px; /* Offset content to make space for the sidebar */
  padding: 20px;
  font-size: 18px;
`;

const FixedSidebar = () => {
    return (
      <>
        {/* Fixed Sidebar with Framer Motion animation */}
        <motion.div
          initial={{ x: -250 }} // Start off-screen (to the left)
          animate={{ x: 0 }}    // Slide in from the left
          exit={{ x: -250 }}     // Slide out to the left when removed
          transition={{ duration: 0.5 }} // Duration of the transition
        >
          <SidebarWrapper>
            <h2>Sidebar</h2>
            <SidebarItem href="#home">Home</SidebarItem>
            <SidebarItem href="#about">About</SidebarItem>
            <SidebarItem href="#services">Services</SidebarItem>
            <SidebarItem href="#contact">Contact</SidebarItem>
          </SidebarWrapper>
        </motion.div>
  
        {/* Main Content */}
        <ContentWrapper>
          <h1>Scroll to see the fixed sidebar effect</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
            Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
          </p>
          <p>
            Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis
            turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet.
          </p>
          <p>
            Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis
            turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet.
          </p>
        </ContentWrapper>
      </>
    );
  };


