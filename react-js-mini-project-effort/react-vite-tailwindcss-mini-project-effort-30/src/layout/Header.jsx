import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {

  const location = useLocation();
  const {pathname} = location;

  const logoSrc = pathname === '/' ? 'img/logo1.jpg' : 'img/logo2.png'
 
  return (
    <header className="header bg-[#232323] py-[10px]">
      <div className="container mx-auto text-white">
        <div className="logoBlock">
          <img src={logoSrc} alt="" className="img-fluid max-w-[5vw]" />
        </div>
      </div>
    </header>
  );
};

export default Header;
