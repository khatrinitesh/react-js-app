import React, { useState } from 'react';

const CustomApp = () => {
    // State to hold the input value
    const [inputValue, setInputValue] = useState('');


    // State to hold the index for charCodeAt
    const [charIndex, setCharIndex] = useState(0);

    // Function to handle input change
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    // Function to handle index change
    const handleIndexChange = (event) => {
        setCharIndex(parseInt(event.target.value, 10));
    };


    return (
        <>
            <label>
                Enter a string:
                <input type="text" value={inputValue} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Enter an index:
                <input
                    type="number"
                    value={charIndex}
                    onChange={handleIndexChange}
                />
            </label>
            <br />
            {inputValue.length > 0 && (
                <p> The Unicode code point at index {charIndex} is{' '}
                    {inputValue.charCodeAt(charIndex)}
                </p>
            )}
        </>
    )
}

export default CustomApp
