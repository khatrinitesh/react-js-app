import React from 'react';
import styled from 'styled-components';


const FixedSideBarApp = () => {
  return (
    <>
     <Sidebar />
      <MainContent />
    </>
  )
}

export default FixedSideBarApp


const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 200px;
  background-color: #333;
  color: white;
  padding: 20px;
`;


const MainContentContainer = styled.div`
  margin-left: 220px; /* Adjust the margin to match the width of the sidebar */
  padding: 20px;
`;

const Sidebar = () => {
    return (
      <SidebarContainer>
        <h2>Sidebar Content</h2>
        <p>Your sidebar content goes here.</p>
      </SidebarContainer>
    );
  };

const MainContent = () => {
    return (
      <MainContentContainer>
        <h1>Main Content</h1>
        <p>Your main content goes here.</p>
      </MainContentContainer>
    );
  };
