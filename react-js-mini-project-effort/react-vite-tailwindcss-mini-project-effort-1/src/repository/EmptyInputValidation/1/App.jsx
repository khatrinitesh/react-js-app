import React, { useState } from 'react';

const EmptyInputValidationApp = () => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        setError(''); // Clear any previous error when the user types
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim() === '') {
            setError('Input cannot be empty');
            return;
        }

        // Perform other form submission logic here
        console.log('Form submitted with input:', inputValue);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Input:
                    <input type="text" value={inputValue} onChange={handleInputChange} />
                </label>
                <button type="submit">Submit</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </>
    )
}

export default EmptyInputValidationApp
