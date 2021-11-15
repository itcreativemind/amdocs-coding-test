import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggle, deleteItem } from "../store/todoActions";
import Filters from "./filters";
import SelectTodoItems from "./selectTodoItems";

var array = require("lodash/array");

const TodoList = ({ todos }) => {
  const dispatch = useDispatch(),
    [filterValue, setFilterValue] = useState("all"),
    [selectedTodoItems, addSelectedTodoItem] = useState([]);

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  const toggleTodoItem = (e) => {
    dispatch(toggle(e.target.dataset.id));
  };

  const deleteTodoItem = (e) => {
    dispatch(deleteItem(e.target.dataset.id));
  };

  const selectTodoItem = (e) => {
    if (e.target.checked) {
      addSelectedTodoItem([
        ...selectedTodoItems,
        parseInt(e.target.dataset.id),
      ]);
    } else {
      addSelectedTodoItem(
        array.remove(selectedTodoItems, (n) => {
          return n !== parseInt(e.target.dataset.id);
        })
      );
    }
  };

  const resetSelectedTodoItems = (todos) => {
    addSelectedTodoItem(todos);
  };

  return (
    <div>
      <h2>TODO Items</h2>
      <Filters
        filterValue={filterValue}
        handleFilterChange={handleFilterChange}
      />
      <SelectTodoItems
        selectedItems={selectedTodoItems}
        resetSelectedTodoItems={resetSelectedTodoItems}
        todos={todos}
      />
      <ul className="todos">
        {todos.map((todo) => {
          if (filterValue == todo.completed || filterValue === "all") {
            return (
              <li
                className={
                  todo.completed
                    ? "todos__item todos__item_checked"
                    : "todos__item"
                }
                key={todo.id}
              >
                <input
                  type="checkbox"
                  className="todos__checkbox"
                  data-element="selectTodo"
                  data-id={todo.id}
                  checked={selectedTodoItems.includes(todo.id)}
                  onChange={selectTodoItem}
                />
                <input
                  type="checkbox"
                  className="todos__checkbox"
                  data-element="toggleTodo"
                  data-id={todo.id}
                  checked={todo.completed ? "checked" : ""}
                  onChange={toggleTodoItem}
                />
                {todo.title}
                <button
                  className="todos__delete-btn"
                  data-id={todo.id}
                  onClick={deleteTodoItem}
                >
                  X
                </button>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default TodoList;
