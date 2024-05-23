import React, { useState } from 'react';
import { name } from './../../exportimportmodule/1/example1';

const CustomApp = () => {
    // State to manage the input value
    const [inputValue, setInputValue] = useState('');

    // State to manage a list of items
    const [items, setItems] = useState([]);

    // Event handler to update the input value
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };


    // Using the spread operator to create a new array with the existing items and the new one
    const handleAddItem = () => {
        setItems([...items,inputValue])
        setInputValue('');
    }

    // event handler to delete an item from the list 
    const btnDel =(index) => {
        const updatedItems = [...items]
        updatedItems.splice(index,1)
        setItems(updatedItems)
    }

    // rendering the component
  return (
    <div>
      <h2>Virtual DOM Example</h2>
      <input type="text" onChange={handleInputChange} value={inputValue} placeholder='type something...' />
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {/* Mapping through the items to render a list */}
      {items.map((item,index) => {
        return(
            <li key={index}>{item} <button onClick={() => btnDel(index)}>Delete</button></li>
        )
      })}
      </ul>
    </div>
  )
}

export default CustomApp
