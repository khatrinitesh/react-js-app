import React, { useState } from 'react';

const CustomApp = () => {
    const initialItems = [
        'Apple',
        'Banana',
        'Cherry',
        'Date',
        'Grape',
        'Lemon',
        'Orange',
        'Peach',
    ];

    // state to hold the input value - search query
    const [searchQuery, setSearchQuery] = useState('')

    // function handle search input change 
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value)
    }

    // function to filter and slice the items based on the search query
    const filterAndSliceItems = () => {
        const filteredItems = initialItems.filter((item) => item.toLowerCase().includes(searchQuery.toLowerCase()))
        // let us display only the first three items after filtering
        const slicedItems = filteredItems.slice(0, 4);
        setSearchQuery(slicedItems)
        console.log(slicedItems)
    }

    return (
        <>
            <label>
                Search:
                <input type="text" value={searchQuery} onChange={handleSearchChange} />
            </label>
            <br />
            <button onClick={filterAndSliceItems}>Filter and Slice Items</button>
        </>
    )
}

export default CustomApp
