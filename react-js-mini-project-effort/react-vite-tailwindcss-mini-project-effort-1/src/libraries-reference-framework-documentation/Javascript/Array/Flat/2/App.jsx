import React from 'react';

const CustomApp = () => {
    const nestedArray = [1, [2, 3, [4, 5]], 6, [7]];

    const flatArray = nestedArray.flat(2);
    return (
        <div>
            <p>Nested array: {JSON.stringify(nestedArray)}</p>
            <p>Flattened Array: {JSON.stringify(flatArray)}</p>
        </div>
    )
}

export default CustomApp
