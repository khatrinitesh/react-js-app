import React from 'react'
import { useState } from 'react'

export default function CustomApp() {
    const [numbers, setNumbers] = useState([1, 2, 3]);

    const addNumber = () => {
        setNumbers([...numbers,4])
    }
  return (
    <div>
      <ul>
        {numbers.map((number) => {
            return(
                <li key={number}>{number}</li>
            )
        })}
      </ul>
      <button onClick={addNumber}>Add Number</button>
    </div>
  )
}
