import React, { useState } from 'react'

const ConditionalRendering = () => {
    const [isLogged,setIsLogged] = useState(false);

    const handleToggle = () => {
        setIsLogged(!isLogged)
    }
  return (
    <div>
      {isLogged ? (<><p>Welcome back</p></>) : (<><div>Laboris cillum dolore ad ex mollit esse amet minim do mollit.</div></>)}
      <br/>
      <button onClick={handleToggle}>Click</button>
    </div>
  )
}

export default ConditionalRendering
