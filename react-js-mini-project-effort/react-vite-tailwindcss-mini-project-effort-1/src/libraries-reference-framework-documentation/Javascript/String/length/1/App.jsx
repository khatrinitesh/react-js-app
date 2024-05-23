import React, { useState } from 'react';

const CustomApp = () => {
    // State to hold the input values
    const [mainString, setMainString] = useState('');
    const [substring, setSubstring] = useState('');

    // Function to handle input changes
    const handleMainStringChange = (event) => {
        setMainString(event.target.value);
    };

    const handleSubstringChange = (event) => {
        setSubstring(event.target.value);
    };

    // Function to check length and inclusion
    const checkLengthAndIncludes = () => {
        const stringLength = mainString.length;
        const doesInclude = mainString.includes(substring);
        alert(
            `The length of the string is ${stringLength}. ${doesInclude
                ? `The string includes "${substring}".`
                : `The string does not include "${substring}".`
            }`
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
                <input
                    type="text"
                    value={substring}
                    onChange={handleSubstringChange}
                />
            </label>
            <br />
            <button onClick={checkLengthAndIncludes}>Check Length and Includes</button>
        </>
    )
}

export default CustomApp
