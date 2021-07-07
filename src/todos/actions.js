export const CREATE_TODO = "CREATE_TODO";
export const createTodo = (text) => ({
  type: CREATE_TODO,
  payload: { text },
});

export const REMOVE_TODO = "REMOVE_TODO";
export const removeTodo = (text) => ({
  type: REMOVE_TODO,
  payload: { text },
});

export const SET_AS_MARKED_TODO = "SET_AS_MARKED_TODO";
export const setAsMarkedTodo = (text) => ({
  type: SET_AS_MARKED_TODO,
  payload: { text },
});
