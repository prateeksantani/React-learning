import React from 'react';
import Pet from './Pet';
import useBreedList from './useBreedList';
import {useState , useEffect} from 'react';

const Animals = ["bird","reptile","chicken","cat","dog","rabbit"]



const SearchParams = () => {

const [location , setLocation] = useState("");
const[animal,setAnimal] = useState("");
const [breed , setBreed] = useState("");
const  [pets, setPets] = useState([]);
const [breeds] = useBreedList(animal);

  useEffect(() => {
    requentPets();
  },[])


  async function requentPets(){
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`,
    );
    const json = await res.json();

    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requentPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            value={location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
          >
            <option />
            {Animals.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            disabled={breeds.length === 0}
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>

        <button type="button">Submit</button>
      </form>
      <div className="search">
        {pets.map((pet,index) => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            key={pet.id}
            images={pet.images} // Added this line
            location={pet.location} // Added this line
            id={pet.id} // Added this line
          />
        ))}
      </div>
    </div>
  );
}

export default SearchParams
