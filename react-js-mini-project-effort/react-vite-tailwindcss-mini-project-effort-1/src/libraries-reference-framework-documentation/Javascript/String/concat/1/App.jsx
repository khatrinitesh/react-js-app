import React, { useState } from 'react';

const CustomApp = () => {

    // State to hold the input values
    const [string1, setString1] = useState('');
    const [string2, setString2] = useState('');
    const [merge, setMerge] = useState('')

    const handleString1Change = (e) => {
        setString1(e.target.value)
    }
    const handleString2Change = (e) => {
        setString2(e.target.value)
    }

    const handleConcated = () => {
        const concatedString = string1.concat(string2)
        console.log(`Concatenated String ${concatedString}`)
        setMerge(concatedString)
    }


    return (
        <div>
            <label>
                Enter the first string:
                <input type="text" value={string1} onChange={handleString1Change} />
            </label>
            <br />
            <label>
                Enter the second string:
                <input type="text" value={string2} onChange={handleString2Change} />
            </label>
            <br />
            <button onClick={handleConcated}>Click Combined</button>
            <hr />
            {merge}
            <br />
        </div>
    )
}

export default CustomApp
