import React, { useState } from 'react';

const CustomApp = () => {

    // State to hold the input values
    const [mainString, setMainString] = useState('');
    const [substring, setSubstring] = useState('');


    // function to handle input changes 
    const handleMainStringChange = (e) => {
        setMainString(e.target.value)
    }

    const handleSubStringChange = (e) => {
        setSubstring(e.target.value)
    }

    // Function to check the index of the substring in the mainString
    const checkIndexOf = () => {
        const index = mainString.indexOf(substring);
        alert(
            `The substring "${substring}" ${index !== -1
                ? `is found at index ${index}`
                : 'is not found in the string'
            }`
        );
    };

    // Function to check if the mainString includes the specified substring
    const checkIncludes = () => {
        const doesInclude = mainString.includes(substring);
        alert(
            `The string "${mainString}" ${doesInclude ? 'includes' : 'does not include'
            } "${substring}"`
        );
    };

    // function 
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
                <input type="text" value={substring} onChange={handleSubStringChange} />
            </label>
            <br />
            <button onClick={checkIndexOf}>Check Index Of</button>
            <button onClick={checkIncludes}>Check Includes</button>
        </>
    )
}

export default CustomApp
