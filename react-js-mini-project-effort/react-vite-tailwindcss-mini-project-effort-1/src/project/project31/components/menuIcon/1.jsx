import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from './button';

export default function MenuIconApp() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };

  return (
    <>
      <MenuIcon onToggle={toggleMenu} />
      {/* Rest of your application */}
      {menuOpen && (
        <div className="menu-content">
          <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/">About</Link>
            </li>
            <li>
                <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>
      )}
      
    </>
  )
}