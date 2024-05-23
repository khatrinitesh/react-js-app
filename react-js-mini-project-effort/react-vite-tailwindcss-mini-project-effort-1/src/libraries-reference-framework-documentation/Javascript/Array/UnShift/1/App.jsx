import React, { useState } from 'react';

const CustomApp = () => {
    const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

    const addItemToBeginnging = () => {
        const newItem = `New Item ${items.length + 1}`
        setItems([newItem, ...items])
    }


    return (
        <div>
            <ul>
                {items.map((val, index) => {
                    return (
                        <li key={index}>
                            {val}
                        </li>
                    )
                })}
            </ul>
            <button onClick={addItemToBeginnging}>Add iem</button>
        </div>
    )
}

export default CustomApp
