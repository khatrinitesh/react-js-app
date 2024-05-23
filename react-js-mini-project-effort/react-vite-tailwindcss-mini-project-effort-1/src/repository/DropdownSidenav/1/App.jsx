import React from "react";

const DropdownSideNavApp = () => {
  return (
    <>
      <SideNav />
    </>
  );
};

export default DropdownSideNavApp;

const SideNav = () => {
  return (
    <div className="sidenav">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <div className="dropdown">
        <button className="dropbtn">Dropdown</button>
        <div className="dropdown-content">
          <a href="#option1">Option 1</a>
          <a href="#option2">Option 2</a>
          <a href="#option3">Option 3</a>
        </div>
      </div>
      <a href="#contact">Contact</a>
    </div>
  );
};
