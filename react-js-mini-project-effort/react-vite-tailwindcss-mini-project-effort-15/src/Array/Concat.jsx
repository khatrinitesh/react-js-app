import React, { useState } from 'react';                                                                                                        
const ConcatComp = () => {
   // Step 2: Define Two Arrays
   const [array1, setArray1] = useState([1, 2, 3]);
   const [array2, setArray2] = useState(["Apple", "Banana", "Cherry"]);
 
   // Step 3: Function to Concatenate Arrays
   const concatenateArrays = () => {
     return array1.concat(array2);
   };
 
   // State to manage concatenated result
   const [concatenatedArray, setConcatenatedArray] = useState(concatenateArrays());
 
   // Step 5: Function to Update and Concatenate Arrays
   const updateAndConcatenate = () => {
     const newArray1 = [...array1, 4, 5]; // Add new elements to array1
     setArray1(newArray1);
     setConcatenatedArray(newArray1.concat(array2)); // Concatenate updated array1 with array2
   };
  return (
    <>
     <h1>Using the `concat()` Method in React</h1>

<h2>Array 1:</h2>
<ul>
  {array1.map((item, index) => (
    <li key={index}>{JSON.stringify(item)}</li>
  ))}
</ul>

<h2>Array 2:</h2>
<ul>
  {array2.map((item, index) => (
    <li key={index}>{JSON.stringify(item)}</li>
  ))}
</ul>

<h2>Concatenated Array:</h2>
<ul>
  {concatenatedArray.map((item, index) => (
    <li key={index}>{JSON.stringify(item)}</li>
  ))}
</ul>

<button onClick={updateAndConcatenate}>Update Array 1 and Concatenate</button>

<h3>Length of Concatenated Array:</h3>
<p>{concatenatedArray.length}</p> 
    </>
  )
}

export default ConcatComp
