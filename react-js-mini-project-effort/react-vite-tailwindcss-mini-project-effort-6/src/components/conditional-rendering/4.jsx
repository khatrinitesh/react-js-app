import React, { useState } from 'react'

const ConditionalRendering = () => {
    // immediately invoked function expression [IIFE]
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleToggle = () => {
        setIsLoggedIn(!isLoggedIn)
    }


  return (
    <div>
        {(() => {
            if(isLoggedIn){
                return <p>Welcome backin</p>
            }
            else{
                return <p>Please login</p>
            }
        })()}
        <button onClick={handleToggle}>
        Toggle Login State
      </button>
    </div>
  )
}

export default ConditionalRendering

