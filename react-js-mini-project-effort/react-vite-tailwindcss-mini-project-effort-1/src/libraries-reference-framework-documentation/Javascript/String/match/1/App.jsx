import React, { useState } from 'react';

const CustomApp = () => {


    // State to hold the input values
    const [mainString, setMainString] = useState('');
    const [substring, setSubstring] = useState('')

    // Function to handle input changes
    const handleMainStringChange = (event) => {
        setMainString(event.target.value);
    };

    const handleSubstringChange = (event) => {
        setSubstring(event.target.value);
    };

    // Function to check if mainString includes the specified substring
    const checkIncludes = () => {
        const doesInclude = mainString.includes(substring);
        alert(
            `The string "${mainString}" ${doesInclude ? 'includes' : 'does not include'
            } "${substring}"`
        );
    };

    // Function to match mainString against a regular expression
    const matchRegExp = () => {
        const regex = new RegExp(substring);
        const matchResult = mainString.match(regex);
        alert(
            `The match result for the regular expression /${substring}/ in "${mainString}" is: ${matchResult}`
        );
    };


    return (
        <>
            <label>
                Enter the main string:
                <input
                    type="text"
                    value={mainString}
                    onChange={handleMainStringChange}
                />
            </label>
            <br />
            <label>
                Enter the substring to check:
                <input type="text" value={substring} onChange={handleSubstringChange} />
            </label>
            <br />
            <button onClick={checkIncludes}>Check Includes</button>
            <button onClick={matchRegExp}>Match Regular Expression</button>
        </>
    )
}

export default CustomApp
