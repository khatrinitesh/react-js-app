import React, { useState } from 'react';

const CustomApp = () => {
    // State to hold the input values
    const [mainString, setMainString] = useState('');
    const [suffix, setSuffix] = useState('');

    // Function to handle input changes
    const handleMainStringChange = (e) => {
        setMainString(e.target.value);
    };

    const handleSuffixChange = (e) => {
        setSuffix(e.target.value);
    };

    // Function to check if the mainString ends with the specified suffix
    const checkEndsWith = () => {
        const doesEndsWith = mainString.endsWith(suffix)
        console.log(
            `The String "${mainString}" ${doesEndsWith ? 'end' : 'doesnt end'} with ${suffix} `
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
                Enter the suffix to check:
                <input type="text" value={suffix} onChange={handleSuffixChange} />
            </label>
            <br />
            <button onClick={checkEndsWith}>Check Ends With</button>
        </>
    )
}

export default CustomApp
