import React, { useState } from 'react';

const CustomApp = () => {

    // State to store an array of items
    const [items, setItems] = useState([]);

    // Handler function to add a new item to the array using push
    const addItem = () => {
        // Create a new item (you can replace this with any data you need)
        const newItem = `Items ${items.length + 1} `
        // Use the spread operator to create a new array with the new item added to the end
        setItems([...items, newItem])
    };



    return (
        <>
            <h2>Items:</h2>
            <ul>
                {/* Display the items in the array */}
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            {/* Button to add a new item */}
            <button onClick={addItem}>Add Item</button>
        </>
    )
}

export default CustomApp
