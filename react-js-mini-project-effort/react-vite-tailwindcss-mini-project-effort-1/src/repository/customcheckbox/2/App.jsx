import React, { useState } from 'react';
import './custom.css';


const CustomApp = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const toggleMenuVisibility = () => {
        setInputValue(!isMenuVisible)
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // handle form submission logic here
        console.log('submitted', inputValue)
        // you can also close the menu after submission if needed
        setIsMenuVisible(false);
    }


    return (
        <>
            <button onClick={toggleMenuVisibility}>Open Menu</button>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            {isMenuVisible && (
                <div className="menu">
                    <form onSubmit={handleFormSubmit}>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="Type something..."
                        />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )}

        </>
    )
}

export default CustomApp
