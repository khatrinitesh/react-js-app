import React,{useState} from 'react';
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

const ToggleButton = styled.button`
  position: fixed;
  left: ${({ isOpen }) => (isOpen ? '250px' : '0')};
  top: 20px;
  background-color: #333;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
`;


const SideNavigationApp = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
       <SideNavContainer isOpen={isOpen}>
        <h2>Side Navigation</h2>
        <p>Your side navigation content goes here.</p>
      </SideNavContainer>
      <ToggleButton isOpen={isOpen} onClick={toggleSidebar}>
        {isOpen ? 'Close' : 'Open'} Sidebar
      </ToggleButton>
    </>
  )
}

export default SideNavigationApp
