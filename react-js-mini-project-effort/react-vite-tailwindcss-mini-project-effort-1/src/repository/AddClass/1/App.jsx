import React, { useState } from 'react'

const AddClassApp = () => {
    const [isAdd,setIsAdd] = useState(false)

    const btnAdd = () => {
        setIsAdd(true)
    }
  return (
    <>
        <button onClick={btnAdd} className={`happy ${isAdd ? 'yes' : 'no'}`}>click add class name</button>
        <p>{isAdd ? 'yes' : ''}</p>
    </>
  )
}

export default AddClassApp
