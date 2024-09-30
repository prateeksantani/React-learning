import react from 'react';


import  {useState} from 'react';

const Counter = () => {

  const [counter , setCounter] = useState(0);

  const handleIncreament = () => {
    setCounter(counter + 1);
  }

  const handleDecreament = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
  }
  return(
    <div>
    <button onClick={handleIncreament}>Increment</button>
    <h1>{counter}</h1>
    <button onClick={handleDecreament}>Decrement</button>
    </div>
  )
}

export default Counter;