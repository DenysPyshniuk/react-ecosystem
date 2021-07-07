import React from "react";
import { connect } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import { removeTodo, setAsMarkedTodo } from "./actions";
import "./TodoList.css";

const TodoList = ({ todos = [], onRemovePressed, onSetAsMarkedPressed }) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo) => (
      <TodoListItem
        todo={todo}
        onRemovePressed={onRemovePressed}
        onSetAsMarkedPressed={onSetAsMarkedPressed}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onSetAsMarkedPressed: (text) => dispatch(setAsMarkedTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
