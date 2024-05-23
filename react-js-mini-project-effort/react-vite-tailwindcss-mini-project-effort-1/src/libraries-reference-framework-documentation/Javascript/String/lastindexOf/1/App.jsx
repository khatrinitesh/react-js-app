import React, { useState } from 'react';

const CustomApp = () => {

    // State to hold the input values
    const [mainString, setMainString] = useState('');
    const [searchString, setSearchString] = useState('');

    // Function to handle input changes
    const handleMainStringChange = (event) => {
        setMainString(event.target.value);
    };

    const handleSearchStringChange = (event) => {
        setSearchString(event.target.value);
    };

    // Function to find the last index of the searchString in mainString
    const findLastIndexOf = () => {
        const lastIndex = mainString.lastIndexOf(searchString);
        alert(
            `The last index of "${searchString}" in "${mainString}" is: ${lastIndex}`
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
                Enter the string to search:
                <input
                    type="text"
                    value={searchString}
                    onChange={handleSearchStringChange}
                />
            </label>
            <br />
            <button onClick={findLastIndexOf}>Find Last Index</button>
        </>
    )
}

export default CustomApp
