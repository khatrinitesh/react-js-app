import React, { useState } from 'react'

const CopyWithinComp = () => {
    const [array,setArray] = useState([1,2,3,4,5,6])

    const [targetIndex,setTargetIndex] = useState(0);
    const [startIndex,setStartIndex] = useState(0);

    const copyElements = () => {
        const newArray = [...array];
        newArray.copyWithin(targetIndex,startIndex);
        setArray(newArray);
    }
  return (
    <div>
        <h1>Using the `copyWithin()` Method in React</h1>

<h2>Original Array:</h2>
<ul>
  {array.map((item, index) => (
    <li key={index}>{JSON.stringify(item)}</li>
  ))}
</ul>

<h2>Modify Array with copyWithin:</h2>
<label>
  Target Index:
  <input
    type="number"
    value={targetIndex}
    onChange={(e) => setTargetIndex(parseInt(e.target.value))}
  />
</label>
<br />
<label>
  Start Index:
  <input
    type="number"
    value={startIndex}
    onChange={(e) => setStartIndex(parseInt(e.target.value))}
  />
</label>
<br />
<button onClick={copyElements}>Copy Within</button>

<h2>Modified Array:</h2>
<ul>
  {array.map((item, index) => (
    <li key={index}>{JSON.stringify(item)}</li>
  ))}
</ul>

<h3>Length of Array:</h3>
<p>{array.length}</p>
    </div>
  )
}

export default CopyWithinComp
