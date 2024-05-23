import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #333;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const NavItem = styled.div`
  margin-right: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:last-child {
    margin-right: 0;
  }

  svg {
    margin-right: 5px;
  }
`;



const NavbarIconsApp = () => {
  return (
    <>
      <NavbarContainer>
      <NavItem>
        <FontAwesomeIcon icon={faHome} />
        Home
      </NavItem>
      <NavItem>
        <FontAwesomeIcon icon={faUser} />
        Profile
      </NavItem>
      <NavItem>
        <FontAwesomeIcon icon={faCog} />
        Settings
      </NavItem>
      <NavItem>
        <FontAwesomeIcon icon={faEnvelope} />
        Contact
      </NavItem>
    </NavbarContainer>
    </>
  )
}

export default NavbarIconsApp
