import React from 'react';
import { HeaderComp,ListBullet  } from '../styleComponents/custom';
import StyledNavLink from '../styleComponents/StyledNavLink';


const Header = () => {
  return (
    <HeaderComp>
      <ListBullet>
        <li>
            <StyledNavLink to="/" activeClassName="active">Home</StyledNavLink>
        </li>
        <li>
            <StyledNavLink to="/about" activeClassName="active">About</StyledNavLink>
        </li>
        <li>
            <StyledNavLink to="/contact" activeClassName="active">Contact</StyledNavLink>
        </li>
      </ListBullet>
    </HeaderComp>
  )
}

export default Header
