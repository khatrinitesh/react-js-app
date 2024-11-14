import React, { useState } from "react";
import { motion } from "framer-motion";

const CollapsedSidebarComp = () => {
  return (
    <>
      <SidebarComp/>
    </>
  );
}

export default CollapsedSidebarComp;

const SidebarComp = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
  
    // Toggle sidebar state
    const toggleSidebar = () => {
      setIsCollapsed(prevState => !prevState);
    };
  
    return (
      <div className="app-container">
        {/* Sidebar */}
        <motion.div
          className="sidebar"
          initial={{ width: 250 }}
          animate={{ width: isCollapsed ? 60 : 250 }}  // Toggling the sidebar width
          transition={{ duration: 0.3, ease: "easeInOut" }}  // Smooth transition
        >
          {/* Sidebar content */}
          <div className="sidebar-content">
            {!isCollapsed && <h2>My Sidebar</h2>}
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
        </motion.div>
  
        {/* Toggle button */}
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isCollapsed ? "Expand" : "Collapse"}
        </button>
  
        {/* Main content */}
        <div className="main-content">
          <h1>Welcome to My Website</h1>
          <p>This is the main content area. The sidebar is here to help with navigation.</p>
        </div>
      </div>
    );
  };
  




