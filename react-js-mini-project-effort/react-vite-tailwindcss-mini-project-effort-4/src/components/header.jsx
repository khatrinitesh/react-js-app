import React from "react";
import { NavLink,useLocation  } from "react-router-dom";


const Header = () => {
  const location = useLocation();

   // Define the condition for rendering different logos based on pathname
   const renderLogo1 = location.pathname === '/';
   const renderLogo2 = location.pathname === '/about';
   const renderLogo3 = location.pathname === '/contact';
  return (
    <header className="bg-black">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="logoBlock">
          {renderLogo1 && (
              <img
                className="max-w-[150px]"
                src="https://png.pngtree.com/background/20230528/original/pngtree-red-and-black-star-logo-hd-wallpaper-picture-image_2777349.jpg"
                alt=""
              />
            )}
            {renderLogo2 && (
              <img
                className="max-w-[150px]"
                src="https://wallpapercave.com/wp/wp2582292.jpg"
                alt=""
              />
            )}
            {renderLogo3 && (
              <img
                className="max-w-[150px]"
                src="https://images8.alphacoders.com/107/1079347.png"
                alt=""
              />
            )}            
          </div>
          <ul className="flex">
            <li>
              <NavLink
                to="/"
                activeClassName="active"
                className="text-white p-[5px] block"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                activeClassName="active"
                className="text-white p-[5px] block"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                activeClassName="active"
                className="text-white p-[5px] block"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
