import React, { useState } from "react";

const CustomApp = () => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsUserLoggedIn(true)
    }

    const handleLogout = () => {
        setIsUserLoggedIn(false)
    }


    return (
        <>
            <h1>Conditional Rendering Example</h1>
            {isUserLoggedIn ? (
                <div>
                    <p>Welcome, User!</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    <p>Please log in to continue.</p>
                    <button onClick={handleLogin}>Login</button>
                </div>
            )}
        </>
    )
}

export default CustomApp
