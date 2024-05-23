import React, { useState } from 'react'

const ToggleTextApp = () => {

    const [isToggle,setIsToggle] = useState(false);

    const handleToggle = () => {
        setIsToggle(!isToggle);
    }
  return (
    <>
      <button onClick={handleToggle}>Click Toggle {isToggle ? 'hidden' : 'visible'}</button>
      <p>{isToggle ? 'text' : ''}</p>
    </>
  )
}

export default ToggleTextApp
