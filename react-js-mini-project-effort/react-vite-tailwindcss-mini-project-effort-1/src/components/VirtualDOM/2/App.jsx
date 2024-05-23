import React, { useState } from 'react';

const CustomApp = () => {
    const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

    const addItem = () => {
        const newItem = `Item ${items.length + 1}`
        setItems([...items,newItem])
    }

    const delItem = () => {
        const updatedData = [...items]
        updatedData.pop();
        setItems(updatedData)
    }
  return (
    <div>
         <button onClick={delItem}>Delete item</button>
         <button onClick={addItem}>Add item</button>
      {items.map((val,index) => {
        return(
            <div key={index}>
                <h2>{val}</h2>
            </div>
        )
      })}
    </div>
  )
}

export default CustomApp
