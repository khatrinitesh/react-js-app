import React, { useState } from 'react';

const App = () => {

    // initial nested array 
    const [nestedArray,setNestedArray] = useState([1, [2, [3, 4, [5, 6]]], 7, 8])

    const handleMapArray = () => {
        const doubledArray = nestedArray.flatMap((innerArray) => innerArray.map((val) => val * 2))
        console.log(doubledArray)
    }
    


    // render the component
  return (
    <div>
      <p>Nested array: {JSON.stringify(nestedArray)}</p>
    <button onClick={handleMapArray}>Click</button>
    </div>
  )
}

export default App
