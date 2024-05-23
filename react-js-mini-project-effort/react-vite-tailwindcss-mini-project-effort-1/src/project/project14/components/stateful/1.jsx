import React, { useState } from 'react'

export default function StateFul() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
      };
    
      const decrement = () => {
        setCount(count - 1);
      };

      const reset = () => {
        setCount(0);
      };
  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button className="btn btn-primary" onClick={increment}>Increment</button>
      <button className="btn btn-success" onClick={decrement}>Decrement</button>
      <button className="btn btn-info" onClick={reset}>Reset</button>
    </div>
  )
}
