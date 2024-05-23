import React, { useState, useMemo, useCallback } from 'react';

const CustomApp = () => {

   // State to manage a counter
  const [counter, setCounter] = useState(5);

  // State to manage an input value
  const [inputValue, setInputValue] = useState('');

  // useMemo to memoize a computed value
  const squaredValue = useMemo(() => {
    console.log('Computing squared value...');
    return counter * counter;
  }, [counter]); // Dependency array ensures recalculation when counter changes

  const sum = useMemo(() => {
    return counter + counter 
  },[counter])

  const Subtract = useMemo(() => {
    return counter - counter 
  },[counter])

  // useCallback to memoize a function
  const handleInputChange = useCallback((e) => {
    console.log('Handling input change...');
    setInputValue(e.target.value);
  }, []); // Empty dependency array since the function doesn't depend on external variables


    // rendering the component
  return (
    <div>
      <h2>useMemo and useCallback Example</h2>
      <p>Counter: {counter}</p>
      <p>Sum: {sum}</p>
      <p>Subtract: {Subtract}</p>
      <p>Squared Value: {squaredValue}</p>
      <input type="text" value={inputValue} onChange={handleInputChange} placeholder='type something...' />
    </div>
  )
}

export default CustomApp
