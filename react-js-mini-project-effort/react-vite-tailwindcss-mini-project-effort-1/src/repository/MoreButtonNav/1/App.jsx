import React, { useState } from 'react';

const MoreBtnNavApp = () => {
    const menuItems = ['Home', 'About', 'Services', 'Contact', 'Portfolio', 'Blog', 'Team'];
  return (
    <>
      <NavWithMoreButton items={menuItems} />
    </>
  )
}

export default MoreBtnNavApp

const NavWithMoreButton = ({ items }) => {
    const [showMoreItems, setShowMoreItems] = useState(false);
  
    const toggleMoreItems = () => {
      setShowMoreItems(!showMoreItems);
    };
  
    return (
      <nav>
        <ul className="nav-list">
          {items.slice(0, 3).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          {showMoreItems &&
            items.slice(3).map((item, index) => (
              <li key={index + 3}>{item}</li>
            ))}
          {items.length > 3 && (
            <li className="more-button" onClick={toggleMoreItems}>
              {showMoreItems ? 'Less' : 'More'}
            </li>
          )}
        </ul>
      </nav>
    );
  };
