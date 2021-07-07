import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({ todo, onRemovePressed, onSetAsMarkedPressed }) => (
  <div className="todo-item-container">
    <h3 className="todo">{todo.text}</h3>
    <div className="buttons-container">
      {todo.isCompleted ? (
        <button
          onClick={() => onSetAsMarkedPressed(todo.text)}
          className="buttons-completed"
        >
          ✔
        </button>
      ) : (
        <button
          onClick={() => onSetAsMarkedPressed(todo.text)}
          className="buttons-completed"
        >
          .
        </button>
      )}
      <button
        onClick={() => onRemovePressed(todo.text)}
        className="buttons-remove"
      >
        ❌
      </button>
    </div>
  </div>
);

export default TodoListItem;
