import React, { useState } from 'react'

const ToggleClassApp = () => {

    const [isClass,setIsClass] = useState(false)

    const handleToggle = () => {
        setIsClass(!isClass)
    }
  return (
    <>
      <div className={`happy ${isClass ? 'active' : 'noactive'}`} onClick={handleToggle}>Toggle Class</div>
    </>
  )
}

export default ToggleClassApp
