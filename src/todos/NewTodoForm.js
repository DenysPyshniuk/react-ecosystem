import React, { useState } from "react";
import "./newTodoForm.css";

const NewTodoForm = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        placeholder="Type your new task..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="new-todo-button">Add</button>
    </div>
  );
};

export default NewTodoForm;
