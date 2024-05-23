import React, { useState } from 'react';

const CollapseApp = () => {
  return (
    <>
      <CollapseComponent/>
    </>
  )
}

export default CollapseApp

const CollapseComponent = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);
  
    const toggleCollapse = () => {
      setIsCollapsed(!isCollapsed);
    };
  
    return (
      <div>
        <button onClick={toggleCollapse}>Toggle Collapse</button>
        {!isCollapsed && (
          <div>
            <p>This content is visible when not collapsed.</p>
            <p>You can add more content here.</p>
          </div>
        )}
      </div>
    );
  };
