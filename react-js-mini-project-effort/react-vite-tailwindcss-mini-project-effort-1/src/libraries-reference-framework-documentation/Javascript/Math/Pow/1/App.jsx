import React from 'react'

const CustomApp = () => {

    // Example number and exponent
    const baseNum = 2;
    const exponent = 3;

    // calculate power for array elements
    const arrayVal = [1, 2, 3, 4, 5]
    const powerArrayVal = arrayVal.map((val) => Math.pow(baseNum, val))

    const objectVal = {
        key1: 2,
        key2: 3,
        key3: 4
    };

    const poweredObject = {};
    for (const [key, val] of Object.entries(objectVal)) {
        poweredObject[key] = Math.pow(baseNum, val)
    }

    return (
        <div>
            <p>Array Values: {arrayVal.join(', ')}</p>
            <p>Powered Array: {powerArrayVal.join(', ')}</p>
            <p>Object Values: {JSON.stringify(objectVal)}</p>
            <p>Powered Object: {JSON.stringify(poweredObject)}</p>
        </div>
    )
}

export default CustomApp
