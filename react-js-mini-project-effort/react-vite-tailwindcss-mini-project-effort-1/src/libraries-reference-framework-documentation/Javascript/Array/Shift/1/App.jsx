import React, { useState } from 'react';


const CustomApp = () => {

    // State to store an array of items
    const [items, setItems] = useState(['item1', 'item2', 'item3', 'item4']);

    // Function to remove the first item using shift()
    const removeFirstItem = () => {
        // create a copy of the array using spread operator
        const updateItems = [...items]
        updateItems.shift()
        setItems(updateItems)
    }


    return (
        <div>
            <h1>Items:</h1>
            <ul>
                {/* Display the items in a list */}
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            {/* Button to trigger the removal of the first item */}
            <button onClick={removeFirstItem}>Remove First Item</button>
        </div>
    )
}

export default CustomApp
