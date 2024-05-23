import React from "react";

const DropdownTopNav = () => {
  return (
    <>
      <TopNav />
    </>
  );
};

export default DropdownTopNav;

const TopNav = () => {
  return (
    <nav className="top-nav">
      <ul className="nav-list">
        <li>Home</li>
        <li>About</li>
        <li className="dropdown">
          <a href="#">Dropdown</a>
          <div className="dropdown-content">
            <a href="#">Option 1</a>
            <a href="#">Option 2</a>
            <a href="#">Option 3</a>
          </div>
        </li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
