import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { sections } from "../constants/constants";
import Sidebar from "./Sidebar";

const TopNavigation = () => {
  const [isSticky, setIsSticky] = useState(false);
 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  return (
    <>
      <nav
        className={`w-full transition-all duration-500 z-50 top-0 py-3  absolute ${
          isSticky ? "bg-[rgba(0,0,0.8)] sticky top-0 shadow" : ""
        }`}
      >
        <div className="container mx-auto flex justify-between">
            <Link to="section1" className="text-white font-ralewayM uppercase">
              LOGO
            </Link>
            <div className="lg:hidden block">
             <Sidebar/>
            </div>
            <ul className="hidden lg:flex items-center">
              {sections.map((section) => (
                <li key={section.id} className="group pl-6">
                  <Link
                    activeclass="active"
                    className={`font-raleway text-fs16 font-semibold uppercase cursor-pointer ${section.color}`}
                    to={section.id}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <span className="pt-0.5">{section.text}</span>
                    <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                  </Link>
                </li>
              ))}
            </ul>
        </div>
      </nav>
    </>
  );
};

export default TopNavigation;
