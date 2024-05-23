import React, { useState } from 'react';

const CustomApp = () => {

    // State to hold the input values
    const [baseString, setBaseString] = useState('');
    const [repeatCount, setRepeatCount] = useState(0);

    const handleBaseString = (e) => {
        setBaseString(e.target.value)
    }


    const handleRepeatCountChange = (e) => {
        setRepeatCount(parseInt(e.target.value))
    }

    const repeatString = () => {
        const repeatedString = baseString.repeat(repeatCount);
        console.log(`Repeated String: ${repeatedString}`)
    }

    return (
        <>
            <label>
                Enter the base string:
                <input
                    type="text"
                    value={baseString}
                    onChange={handleBaseString}
                />
            </label>
            <br />
            <label>
                Enter the repeat count:
                <input
                    type="number"
                    value={repeatCount}
                    onChange={handleRepeatCountChange}
                />
            </label>
            <br />
            <button onClick={repeatString}>Repeat String</button>
        </>
    )
}

export default CustomApp
