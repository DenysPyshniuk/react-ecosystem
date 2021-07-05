import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({ todo }) => (
  <div className="todo-item-container">
    <h3 className="todo">{todo.text}</h3>
    <div className="buttons-container">
      <button className="buttons-completed">✔</button>
      <button className="buttons-remove">❌</button>
    </div>
  </div>
);

export default TodoListItem;
