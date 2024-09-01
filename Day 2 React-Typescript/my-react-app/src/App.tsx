import React from "react";
import Todo from './components/Todo';
import Counter from "./components/Counter";

const App: React.FC  = () => {
  return (
    <div>
       <Counter/>
          <h1>Hello From App</h1>
          <Todo/>
          <Todo/>
          <Todo/>
    </div>
  )
};

export default App;
