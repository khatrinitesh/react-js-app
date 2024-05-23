import React from "react";
import { socialMediaIcons } from "../constants/constants";
import { Link } from "react-router-dom";

const Footer = () => {
  const newDate = new Date();
  const fullYear = newDate.getFullYear();  
  return (
    <footer className="bg-primary">
      <div className="container flex flex-col justify-between py-6 sm:flex-row">
        <p className="text-center font-body text-white md:text-left">
          © Copyright {fullYear}. All right reserved, ATOM.
        </p>
        <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
              {socialMediaIcons.map((item, index) => (
                <Link
                  key={index}
                  target="_blank"
                  to={item.link}
                  className={`font-opensans text-white ${
                    index > 0 ? "pl-4" : "text-[yellow]"
                  }`}
                >
                  <item.icon />
                </Link>
              ))}
            </div>
      </div>
    </footer>
  );
};

export default Footer;
