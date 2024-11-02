import React, { useState } from 'react';

const ArrayExample = () => {

    const initialArray1 = [1, "Hello", { id: 1, name: "Alice" }, true, 3.14];
    const initialArray2 = ["World", 42, false, { id: 2, name: "Bob" }, "React"];

    const [firstArray,setFirstArray] = useState(initialArray1);
    const [secondArray, setSecondArray] = useState(initialArray2);


    const addToArrays = () => {
        setFirstArray([...firstArray,'new item'])
        setSecondArray([...secondArray,'new item'])
    }
  return (
    <>
        <h1>Array Creation in React</h1>
        <h2>Array 1 (Using Array Constructor):</h2>
        <ul>
            {firstArray.map((item,index) => (
                <li key={index}>
                    {JSON.stringify(item)}
                </li>
            ))}
        </ul>
        <h2>Array 2 (Using Array Literal)</h2>
        <ul>
            {secondArray.map((item,index) => (
                <li key={index}>
                    {JSON.stringify(item)}
                </li>
            ))}
        </ul>

        <button onClick={addToArrays}>Add item to both arrays</button>

        <h3>Length of arrays:</h3>
        <p>Array 1 length: {firstArray.length}</p>
        <p>Array 2 length: {secondArray.length}</p>
    </>
  )
}

export default ArrayExample



