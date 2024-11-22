import React from "react";
import { NavLink } from "react-router-dom";
import { navlink } from "./../constants/index";

const Header = () => {
  return (
    <header className="header bg-black">
      <div className="container mx-auto">
        <ul className="flex">
          {/* Dynamically render NavLink components */}
          {navlink.map((item) => (
            <li key={item.text}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  isActive
                    ? "bg-red-600 text-white p-[10px] block"
                    : "text-white p-[10px] block"
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
