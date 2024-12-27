import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header py-[20px]'>
      <div className="container mx-auto">
        <ul>
            <li>
                <NavLink to="/" className="">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about" className="">About</NavLink>
            </li>
            <li>
                <NavLink to="/service" className="">Service</NavLink>
            </li>
            <li>
                <NavLink to="/contact" className="">Contact</NavLink>
            </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
