import React, { useState } from "react";
import { sections } from "../constants/constants";
import { Link } from "react-scroll";

const Sidebar = () => {
  const [btnToggle, setBtnToggle] = useState(false);
  const handleToggle = () => {
    setBtnToggle(!btnToggle);
  };

  const handleNavClick = () => {
    setBtnToggle(false)
  }

  return (
    <>
      <button
        onClick={handleToggle}
        className={`transition-all rounded-[3px] duration-300 btnHamburger bg-primary border-0 w-[30px] px-[3px] h-[30px] absolute top-[50%] translate-y-[-50%] outline-none right-[30px] active:bg-gray-700 z-[999] ${
          btnToggle ? "active" : ""
        }`}
      >
        <span className="line transition-all duration-300  w-full h-[2px] rounded-[3px] bg-white block relative top-[-7px]"></span>
        <span className="line transition-all duration-300  w-full h-[2px] rounded-[3px] bg-white block relative top-[0px]"></span>
        <span className="line transition-all duration-300  w-full h-[2px] rounded-[3px] bg-white block top-[7px] relative"></span>
      </button>
      <div
            className={`sidebar flex items-center justify-center transition-all duration-500 h-full fixed top-[-200%]  right-0 w-full bg-primary ${
              btnToggle ? "!top-0" : "w-0"
            }`}
          >
            <ul className="flex-col flex justify-center items-center ">
              {sections.map((section) => (
                <li key={section.id} className="group pl-6">
                  <Link
                    activeclass="active"
                    className={`font-raleway text-fs16 font-semibold uppercase cursor-pointer py-[5px] block ${section.color}`}
                    to={section.id}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={handleNavClick}
                  >
                    <span className="pt-0.5">{section.text}</span>
                    <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
    </>
  );
};

export default Sidebar;
