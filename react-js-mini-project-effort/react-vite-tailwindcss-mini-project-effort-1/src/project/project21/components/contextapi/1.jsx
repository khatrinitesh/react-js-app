import React,{ createContext,useContext} from 'react';

const ThemeContext = createContext();



export default function ContextApi() {
  return (
    <ThemeContext.Provider value='dark'>
      <Toolbar/>
    </ThemeContext.Provider>
  )
}

function Toolbar(){
    const theme = useContext(ThemeContext)
    return(
        <>
        <button style={{ background: theme }}>Click me</button>
        </>
    )
}
