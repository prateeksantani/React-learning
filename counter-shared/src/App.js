import './App.css';
import {useState} from 'react';
import Mybutton from './Components/Mybutton';



function App() {

const [counter,setCounter] = useState(0);

      function handleInc(){
      setCounter(counter + 1);
      }

  return (
    <div className="App">
     <h1>Counter</h1>
     <Mybutton onClickI={handleInc} count={counter}/>
     <Mybutton  onClickI={handleInc} count={counter}/>
    </div>
  );
}

export default App;
