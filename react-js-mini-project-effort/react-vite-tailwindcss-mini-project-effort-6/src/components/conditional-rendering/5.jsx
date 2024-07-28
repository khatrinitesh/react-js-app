import React, { useState } from 'react'

const ConditionalRendering = () => {
    // real world example 
    // let's implement a real-world example where we conditionally render different components based on the state.
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
      setIsLoggedIn(true);
    };
  
    const handleLogout = () => {
      setIsLoggedIn(false);
    };
  return (
    <div>
       {isLoggedIn ? (
        <WelcomeMessage onLogout={handleLogout} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  )
}

export default ConditionalRendering


const LoginForm = ({ onLogin }) => {
    return (
      <div>
        <h2>Login</h2>
        <button onClick={onLogin}>Log In</button>
      </div>
    );
  };

  const WelcomeMessage = ({ onLogout }) => {
    return (
      <div>
        <h2>Welcome back!</h2>
        <button onClick={onLogout}>Log Out</button>
      </div>
    );
  };