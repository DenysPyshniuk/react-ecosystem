import { CREATE_TODO, REMOVE_TODO, SET_AS_MARKED_TODO } from "./actions";

export const todos = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { text } = payload;
      const newTodo = {
        text,
        isCompleted: false,
      };
      return state.concat(newTodo);
    }

    case REMOVE_TODO: {
      const { text } = payload;
      return state.filter((todo) => todo.text !== text);
    }

    case SET_AS_MARKED_TODO: {
      const { text } = payload;
      return state.map((todo) => {
        if (todo.text === text && todo.isCompleted === false) {
          return { ...todo, isCompleted: true };
        }
        if (todo.text === text && todo.isCompleted === true) {
          return { ...todo, isCompleted: false };
        }
        return todo;
      });
    }

    default:
      return state;
  }
};
