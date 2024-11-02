import React, { useState } from "react";

const EntriesComp = () => {
  const [array, setArray] = useState([
    10,
    "Hello",
    { id: 1, name: "Alice" },
    true,
  ]);

  const getEntries = () => {
    return Array.from(array.entries());
  };

  const addElement = () => {
    setArray([...array, "new item"]);
  };
  return (
    <>
      <h1>Using the `entries()` Method in React</h1>

      <h2>Original Array:</h2>
      <ul>
        {array.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>

      <h2>Key/Value Pairs:</h2>
      <ul>
        {getEntries().map(([index, value]) => (
          <li key={index}>
            Index: {index}, Value: {JSON.stringify(value)}
          </li>
        ))}
      </ul>

      <button onClick={addElement}>Add New Element</button>
    </>
  );
};

export default EntriesComp;
