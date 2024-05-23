import React, { useState } from 'react'

export default function CustomApp() {
    const [fieldInput,setFieldInput] = useState(false);

    const handleChange  =(e) =>{
        setFieldInput(e.target.value)
    }

    const handleClear = () =>{
        setFieldInput('')
    }
  return (
    <>
     <input type="text" value={fieldInput} onChange={handleChange}/>
     <button onClick={handleClear}>Clear</button>
    </>
  )
}
