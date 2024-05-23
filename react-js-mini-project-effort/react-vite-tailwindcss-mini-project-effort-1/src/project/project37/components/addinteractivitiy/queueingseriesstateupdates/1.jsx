import React, { useState } from 'react'

export default function QueueingSeriesStateUpdatesApp() {
  return (
    <>
     <QueueingSeriesStateUpdates/>
    </>
  )
}

function QueueingSeriesStateUpdates(){
    const [count,setCount] = useState(0);

    const btnIncSingle =() => {
        setCount(prev => prev + 1)
    }
    const btnIncTriple =() => {
        setCount(prev => prev + 3)
    }
    return(
        <>
        <button onClick={btnIncSingle}>+1</button>
        <button onClick={btnIncTriple}>+3</button>
        <h2>Score: {count}</h2>
        </>
    )
}