import React,{useState} from 'react';
import { FaBars } from 'react-icons/fa'; // Example: Using Font Awesome icons
import './custom.css';

const CustomApp = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
      };

  return (
    <>
      {/* Menu Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        <FaBars />
      </div>
      {/* MENU */}
      {isMenuOpen && (
        <div className="menu">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </>
  )
}

export default CustomApp
