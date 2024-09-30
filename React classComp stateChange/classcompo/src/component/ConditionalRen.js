import React from 'react'

function ConditionalRen() {


const isLoggedIn =  false;

// let message;

// if(isLoggedIn){
//  message = <div>Welcome Back!</div>
// }else  message = <div>Please login</div>


//   return (
//      <h1>{message}</h1> 
//   )
// }

return(
  <div>
  {isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please login</h1>}
  {!isLoggedIn && <h1>welcome</h1>}
  </div>
)

}

export default ConditionalRen


