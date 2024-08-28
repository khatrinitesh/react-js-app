import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { headerdata } from "./../constants/constants";
import Hamburger from "hamburger-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Toggle body overflow based on menu state
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Hide vertical scrollbar
    } else {
      document.body.style.overflow = 'auto'; // Show vertical scrollbar
    }

    // Clean up the effect by resetting body overflow when component unmounts
    return () => {
      document.body.style.overflow = 'auto'; // Ensure scrollbar is visible when component unmounts
    };
  }, [isOpen]);

  // Function to handle closing the menu
  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-[#356169]">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Title */}
        <Link to="/" className="text-white text-xl">
          MySite
        </Link>
        {/* Hamburger Menu */}
        <div className="lg:hidden relative z-[999]">
          <Hamburger className="text-white z-[999] text-[20px]" toggled={isOpen} toggle={setIsOpen} />
        </div>
        {/* Navigation Links */}
        <nav className={`fixed z-[99] w-full lg:w-auto lg:h-auto bg-[rgba(0,0,0,0.9)] lg:bg-transparent lg:relative lg:flex ${isOpen ? 'block' : 'hidden'} lg:block`}>
          <ul className="flex bg-[#5faab1] lg:bg-transparent fixed lg:relative inset-0 lg:h-auto items-center justify-center lg:flex-row flex-col">
            {headerdata.map((val, index) => (
              <li key={index}>
                <NavLink
                  to={val.url}
                  onClick={handleCloseMenu} // Close menu on click
                  className={({ isActive }) =>
                    `text-white block px-5 py-2 rounded-[10px] transition-transform duration-500 ease-in-out ${isActive ? 'bg-red-700' : ''}`
                  }
                >
                  {val.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
