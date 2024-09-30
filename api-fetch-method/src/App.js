
import React, {useEffect , useState} from 'react';

function App() {

 const [todos , setTodos] = useState([]); 

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/todos').then((response) => response).then(e => e.json()).then((e) => setTodos(e))
}, []);

  return (
    <div className="App">
     {
      todos.map(todo => <li key={todo.id}>{todo.title}</li>)
     }
    </div>
  );
}

export default App;
