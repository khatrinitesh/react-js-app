import React,{useState} from 'react'

export default function CustomApp() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };
    const handleLogout = () => {
        setIsLoggedIn(false);
    };

  return (
    <>
    {isLoggedIn ? (
        <div>
            <h1>Welcome back</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    ) : (
        <div>
            <h1>Please Login</h1>
            <button onClick={handleLogin}>Login</button>
        </div>
    )}
    </>
  )
}
