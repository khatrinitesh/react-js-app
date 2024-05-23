import React, { useState } from 'react'

export default function CustomApp() {

    const [count,setCount] = useState(0)

    const handleClick = () => {
        setCount(c => c + 1)
    }
  return (
    <div>
        {count}
      <Child handleClick={handleClick}/>
    </div>
  )
}

function Child({handleClick}){
    return(
        <>
         <button onClick={handleClick}>Increment</button>
        </>
    )
}