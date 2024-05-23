import React, { useState } from 'react';

const CustomApp = () => {

    const [items, setItems] = useState([
        { id: 1, name: 'Item 1', category: 'A' },
        { id: 2, name: 'Item 2', category: 'B' },
        { id: 3, name: 'Item 3', category: 'A' },
    ]);


    const filterCategory = (category) => {
        const filteredItems = items.filter(item => item.category === category);
        setItems(filteredItems);
    };

    return (
        <>
            <h2>Filtered Items</h2>
            <button className="bg-black text-white font-bold" onClick={() => filterCategory('A')}>Filter Category A</button>
            <button className="bg-black text-white font-bold" onClick={() => filterCategory('B')}>Filter Category B</button>
            <ul>
                {items.map((val) => {
                    const { id, name, category } = val
                    return (
                        <li key={id}>{name} - {category}</li>
                    )
                })}
            </ul>
        </>
    )
}

export default CustomApp
