import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
       // Define a state variable to track the menu's visibility
       const [isMenuOpen, setIsMenuOpen] = useState(false);

       // Function to toggle the menu's visibility
        const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
        };
  return (
    <header>
            {/* Hamburger icon button */}
            <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        <ul className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
            <li>
                <NavLink to="/" activeClassName="active">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about" activeClassName="active">About</NavLink>
            </li>
            <li>
                <NavLink to="/service" activeClassName="active">Service</NavLink>
            </li>
            <li>
                <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            </li>
        </ul>
    </header>
  )
}
