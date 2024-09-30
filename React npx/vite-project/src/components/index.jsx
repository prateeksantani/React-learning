import React from 'react';
import { useState } from 'react';

function Counter() {

  const [count , setCount] = useState(0);

  const handleIncreament = () => {
    setCount(count + 1);
  }

    const handleDecreament = () =>{
      if (count === 0) return;
      setCount(count - 1);
    }

  return (
    <div>
    <button onClick={handleIncreament}>Increment</button>
    <h1>{count}</h1>
    <button onClick={handleDecreament}>Decrement</button>
    </div>
  )
}

export default Counter