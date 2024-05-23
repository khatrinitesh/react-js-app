import React,{useState} from 'react'

export default function ConditionalRendering() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };
    
    const handleLogout = () => {
        setIsLoggedIn(false);
    };

  return (
    <>
      <h1>Conditional Rendering Example</h1>
      <h1>Conditional Rendering Example</h1>
      {isLoggedIn ? (
        <Dashboard onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  )
}
