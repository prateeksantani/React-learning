import React from 'react'
import { useState } from 'react'

const Hover = () => {

 const[count , setCount] = useState(0);

 function incrementCount(){
  setCount(count + 1);
 }


  return (
    <div>
      <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>
    </div>
  )
}

export default Hover
