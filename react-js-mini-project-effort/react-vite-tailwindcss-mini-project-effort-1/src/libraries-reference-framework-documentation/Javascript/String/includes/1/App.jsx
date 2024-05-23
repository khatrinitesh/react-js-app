import React, { useState } from 'react';

const CustomApp = () => {
    // State to hold the input values
    const [mainString, setMainString] = useState('');
    const [substring, setSubstring] = useState('');

    const handleStringChange = (e) => {
        setMainString(e.target.value)
    }

    const handleSubStringChange = (e) => {
        setSubstring(e.target.value)
    }

    const checkIncludes = () => {
        const doesInclude = mainString.includes(substring);
        console.log(`The string "${mainString}" ${doesInclude ? 'includes' : 'does not include'
            } "${substring}"`)
    }

    return (
        <>
            <label>
                Enter the main string:
                <input
                    type="text"
                    value={mainString}
                    onChange={handleStringChange}
                />
            </label>
            <br />
            <label>
                Enter the substring to check:
                <input type="text" value={substring} onChange={handleSubStringChange} />
            </label>
            <br />
            <button onClick={checkIncludes}>Check Includes</button>
        </>
    )
}

export default CustomApp
