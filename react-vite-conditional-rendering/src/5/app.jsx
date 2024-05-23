import React, { useState } from "react";

const CustomApp = () => {
   
 
  return (
    <>
    {/* Conditionally render login form or welcome message */}
    <ContionalComp />
    </>
  )
};

export default CustomApp;

function ContionalComp() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin  =() => {
        setIsLoggedIn(true)
    }

    const handleLogout  =() => {
        setIsLoggedIn(false)
    }
  return (
    <>
      <div className="container mx-auto p-4">
        {isLoggedIn ? (
          <>
            <div>
              <h1 className="text-3xl font-bold mb-4">Welcome, User!</h1>
              <p>You are logged in.</p>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </>
        ) : (
          <>
            <div>
              <h1 className="text-3xl font-bold mb-4">Please Log In</h1>
              <p>Please log in to access the content.</p>
              <button onClick={handleLogin}>Login</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
