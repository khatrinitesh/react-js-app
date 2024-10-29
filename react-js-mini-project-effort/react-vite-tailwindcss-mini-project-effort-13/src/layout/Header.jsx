import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header bg-black">
      <div className="container mx-auto">
        <div className="container mx-auto">
          <ul className="listBullet flex">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? 'bg-red-600 text-white p-[10px] block' : 'text-white p-[10px] block inactive'}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive ? 'bg-red-600 text-white p-[10px] block' : 'text-white p-[10px] block inactive'}>
              About
            </NavLink>
          </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
