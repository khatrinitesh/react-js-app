import React, { useState } from 'react';

const ClearInputFieldApp = () => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleClearInput = () => {
        setInputValue('');
    };
    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Type something..."
            />
            <button onClick={handleClearInput}>Clear</button>
        </>
    )
}

export default ClearInputFieldApp
