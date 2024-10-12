import React, { useState } from "react";

const CustomApp = () => {
  return (
    <>
      <Tabs/>
    </>
  );
}

export default CustomApp;

const Tabs = () => {
    // Set initial tab to Tab1
    const [activeTab, setActiveTab] = useState("Tab1");
  
    // Function to switch between tabs
    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
  
    return (
      <div>
        {/* Tab navigation */}
        <div className="tab-buttons">
          <button
            className={activeTab === "Tab1" ? "active" : ""}
            onClick={() => handleTabClick("Tab1")}
          >
            Tab 1
          </button>
          <button
            className={activeTab === "Tab2" ? "active" : ""}
            onClick={() => handleTabClick("Tab2")}
          >
            Tab 2
          </button>
        </div>
  
        {/* Content of Tabs */}
        <div className="tab-content">
          {activeTab === "Tab1" && (
            <div>
              <h2>Content for Tab 1</h2>
              <p>This is the content displayed in Tab 1.</p>
            </div>
          )}
          {activeTab === "Tab2" && (
            <div>
              <h2>Content for Tab 2</h2>
              <p>This is the content displayed in Tab 2.</p>
            </div>
          )}
        </div>
      </div>
    );
  };


