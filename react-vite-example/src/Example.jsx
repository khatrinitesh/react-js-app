import React from 'react';
import { observer } from 'mobx-react';

const Example = observer(() => {
  const { count, increment, decrement } = useStore(); // useStore is a custom hook to access the MobX store

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
});

export default Example;
