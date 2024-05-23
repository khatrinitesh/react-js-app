import React, { useState } from 'react';

const CustomApp = () => {

    // state to hold the list of items and the search query
    const [items, setItems] = useState(['Apple', 'Banana', 'Orange', 'Grapes'])
    const [searchQuery, setSearchQuery] = useState('');

    // function to handle search input query
    const handleSearchQuery = (e) => {
        setSearchQuery(e.target.value)
    }

    // function to filter items based on the search query 
    const filteredItems = items.filter((item) => item.toLowerCase().includes(searchQuery.toLowerCase()))
    return (
        <>
            <label>
                Search:
                <input type="text" value={searchQuery} onChange={handleSearchQuery} />
            </label>
            <ul>
                {filteredItems.map((val, index) => {
                    return (
                        <li key={index}>
                            {val}
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default CustomApp
