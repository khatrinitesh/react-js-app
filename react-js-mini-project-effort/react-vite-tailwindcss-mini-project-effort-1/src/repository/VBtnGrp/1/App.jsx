import React, { useState } from 'react'

const VBtnGrpApp = () => {
  return (
    <>
     <VBtnGrp/> 
    </>
  )
}

export default VBtnGrpApp

const VBtnGrp = () => {

    const [selected,setSelected] = useState(null)

    const handleButton  = (button) => {
        setSelected(button)
        console.log(`Button ${button} clicked`)
    }
    return(
        <>
        <button onClick={() => handleButton('Button1')} className={selected === 'Button1' ? 'selected' : ''}>1</button>
        <button onClick={() => handleButton('Button2')} className={selected === 'Button2' ? 'selected' : ''}>2</button>
        <button onClick={() => handleButton('Button3')} className={selected === 'Button3' ? 'selected' : ''}>3</button>
        </>
    )
}
