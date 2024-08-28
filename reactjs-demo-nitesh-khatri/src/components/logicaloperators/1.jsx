import React, { useState } from 'react';

const Example = () => {
  return (
    <div>
      <UserGreeting/> 
    </div>
  );
}

export default Example;

const Result = () => {
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    const handleToggleLogin = () => {
        setIsLoggedIn(prevLogged => !prevLogged)
    }

    return(
        <>
         <h1>Welcome to the App</h1>
            {/* Conditionally render content based on isLoggedIn */}
            {isLoggedIn && <p>You are logged in!</p>}
            {!isLoggedIn && <p>Please log in.</p>}
            {/* Button to toggle login state */}
            <button onClick={handleToggleLogin}>
                {isLoggedIn ? 'Log Out' : 'Log In'}
            </button>
        </>
    )
}
