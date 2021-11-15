export const setInitialTodos = (todolist) => ({
  type: "SET_INITIAL_TODOS",
  todolist,
});

export const toggle = (id) => ({
  type: "TOGGLE",
  id,
});

export const add = (title) => ({
  type: "ADD",
  title,
});

export const deleteItem = (id) => ({
  type: "DELETE",
  id,
});

export const deleteAll = () => ({
  type: "DELETE_ALL",
});

export const deleteSelected = (selectedTodolist) => ({
  type: "DELETE_SELECTED",
  selectedTodolist,
});
