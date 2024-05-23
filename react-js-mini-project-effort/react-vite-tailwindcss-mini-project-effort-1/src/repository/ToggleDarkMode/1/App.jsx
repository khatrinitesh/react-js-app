import React from 'react';
import './style.css';

const ToggleDarkModeApp = () => {
  return (
    <>
      <DarkModeToggle/>
    </>
  )
}

export default ToggleDarkModeApp

const DarkModeToggle = () => {
    const [isDarkMode, setDarkMode] = React.useState(false);
  
    const handleToggle = () => {
      setDarkMode(!isDarkMode);
    };
  
    return (
      <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
        <button onClick={handleToggle}>
          {isDarkMode ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </button>
        <p>This is your content.</p>
      </div>
    );
  };
