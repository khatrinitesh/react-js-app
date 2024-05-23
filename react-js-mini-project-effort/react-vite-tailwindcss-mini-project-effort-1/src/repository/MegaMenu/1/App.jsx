import React, { useState, useEffect } from "react";

const MegaMenuApp = () => {
  const [isMegaMenuOpen, setMegaMenuOpen] = useState(false);
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    // Simulate fetching menu data from an API
    const fetchData = async () => {
      try {
        // Replace this with your actual API endpoint
        const response = await fetch("https://api.example.com/megamenu");
        const data = await response.json();
        setMenuData(data);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    // Fetch menu data when the mega menu is opened
    if (isMegaMenuOpen) {
      fetchData();
    }
  }, [isMegaMenuOpen]);

  const toggleMegaMenu = () => {
    setMegaMenuOpen(!isMegaMenuOpen);
  };
  return (
    <>
      <div className="mega-menu-container">
        <button onClick={toggleMegaMenu}>Toggle Mega Menu</button>
        {isMegaMenuOpen && (
          <div className="mega-menu-content">
            <ul>
              {menuData.map((menuItem) => (
                <li key={menuItem.id}>
                  <a href={menuItem.url}>{menuItem.label}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default MegaMenuApp;
