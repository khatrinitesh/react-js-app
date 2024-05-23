import { setIn } from 'formik';
import React, { useState } from 'react';

const GetTheLengthStringApp = () => {
    return (
        <>
            <StringLength />
        </>
    )
}

export default GetTheLengthStringApp

const StringLength = () => {
    const [inputVal, setInputVal] = useState('');

    const handleInputChange = (e) => {
        setInputVal(e.target.value)
    }

    const getStringLength = () => {
        return inputVal.length
    }
    return (
        <>
            <label>Enter a string:
                <input type="text" value={inputVal} onChange={handleInputChange} />
            </label>
            <p>The length of the entered string is: {getStringLength()}</p>
        </>
    )
}
