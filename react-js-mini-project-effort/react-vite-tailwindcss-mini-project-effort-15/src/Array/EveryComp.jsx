import React, { useState } from "react";

const EveryComp = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [newNumber, setNewNumber] = useState("");

  const areAllPositive = () => {
    return numbers.every((num) => num > 0);
  };

  const addNumber = () => {
    const numToAdd = parseFloat(numbers);
    if (!isNaN(numToAdd)) {
      setNumbers([...numbers, numToAdd]);
      setNewNumber(""); // Clear input field
    }
  };
  return (
    <>
      <h1>Using the `every()` Method in React</h1>

      <h2>Numbers Array:</h2>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>

      <h3>Are all numbers positive? {areAllPositive() ? "Yes" : "No"}</h3>

      <input
        type="number"
        value={newNumber}
        onChange={(e) => setNewNumber(e.target.value)}
        placeholder="Enter a new number"
      />
      <button onClick={addNumber}>Add Number</button>
    </>
  );
};

export default EveryComp;
