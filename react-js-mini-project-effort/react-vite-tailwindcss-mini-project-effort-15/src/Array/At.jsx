import React from "react";

const AtComp = () => {
  // Step 2: Define an Array
  const items = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    { id: 1, name: "Fig" },
  ];

  // State to manage input index and result
  const [index, setIndex] = useState("");
  const [result, setResult] = useState("");

  // Step 3: Function to get item at specified index
  const getItemAtIndex = (idx) => {
    const parsedIndex = parseInt(idx, 10);
    if (
      !isNaN(parsedIndex) &&
      parsedIndex >= -items.length &&
      parsedIndex < items.length
    ) {
      return items.at(parsedIndex);
    } else {
      return "Invalid index";
    }
  };

  // Handler for input change
  const handleInputChange = (e) => {
    const idx = e.target.value;
    setIndex(idx);
    const item = getItemAtIndex(idx);
    setResult(item);
  };
  return (
    <>
      <h1>Using the `at()` Method in React</h1>

      <h2>Items Array:</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>

      <input
        type="number"
        value={index}
        onChange={handleInputChange}
        placeholder="Enter index"
      />
      <h3>Result:</h3>
      <p>{result}</p>
    </>
  );
};

export default AtComp;
