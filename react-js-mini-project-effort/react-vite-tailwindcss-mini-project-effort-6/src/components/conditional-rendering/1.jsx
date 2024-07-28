import React, { useState } from 'react'

const ConditionalRendering = () => {
  // if else statements
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleToggle = () =>{
        setIsLoggedIn(!isLoggedIn)
    }

    let content ;
    if(isLoggedIn){
        content = <p>Welcome back!</p>
    }
    else{
        content = <p>please log in.!</p>
    }
  return (
    <div>
      {content}
      <button onClick={handleToggle}>
        Toggle Login State
      </button>
    </div>
  )
}

export default ConditionalRendering
