import React from 'react';

import { useState , useEffect } from 'react';

import './style.css'



const Counter = (props) => {

  const [counter , setCounter] = useState(0);

  useEffect(() => {
     console.log("Counter Mounted");
  },[])

  useEffect(() => {
     console.log("User updated count");
  },[counter]);

  const handleIncreament = () => {
    setCounter(counter + 1);
  }

  const handleDecreament = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
  }

  return(
    <div className="container">
    <button onClick={handleIncreament} className="btn-Inc">Increament</button>
    <h1>{counter}</h1>
    <button onClick={handleDecreament} className="btn-Dec">Decreament</button>
    </div>
  )

}


export default Counter;


