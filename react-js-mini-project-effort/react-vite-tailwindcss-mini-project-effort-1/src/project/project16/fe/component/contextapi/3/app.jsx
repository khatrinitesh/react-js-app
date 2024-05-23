import React, { createContext,useContext } from 'react';

// Step 1: Create a context
export const ThemeContext = createContext();

export default function ContextApi() {
  return (
    <>
     <ThemeProvider>
        <MyComponent/>
     </ThemeProvider>
    </>
  )
}

const ThemeProvider = ({children}) =>{
    const theme = 'light'
    return(
        <>
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
        </>
    )
}

const useTheme = () => {
    return useContext(ThemeContext)
}
const MyComponent = () => {
    const theme = useTheme();
    return(
        <div>Current Time: {theme}</div>
    )
}


