import React, { useState } from 'react'

const ConditionalRendering = () => {
    const [isLogged ,setIsLogged] = useState(false);
    const handleToggle = () => {
        setIsLogged(true);
    }
  return (
    <div>
      
      {isLogged && <div>Consectetur dolore aute id veniam aute tempor ullamco proident cupidatat cillum exercitation ut.</div>}
      <button onClick={handleToggle}>Click</button>
    </div>
  )
}

export default ConditionalRendering
