import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/todoActions";

const RenderForm = () => {
  const dispatch = useDispatch();
  const inputEle = useRef(null);

  const addTodoItem = (e) => {
    e.preventDefault();
    if (inputEle.current.value) {
      dispatch(add(inputEle.current.value));
      inputEle.current.value = "";
    }
  };

  return (
    <div className="form">
      <form onSubmit={addTodoItem}>
        <input
          ref={inputEle}
          type="text"
          className="form__input"
          data-element="addTodoInput"
          placeholder="Please add a task"
        />
        <button
          type="submit"
          className="form__add-button"
          data-element="addTodoButton"
        >
          {" "}
          +{" "}
        </button>
      </form>
    </div>
  );
};

export default RenderForm;
