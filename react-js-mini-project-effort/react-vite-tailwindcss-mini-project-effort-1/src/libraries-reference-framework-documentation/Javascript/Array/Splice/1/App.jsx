import React, { useState } from 'react'

const CustomApp = () => {
    // Example array and object in state
    const [myArray, setMyArray] = useState([1, 2, 3, 4, 5]);
    const [myObject, setMyObject] = useState({ key1: 'value1', key2: 'value2', key3: 'value3' });

    // function to splice array and modify object
    const handleSplice = () => {
        // splice the array to remove elements (this modifies the original array)
        const newArray = [...myArray];
        newArray.splice(1, 2);
        setMyArray(newArray)

        // modiy the object (create a new object with modified value)
        const newObject = {
            ...myObject
        }
        delete myObject.key1;
        setMyObject(newObject)
    }
    return (
        <>
            <p>Original Array: {JSON.stringify(myArray)}</p>
            <p>Original Object: {JSON.stringify(myObject)}</p>
            <button onClick={handleSplice}>Click to Splice</button>
        </>
    )
}

export default CustomApp
