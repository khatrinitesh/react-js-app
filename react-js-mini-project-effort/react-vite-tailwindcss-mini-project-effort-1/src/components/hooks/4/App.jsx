import React, { useState, useMemo } from 'react';

const CustomApp = () => {
    const [inputData,setInputData] = useState(5);
    const handleInputChange = (e) => {
        setInputData(e.target.value)
    }
  return (
    <>
     <h1>useMemo Example</h1>
        <input type="number" value={inputData} onChange={handleInputChange} />
        <ExpensiveCalculationComponent data={inputData} />
    </>
  )
}

export default CustomApp

const ExpensiveCalculationComponent  = ({data}) => {
    // Expensive calculation function
    const calculateExpensiveResult  = (data) => {
        console.log('Performing expensive calculation...');
        // Simulating a time-consuming computation
        for(let i=0;i<1000000;i++){
            return data * 2
        }
    };
    // Use useMemo to memoize the result of the expensive calculation
    const memoizedResult = useMemo(() => calculateExpensiveResult(data),[data]);
    return(
        <>
            <h2>Expensive Calculation Component</h2>
            <p>Data: {data}</p>
            <p>Memoized Result: {memoizedResult}</p>
        </>
    )
}
