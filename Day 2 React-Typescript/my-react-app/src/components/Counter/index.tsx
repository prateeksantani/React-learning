import { useState } from 'react';
import React  from "react";
import './style.css';

const Counter : React.FC = (props) => {

  let [counter, fn] = useState(0);

  console.log(counter);

  const handleIncrement = () => {
    fn( counter + 1);
  }

  const handleDecrement = () => {
    if(counter === 0) return;
    fn( counter - 1);
  }


  return (

    <div className = "counter-container">
    <button onClick={handleIncrement} className="inc-btn" type ="button">Increment</button>
      <h1>{counter}</h1>
    <button onClick={handleDecrement} className="dec-btn" type = "button">Decrement</button>
    </div>
  )
};

export default Counter;