import React from "react";
import { Link } from "react-router-dom";

// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.name),
//     React.createElement("h2", {}, props.animal),
//     React.createElement("h2", {}, props.breed),
//   ]);
// };


// const Pet = (props) => {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <h2>{props.animal}</h2>
//       <h2>{props.breed}</h2>
//     </div>
//   );
// };




const Pet = ({name,animal,breed,images,location,id}) => {

  let hero = "https://pets-images.dev-apis.com/pets/none.jpg"
  if(images.length){
    hero = images[0];
  }
  return (
    <Link to={`/details/${id}`} className="pet">
    <div className="image-container">
    <img src={hero} alt={name} />
    </div>
    <div className="info">
    <h1>{name}</h1>
    <h2>{animal} - {breed} {location}</h2>
    </div>
    </Link>
  );
};

export default Pet;
