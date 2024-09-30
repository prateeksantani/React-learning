import './App.css';
import Dogpic from './components/Dogpic';
import {useState} from 'react';

function App() {

const [dogImages, setDogImages] = useState([]);


const getDogImage = async () => {

    const response = await Dogpic();

       setDogImages([...dogImages, response]);         //Here, you're creating a new array that includes all the previously fetched dog images
                                                           //(...dogImages) and adding the new image (response) to the end of this array.
}

  return (
    <div className="App">
    <h2>Dog Api</h2>
    <button id='getDogImg' onClick={getDogImage}>Get Me a Dog Pic!</button>
    <div id='imgContainer'>
    {dogImages.map((dog,index) => (
      <img key={index} src={dog} alt="Dog" />
    ))}
    </div>
    </div>
  );
}

export default App;
