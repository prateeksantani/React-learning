import React from "react";


function Project ({p1,days,status}){
  return (
    <React.Fragment>
    <h2>I have several projects on react one of my major project is {p1.name}</h2>
    <h3>It is a {p1.type} project</h3>
    <h3>It took me {days.learn} days to complete this project {status}</h3>
    </React.Fragment>
  )
}

export default Project;