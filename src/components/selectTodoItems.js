import React, { useState, useEffect } from "react";
import { deleteAll, deleteSelected } from "../store/todoActions";
import { useDispatch } from "react-redux";
import "./selectTodoItems.scss";

const SelectTodoItems = ({ selectedItems, resetSelectedTodoItems, todos }) => {
  const [isSelectAll, setSelectAll] = useState(false),
    dispatch = useDispatch();
  console.log(selectedItems);
  const deleteAllTodos = () => {
    dispatch(deleteAll());
    setSelectAll(!isSelectAll);
    resetSelectedTodoItems([]);
  };

  const deleteSelectedTodos = () => {
    dispatch(deleteSelected(selectedItems));
    resetSelectedTodoItems([]);
  };

  const selectAllTodos = () => {
    const allTodos = todos.map((ele) => {
      return parseInt(ele.id);
    });
    resetSelectedTodoItems(allTodos);
    setSelectAll(!isSelectAll);
  };

  useEffect(() => {
    selectedItems.length !== todos.length && setSelectAll(false);
  });

  return (
    <div className="filters">
      <label className="select_all">
        <input
          type="checkbox"
          checked={isSelectAll}
          onChange={selectAllTodos}
        />
        Select All
      </label>

      {isSelectAll && selectedItems.length === todos.length && (
        <button onClick={deleteAllTodos}>Delete All</button>
      )}
      {selectedItems.length > 0 &&
        !isSelectAll &&
        selectedItems.length !== todos.length && (
          <button onClick={deleteSelectedTodos}>Delete Selected</button>
        )}
    </div>
  );
};

export default SelectTodoItems;
