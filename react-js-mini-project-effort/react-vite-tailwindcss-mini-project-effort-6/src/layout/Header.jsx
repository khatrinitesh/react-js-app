import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = ({ listNav }) => {
  return (
    <header className="bg-black">
      <div className="container mx-auto">
        <ul className="flex">
          {listNav.map((val, index) => (
            <li key={index}>
              <NavLink activeclassname="active"
                to={val.url}
                className="text-white p-2 block"
              >
                {val.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
