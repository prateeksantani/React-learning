import React , {useState} from 'react';



const Mybutton = ({count,onClickI,onClickD}) => {



  return (
    <div>
      <button onClick={onClickI}>Increment</button>
      <button onClick={onClickD}>Decrement</button>
      <h1>Clicked {count} times</h1>
    </div>
  )
}

export default Mybutton
