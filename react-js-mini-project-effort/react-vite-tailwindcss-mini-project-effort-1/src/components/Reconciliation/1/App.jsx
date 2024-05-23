import React, { useState } from 'react';

const CustomApp = () => {
    // State to manage a list of items
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  // event handler to add a new item to the list 
  const handleAddItem = () => {
    // using the spread operator to create a new array with the existing items and the new one
    setItems([...items,`Item ${items.length+1}`])
  };

  // event handler to remove the first item from the list 
  const handleRemoveItem = () => {
    setItems(items.slice(1));
  }
  return (
    <div>
        <h2>Reconciliation Example</h2>
        <button onClick={handleAddItem}>Add Item</button>
        <button onClick={handleRemoveItem}>Remove First Item</button>
        <ul>
            {/* MAPPING THROUGH THE ITEMS TO RENDER A LIST */}
            {items.map((val,index) => {
                return(
                    <li key={index}>{val}</li>
                )
            })}
        </ul>
    </div>
  )
}

export default CustomApp
