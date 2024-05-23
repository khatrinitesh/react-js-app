import React from 'react'
import { useState } from 'react'

const Sidebar = () => {

    const [btnToggle,setBtnToggle] = useState(false);

    const handleToggle  =() => {
        setBtnToggle(!btnToggle)
    }
  return (
    <>
     <button onClick={handleToggle}>&#9776;</button> 
     {btnToggle && <div>Sidebar</div>}
    </>
  )
}

export default Sidebar
