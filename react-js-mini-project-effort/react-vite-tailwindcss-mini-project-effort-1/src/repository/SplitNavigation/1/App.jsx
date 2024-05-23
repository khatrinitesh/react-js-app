import React from 'react';
import styled from 'styled-components';

const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #333;
  color: white;
  padding: 10px;
`;

const LeftNav = styled.div`
  display: flex;
`;

const RightNav = styled.div`
  display: flex;
`;

const NavLogo = styled.div`
  font-size: 1.5em;
  margin-right: 20px;
`;

const NavMenuItem = styled.div`
  margin-right: 20px;
  cursor: pointer;
`;

const SplitNavigationApp = () => {
  return (
    <>
      <NavigationContainer>
      <LeftNav>
        <NavLogo>Your Logo</NavLogo>
        <NavMenuItem>Home</NavMenuItem>
        <NavMenuItem>About</NavMenuItem>
      </LeftNav>
      <RightNav>
        <NavMenuItem>Contact</NavMenuItem>
        {/* Add more items for the right side as needed */}
      </RightNav>
    </NavigationContainer> 
    </>
  )
}

export default SplitNavigationApp
