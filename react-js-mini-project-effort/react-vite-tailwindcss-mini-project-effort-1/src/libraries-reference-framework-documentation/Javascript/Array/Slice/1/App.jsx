import React, { useState } from 'react';

const CustomApp = () => {

    // state to hold an array of items 
    const [items, setItems] = useState(['item1', 'item2', 'item3', 'item4', 'item5'])

    // function to handle slicing the array 
    const handleSliceArray = () => {
        // create a shallow copy of the array using slice 
        const slicedItem = items.slice(0, 4)
        console.log('original array', items)
        console.log('Sliced  array', slicedItem)
    }

    return (
        <div>
            <h1>React Slice Method Example</h1>
            <button onClick={handleSliceArray}>Slice Array</button>
        </div>
    )
}

export default CustomApp
