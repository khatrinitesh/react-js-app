import React, { useState } from "react";
import { HEADER_LINKS } from "../constants/constants";
import { Link, useLocation } from "react-router-dom";
import Logo1 from "../../public/images/logo1.png";
import Logo2 from "../../public/images/logo2.jpg";
import Hamburger from "hamburger-react";

const Header = () => {
  const location = useLocation(); // Get the current path
  const [isOpen, setIsOpen] = useState(false);

  const imageUrl = location.pathname === "/" ? Logo1 : Logo2;
  return (
    <header className="header bg-black">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={imageUrl} alt="" className="max-w-20 aspect-square" />
        </Link>
        <div className="md:hidden z-[99]">
          <Hamburger toggled={isOpen} toggle={setIsOpen} color="#fff" />
        </div>
         {/* Fullscreen Overlay Menu */}
         <nav
          className={`fixed md:relative inset-0 bg-black bg-opacity-90 z-50 md:flex transition-transform transform ${
            isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
          }`}
        >
          <div className="flex flex-col h-full justify-center items-center">
            <ul className="flex flex-col md:flex-row text-center  text-white text-xl">
              {HEADER_LINKS.map(({ url, label }) => (
                <li key={url}>
                  <Link
                    className={`block p-4 ${
                      location.pathname === url ? "bg-red-500" : ""
                    }`}
                    to={url}
                    onClick={() => setIsOpen(false)} // Close menu on click for mobile
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
