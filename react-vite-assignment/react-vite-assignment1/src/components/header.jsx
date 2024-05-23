import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <ul className="flex listBullet">
        <li>
            <NavLink activeClassName="active" to="/">Home</NavLink>
        </li>
        <li>
            <NavLink activeClassName="active" to="/about">About</NavLink>
        </li>
        <li>
            <NavLink activeClassName="active" to="/servicelist">Service</NavLink>
        </li>
        <li>
            <NavLink activeClassName="active" to="/contact">Contact</NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header
