import React, { useState } from 'react'

const AutoCompleteApp = () => {
    return (
        <>
            <AutoComplete />
        </>
    )
}

export default AutoCompleteApp

const AutoComplete = () => {
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);


    const allSuggestions = ['apple', 'banana', 'cherry', 'date', 'grape'];

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        // Filter suggestions based on the input value
        const filteredSuggestions = allSuggestions.filter(suggestion =>
            suggestion.toLowerCase().includes(value.toLowerCase())
        );
        setSuggestions(filteredSuggestions);
    };

    const handleSuggestionClick = (suggestion) => {
        setInputValue(suggestion);
        setSuggestions([]);
    };
    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Type here..."
            />
            <ul>
                {suggestions.map((suggestion, index) => (
                    <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                        {suggestion}
                    </li>
                ))}
            </ul>
        </>
    )
}


