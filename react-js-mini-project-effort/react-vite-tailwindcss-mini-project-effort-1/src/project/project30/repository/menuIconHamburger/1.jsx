import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MenuHamburgerApp() {
  

  return (
    <div>
        <div className="hamburger-menu">
            {/* Hamburger icon button */}
            <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            {/* Menu items */}
            <ul className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
                <li>
                    <Link to="/">Home</Link></li>
                <li>
                    <Link to="/about">About</Link></li>
                <li>
                    <Link to="/service">Services</Link></li>
                <li>
                    <Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    </div>
  )
}
