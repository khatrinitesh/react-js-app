import React, { useState } from 'react'

const HooksApp = () => {
    const [msg, setMsg] = useState('this is a functional component')

    const btnChange = () => {
        setMsg('this is a class component')
    }
    return (
        <div>
            <h1>{msg}</h1>
            <button onClick={btnChange}>Change text</button>
        </div>
    )
}

export default HooksApp
