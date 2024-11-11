import React from "react";
import { NavLink } from "react-router-dom";
import { navLinkData } from "../constants/navlink";

const Header = () => {
  return (
    <header className="header bg-black py-[20px]">
      <div className="container mx-auto">
        <ul className="flex gap-[20px]">
          {navLinkData.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  isActive ? "text-yellow-500 font-bold" : "text-white font-bold"
                }
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
