import React, { useState } from 'react';

const CustomApp = () => {
    const [inputVal, setInputVal] = useState('')
    const [isSafeIn, setIsSafeIn] = useState(false);

    const handleInputChange = (e) => {
        const value = e.target.value
        setInputVal(value);

        setIsSafeIn(Number.isSafeInteger(Number(value)))
    }
    return (
        <div>
            <label>
                Enter a number:
                <input type="text" value={inputVal} onChange={handleInputChange} />
            </label>
            {isSafeIn ? (<><p>the entered value is a safe integer</p></>) : (<><p>the entered value is not a safe integer.</p></>)}
        </div>
    )
}

export default CustomApp
