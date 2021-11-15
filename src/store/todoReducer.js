var array = require("lodash/array");

const uniqueId = {
  currentId: 0,
  get() {
    this.currentId += 1;
    return this.currentId;
  },
};

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  const { todos } = state;

  switch (action.type) {
    case "SET_INITIAL_TODOS":
      return {
        todos: [...action.todolist],
      };
    case "ADD":
      todos.push({
        id: uniqueId.get(),
        title: action.title,
        completed: false,
      });
      return {
        todos: [...todos],
      };
    case "DELETE":
      todos.forEach((todo, index, array) => {
        if (todo.id === parseInt(action.id)) {
          array.splice(index, 1);
        }
      });
      return {
        todos: [...todos],
      };
    case "TOGGLE":
      for (let todo of todos) {
        if (todo.id === parseInt(action.id)) {
          todo.completed = !todo.completed;
          break;
        }
      }
      return {
        todos: [...todos],
      };
    case "DELETE_ALL":
      return {
        todos: [],
      };
    case "DELETE_SELECTED":
      const filterdTodos = array.remove(todos, (n) => {
        return !action.selectedTodolist.includes(n.id);
      });
      return {
        todos: filterdTodos,
      };
    default:
      return state;
  }
};

export default todoReducer;
