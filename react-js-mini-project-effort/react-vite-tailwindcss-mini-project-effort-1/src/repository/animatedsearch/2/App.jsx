import React, { useState } from 'react';
import './custom.css';

const CustomApp = () => {
    const [isSearchVisible, setIsSearchVisible] = useState(false);


    const toggleSearchVisibility = () => {
        setIsSearchVisible(!isSearchVisible)
    }
    return (
        <>
            <button onClick={toggleSearchVisibility} className="search-icon">
                🔍
            </button>

            <form className={`search-form ${isSearchVisible ? 'active' : ''}`}>
                <input type="text" placeholder="Search..." />
                <button type="submit">Search</button>
            </form>
        </>
    )
}

export default CustomApp
