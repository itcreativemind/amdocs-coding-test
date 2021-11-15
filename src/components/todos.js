import RenderForm from "./todoListform";
import TodoList from "./todoList";
import { useSelector } from "react-redux";

const Todos = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="container">
      <h1> TODO List </h1>
      <RenderForm />
      <TodoList todos={todos} />
    </div>
  );
};

export default Todos;
