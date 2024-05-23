import React, { useState } from 'react';

const CustomApp = () => {

    const [inputField, setInputField] = useState('');

    const handleInputChange = (e) => {
        setInputField(e.target.value)
    }

    const handleBtnClick = () => {
        setInputField('')
    }
    return (
        <div>
            <input type="text" value={inputField} onChange={handleInputChange} />
            <button onClick={handleBtnClick}>Click</button>
        </div>
    )
}

export default CustomApp
