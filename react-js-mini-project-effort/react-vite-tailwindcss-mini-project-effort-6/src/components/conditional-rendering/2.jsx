import React, { useState } from 'react'

const ConditionalRendering = () => {
  // ternary operators
    const [isLogged,setIsLogged] = useState(false);

    const handleToggle = () => {
        setIsLogged(!isLogged)
    }
  return (
    <div>
        {isLogged ? <p>Welcome back</p> : <p>Please login</p>}
        <button onClick={handleToggle}>Toggle login state</button>
    </div>
  )
}

export default ConditionalRendering
