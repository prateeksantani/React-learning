import React , {useEffect , useState} from 'react';
import './App.css';
import axios from 'axios';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId : number;
}

function App() {

 const [data , setData] = useState<Todo | null>(null);

    useEffect(() => {
      // fetch('https://jsonplaceholder.typicode.com/todos/2n')
      // .then(response => response.json())
      // .then(json => setData(json))

      axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => {
        setData(response.data);
      })

    },[])
  return (
    <div className="App">
    {data ? (
        <div>
          <h1>Todo Item</h1>
          <p><strong>ID:</strong> {data.id}</p>
          <p><strong>Title:</strong> {data.title}</p>
           <p><strong>userId:</strong> {data.userId}</p>
          <p><strong>Completed:</strong> {data.completed ? 'Yes' : 'No'}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
