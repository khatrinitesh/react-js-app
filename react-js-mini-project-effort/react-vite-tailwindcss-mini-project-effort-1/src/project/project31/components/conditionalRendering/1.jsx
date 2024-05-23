import React,{useState} from 'react'

export default function ConditionalRendering() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

     // Function to toggle the user's login status
    const toggleLogin = () => {
        setIsLoggedIn((prevIsLoggedIn) => !prevIsLoggedIn);
    };
  return (
    <>
        <h1>Conditional Rendering Example</h1>
        <button onClick={toggleLogin}>
            {isLoggedIn ? 'Logout' : 'Login'}
        </button>
        {isLoggedIn ? (<div>Welcome user</div>) : (<div>Please login</div>)}
    </>
  )
}
