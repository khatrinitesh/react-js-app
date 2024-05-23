import React, { useState } from 'react'

const CustomApp = () => {

    const [count,setCount] = useState(0)

    const handleEventInc  = ()=>{
        setCount((prevVal) => prevVal + 1)
    }
  return (
    <div>
      <ChildComp count={count} onInc={handleEventInc}/>
    </div>
  )
}

export default CustomApp

const ChildComp = ({count,onInc}) => {
    return(
        <>
        {count}
        <button onClick={onInc}>Increment</button>
        </>
    )
}

