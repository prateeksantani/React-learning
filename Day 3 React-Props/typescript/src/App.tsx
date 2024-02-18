import React from "react";
import Todo from "./components/Todo";
import Counter from "./components/Counter";

const myTodoItems = [
  {
    id: 1,
    title: 'I need to finish my homewaork'
  },
  {
     id : 2,
     title: 'I need to learn react and gatsby and make a project'
  },
  {
    id : 3,
    title : 'I need to watch Solo leveling'
  }

]

const App: React.FC = () => {
  return (
    <div>
      <h1>Hello from App</h1>
      <Todo items={myTodoItems}/>
      <Todo items={myTodoItems}/>
      <Counter />
    </div>
  
  );
}

export default App;