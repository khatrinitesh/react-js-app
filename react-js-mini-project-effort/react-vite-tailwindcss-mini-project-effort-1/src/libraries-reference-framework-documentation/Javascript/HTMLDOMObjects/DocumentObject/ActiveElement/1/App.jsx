import React, { useState } from 'react';

const CustomApp = () => {
    const [activeEle, setActiveEle] = useState([]);

    const items = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        // Add more items as needed
    ]

    const handleItemClick = (id) => {
        setActiveEle(id)
    }
    return (
        <>
            <h2>Active element: {activeEle !== null ? `Item ${activeEle}` : 'None'}</h2>
            <ul>
                {items.map((item) => {
                    return (
                        <li key={item.id} onClick={() => handleItemClick(item.id)} style={{ cursor: 'pointer', fontWeight: activeEle === item.id ? 'bold' : 'normal' }}>{item.name}
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default CustomApp
