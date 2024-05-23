import React from "react";

const SubNavigationMenuApp = () => {
  return (
    <>
      <SubNav />
    </>
  );
};

export default SubNavigationMenuApp;

const SubNav = ({ currentSelection }) => {
  const subNavItems = {
    home: ["Subitem 1", "Subitem 2", "Subitem 3"],
    about: ["Subitem A", "Subitem B", "Subitem C"],
  };

  return (
    <div>
      <h2>Subnavigation Menu</h2>
      <ul>
        {subNavItems[currentSelection] &&
          subNavItems[currentSelection].map((item) => (
            <li key={item}>{item}</li>
          ))}
      </ul>
    </div>
  );
};
