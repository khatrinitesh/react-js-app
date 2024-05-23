import React, { useState } from 'react';

const CustomApp = () => {

    const [inputVal, setInputVal] = useState('')
    const [charatIndex, setCharatindex] = useState([])

    const handleInput = (e) => {
        e.preventDefault();
        const value = e.target.value
        setInputVal(value)

        const char = value.charAt(2)
        setCharatindex(char)
    }

    return (
        <div>
            <input type="text" value={inputVal} onChange={handleInput} />
            <p>Character at index 2: {charatIndex}</p>
        </div>
    )
}

export default CustomApp
