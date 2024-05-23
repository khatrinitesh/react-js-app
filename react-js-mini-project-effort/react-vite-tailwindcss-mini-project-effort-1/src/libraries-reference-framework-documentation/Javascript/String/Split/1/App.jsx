import React, { useState } from 'react';

const CustomApp = () => {

    // state to hold the input string 
    const [inputString, setInputString] = useState('')

    // state to hold the result array 
    const [resultA, setResultA] = useState([]);

    // function to handle input change 
    const handleInputChange = (e) => {
        setInputString(e.target.value)
    }

    const handleSpliFilter = () => {
        const stringArray = inputString.split(',')
        const filteredArray = stringArray.filter((str) => str.trim() !== '')
        setResultA(filteredArray)
    }
    return (
        <>
            <label>
                Enter a comma-separated string:
                <input type="text" value={inputString} onChange={handleInputChange} />
            </label>
            <br />
            <button onClick={handleSpliFilter}>Split and Filter</button>
            <br />
            {resultA.length > 0 && (
                <div>
                    <p>Result:</p>
                    <ul>
                        {resultA.map((item, index) => {
                            return (
                                <li key={index}>{item}</li>
                            )
                        })}
                    </ul>
                </div>
            )}
        </>
    )
}

export default CustomApp
