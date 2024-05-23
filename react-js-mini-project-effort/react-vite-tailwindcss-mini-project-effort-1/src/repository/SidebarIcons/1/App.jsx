import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SidebarContainer = styled.div`
  width: 80px;
  height: 100vh;
  background-color: #333;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const SidebarItem = styled.div`
  margin-bottom: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const SidebarIconsApp = () => {
  return (
    <>
        <SidebarContainer>
            <SidebarItem>
                <FontAwesomeIcon icon={faHome} size="2x" />
            </SidebarItem>
            <SidebarItem>
                <FontAwesomeIcon icon={faUser} size="2x" />
            </SidebarItem>
            <SidebarItem>
                <FontAwesomeIcon icon={faCog} size="2x" />
            </SidebarItem>
            <SidebarItem>
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </SidebarItem>
        </SidebarContainer>
    </>
  )
}

export default SidebarIconsApp
