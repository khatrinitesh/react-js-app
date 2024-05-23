import React, { createContext,useContext } from 'react';

export const ThemeContext = createContext('light');

export default function ContextApi() {
  return (
    <>
       <ThemeContext.Provider value="light">
        <ThemeDisplay />
        <ThemeSwitcher />
      </ThemeContext.Provider>
    </>
  )
}

const ThemeSwitcher = () => {
    const toggleTheme = (theme) => {
      // Update the value of the context
      // This can be done via state management or any other method
      console.log(`Switching to ${theme} theme`);
    };
  
    return (
      <div>
        <button onClick={() => toggleTheme('light')}>Light Theme</button>
        <button onClick={() => toggleTheme('dark')}>Dark Theme</button>
      </div>
    );
  };
  

  const ThemeDisplay = () => {
    // Consume the context using useContext hook
    const theme = useContext(ThemeContext);
  
    return <p>Current Theme: {theme}</p>;
  };