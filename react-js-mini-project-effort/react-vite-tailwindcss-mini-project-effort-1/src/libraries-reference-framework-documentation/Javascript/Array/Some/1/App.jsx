import React, { useState } from 'react';

const CustomApp = () => {
    // State to hold an array of objects
    const [data, setData] = useState([
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' }
    ]);

    // function to remove an item from the array by ID
    const removeItem = (id) => {
        const newData = data.filter((val) => val.id !== id)
        setData(newData)
    }

    // Function to add a new item to the array
    const addItem = () => {
        const newItem = { id: data.length + 1, name: `Item ${data.length + 1}` }
        setData([...data, newItem])
    }

    // function to update the name of an item in the array
    const updateItemName = (id, newName) => {
        const updatedData = data.map(item => item.id === id ? { ...item, name: newName } : item)
        setData(updatedData)
    }

    return (
        <>
            <h2>Data</h2>
            <ul>
                {data.map((val, index) => {
                    return (
                        <li key={index}>
                            {val.name}
                            <button className='bg-[orange]' onClick={() => removeItem(val.id)}>Remove</button>
                            <button className='bg-[powderblue]' onClick={() => updateItemName(val.id, `Updated ${val.name}`)}>Update Name</button>
                        </li>
                    )
                })}
            </ul >
            <button onClick={addItem}>Add Item</button>
        </>
    )
}

export default CustomApp
