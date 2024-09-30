import React from 'react'
import { useState } from 'react'

function Text() {

  const [text , setText] = useState("Welcome");




  return (
    <div>
      <h1>{text}</h1>
      <div>
      <button onClick={() => setText("Thank you for subscribing")}>Subscribe</button>
      <button onClick={() => setText("Please Subscribe")}>Unsubscribe</button>
      </div>
      
    </div>
  )
}

export default Text;
