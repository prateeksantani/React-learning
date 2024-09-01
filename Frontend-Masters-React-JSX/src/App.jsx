import React from 'react';
import ReactDOM from "react-dom";
import Pet from "./Pet";


// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet,{name : "Luna", animal : "Dog", breed : "Doberman"}),
//     React.createElement(Pet, {name :"Judge", animal: "Dog", breed: "Rotweiller" }),
//     React.createElement(Pet ,{name : "Galaxy-Destroyer" , breed : "Pitbull"}),
//   ]);
// };

//rewrite this in jsx


const App = () => {
  return(
    <div>
      <h1>Adopt Me!</h1>``
      <Pet name="Luna" animal="Dog" breed="Doberman"/>
      <Pet name="Judge" animal="Dog" breed="Rotweiller"/>
      <Pet name="Galaxy-Destroyer" breed="Pitbull"/>
    </div>
  )

}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
// root.render(React.createElement(App));
root.render(<App />);
