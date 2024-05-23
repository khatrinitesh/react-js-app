import React, { useState } from 'react'

const App = () => {

    const initialCount = 20;

    const [count, setCount] = useState(initialCount)


    const btnInc = () => {
        setCount(count + 1)
    }
    const btnDec = () => {
        setCount(count - 1)
    }
    const btnReset = () => {
        setCount(0)
    }
    return (
        <>
            <button onClick={btnInc}>+</button>
            <button onClick={btnDec}>-</button>
            <button onClick={btnReset}>Reset</button>
            <h2>{count}</h2>
        </>
    )
}

export default App
