import React, {useState} from "react";
import './style.css';

const Counter : React.FC = (props) => {

   //let [value,setvalue] = useState(value);

  const [counter,setCounter] = useState(0);   //hook //should always be on top

  console.log("Re-Render New Value is",counter);


    const handleIncrement = () => {
        setCounter(counter + 1);
    };

     const handleDecrement = () => {
      if(counter === 0) return;
        setCounter(counter - 1);
    };

    return (
        <div className = "counter-conatiner">
          <h1>{counter}
          </h1>
          <button onClick={handleIncrement} style = {{backgroundColor :"wheat"}}>Increment</button>
          <button onClick={handleDecrement} style = {{backgroundColor : "tomato"}}>Decrement</button>
        </div>
    );
};

export default Counter;