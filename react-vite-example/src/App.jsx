// src/App.js
import React from 'react';
import { observer } from 'mobx-react';

const App = observer(({ counterStore }) => {
  const handleIncrement = () => {
    counterStore.increment();
  };

  const handleDecrement = () => {
    counterStore.decrement();
  };

  return (
    <div>
      <h1>Counter: {counterStore.count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
});

export default App;
