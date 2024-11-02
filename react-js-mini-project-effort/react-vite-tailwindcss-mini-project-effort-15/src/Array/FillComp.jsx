import React, { useState } from "react";

const FillComp = () => {
  // Step 2: Define an Array
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const [fillValue, setFillValue] = useState("");

  const HandlefillArray = () => {
    const newArray = array.fill(fillValue);
    setArray([...newArray]);
  };
  return (
    <>
      <h1>Using the `fill()` Method in React</h1>

      <h2>Original Array:</h2>
      <ul>
        {array.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>

      <h2>Fill the Array:</h2>
      <input
        type="text"
        value={fillValue}
        onChange={(e) => setFillValue(e.target.value)}
        placeholder="Enter fill value"
      />
      <button onClick={HandlefillArray}>Fill Array</button>

      <h2>Modified Array:</h2>
      <ul>
        {array.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>

      <h3>Length of Array:</h3>
      <p>{array.length}</p>
    </>
  );
};

export default FillComp;
