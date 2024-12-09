import React from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "./../constants/topNav";

const Header = () => {
  return (
    <>
      <header className="header bg-black">
        <div className="container mx-auto">
          <ul className="listNav flex ">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink to={link.to} className={({isActive}) => isActive ? 'text-white block bg-red-600' : 'text-white block'}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
