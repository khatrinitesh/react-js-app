import React, { useState } from "react";
import "./custom.css";

const CollapsedSidebarApp = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div
        className={`app-container ${
          isSidebarOpen ? "sidebar-open" : "sidebar-closed"
        }`}
      >
        <div className="sidebar">
          <button onClick={toggleSidebar} className="toggle-button">
            {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
          </button>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            {/* Add more menu items as needed */}
          </ul>
        </div>
        <div className="content">{/* Main content goes here */}</div>
      </div>
    </>
  );
};

export default CollapsedSidebarApp;
