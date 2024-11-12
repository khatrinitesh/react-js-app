import React from 'react';

const CenterMenuLinkComp = () => {
  return (
    <>
      <CenterMenu/>
    </>
  );
}

export default CenterMenuLinkComp;

const CenterMenu = () => {
    return(
        <>
        <div className="app-container">
      <nav className="navbar">
        <ul className="menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
        </>
    )
}
