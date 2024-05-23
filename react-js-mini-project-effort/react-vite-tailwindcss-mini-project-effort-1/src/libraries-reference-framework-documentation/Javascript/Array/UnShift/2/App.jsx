import React, { useState } from 'react'

const CustomApp = () => {
    // State containing an array of objects
    const [data, setData] = useState([
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'Bob' },
    ]);


    // function to add a new object to the beginning of the array
    const addObjectToFront = () => {
        const newObject = {
            id: Date.now(),
            name: "New Person"
        }
        // using unshift to add the new object to the beginning of an array
        setData((prevData) => [newObject, ...prevData])
    }
    return (
        <>
            <h1>Data List</h1>
            <ul>
                {/* rendering the array of objects */}
                {data.map((item) => {
                    return (
                        <li key={item.id}>{item.name}</li>
                    )
                })}
            </ul >
            <button onClick={addObjectToFront}>Add object to front</button>
        </>
    )
}

export default CustomApp
