import React, { useState } from 'react';

const CustomApp = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    const renderItems = () => {
        const items = [];
        let i = 0;
        while (i < count) {
            items.push(<div key={i}>Items {i + 1}</div>)
            i++
        }
        return items;

    }
    return (
        <div>
            <button onClick={handleClick}>Add item</button>
            {renderItems()}
        </div>
    )
}

export default CustomApp
