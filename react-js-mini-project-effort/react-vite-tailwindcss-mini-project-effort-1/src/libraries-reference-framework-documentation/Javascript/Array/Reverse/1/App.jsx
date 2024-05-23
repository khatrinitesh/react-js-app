import React, { useState } from 'react';

const CustomApp = () => {

    const [inputString, setInputString] = useState('');
    const [reversedString, setReversedString] = useState('');

    const handleInputChange = (event) => {
        setInputString(event.target.value);
    };

    const reverseString = () => {
        const reversed = inputString.split('').reverse().join('');
        setReversedString(reversed);
    };
    return (
        <div>
            <label>
                Enter a string:
                <input type="text" value={inputString} onChange={handleInputChange} />
            </label>
            <button onClick={reverseString}>Reverse</button>

            {reversedString && (
                <div>
                    <p>Reversed String:</p>
                    <p>{reversedString}</p>
                </div>
            )}
        </div>
    )
}

export default CustomApp
