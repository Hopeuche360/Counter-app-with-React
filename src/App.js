import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((count)=> {
      return count+1;
    })
  }

  function handleDecrement() {
    setCount((count)=> {
      return count-1;
    })
  }

  function handleReset() {
    setCount((count)=> {
      return count = 0;
    })
  }

  return (
    <>
    <div class="container">
      <h1 class="counter">{count}</h1>
      <button class="increment" onClick={handleIncrement}>Increment</button>
      <button class="reset" onClick={handleReset}>Reset</button>
      <button class="decrement" onClick={handleDecrement}>Decrement</button>
    </div>
    </>
  );
}

export default App;
