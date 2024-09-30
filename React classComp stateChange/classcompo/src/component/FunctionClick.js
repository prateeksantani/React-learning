import React from 'react'

function FunctionClick() {

  function printCon(){
    console.log("wow");
    

    const userValue = prompt("Enter your value :");

    alert("You have Entered :" + userValue);
  }
  return (
    <div>
      <button onClick={printCon}  style={{marginTop : "50px", padding : "10px 30px ", border : "1px solid black" , borderRadius : "20px"}}>Click</button>
    </div>      
  )
}

export default FunctionClick


// in class component it is   onClick={this.clickHandler}
