import React, { useState } from 'react'

const ConditionalRendering = () => {
    // logical && operators
      const [isLoggedIn, setIsLoggedIn] = useState(false);

      const handleToggle = () => {
        setIsLoggedIn(!isLoggedIn)
      }
  return (
    <div>
      {isLoggedIn && <p>Welcome back!</p>}
      {!isLoggedIn && <p>Please login!</p>}
      <button onClick={handleToggle}>
        Toggle Login State
      </button>
    </div>
  )
}

export default ConditionalRendering
