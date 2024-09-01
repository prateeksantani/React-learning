import React from "react";

const Mobile = (props) => {
  console.log(props);
  return (
    <>
    <h1> {props.name} phone number is {props.Mobile}</h1>
    {props.children}
    </> //for adding mutiplle statement enclosed in this 
  )
}

export default Mobile;