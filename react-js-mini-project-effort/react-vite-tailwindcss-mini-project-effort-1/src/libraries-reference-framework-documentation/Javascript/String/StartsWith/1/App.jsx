import React, { useState } from 'react';

const CustomApp = () => {
    // state to hold the input values 
    const [mainString, setMainString] = useState('');
    const [prefix, setPrefix] = useState('');

    // state to hold the result of startsWith
    const [startsWithResult, setStartsWithResult] = useState(false);

    // function to handle input changes
    const handleMainChange = (e) => {
        setMainString(e.target.value)
    }


    const handlePrefixChange = (e) => {
        setPrefix(e.target.value)
    }

    // function to handle startsWith check 
    const handleStartsWithCheck = () => {
        const result = mainString.startsWith(prefix);
        setStartsWithResult(result);
    }
    return (
        <>
            <label>
                Enter the main string:
                <input type="text" value={mainString} onChange={handleMainChange} />
            </label>
            <br />
            <label>
                Enter the prefix:
                <input type="text" />
            </label>
        </>
    )
}

export default CustomApp
