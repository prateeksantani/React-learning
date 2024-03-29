import React from "react";
import TodoItem from "./TodoItem";


import './todo.css';

interface ITodoItem {
  id : number;
  title: string;
}

interface TodoProps {
  items : ITodoItem[];
}

const Todo: React.FC<TodoProps> = (props) => {
  return(
      <div className = "todo-container">
        <ol>
        {props.items.map((item) => ( <TodoItem title ={item.title} /> ))}
        </ol>
      </div>
    )
  }

export default Todo;