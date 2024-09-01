import React from "react";


function Msg (props){
  return (
    <div>
     <h1>Hello{" "}{props.name}</h1>
  <h1>This is my address{"  "}{props.adrs}</h1>
    </div>
 
  )
}

export default Msg;

