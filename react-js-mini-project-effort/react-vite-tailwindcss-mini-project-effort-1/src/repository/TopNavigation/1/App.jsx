import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.nav`
  background-color: #333;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLogo = styled.div`
  font-size: 1.5em;
`;

const NavMenu = styled.ul`
  list-style: none;
  display: flex;
`;

const NavMenuItem = styled.li`
  margin-right: 20px;
  cursor: pointer;
`;

const TopNavigationApp = () => {
  return (
    <>
       <NavContainer>
        <NavLogo>Your Logo</NavLogo>
        <NavMenu>
          <NavMenuItem>Home</NavMenuItem>
          <NavMenuItem>About</NavMenuItem>
          <NavMenuItem>Contact</NavMenuItem>
        </NavMenu>
      </NavContainer>
    </>
  )
}

export default TopNavigationApp
