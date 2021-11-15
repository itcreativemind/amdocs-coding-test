import "./App.scss";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { setInitialTodos } from "./store/todoActions";
import Todos from "./components/todos";

const fetchAPI = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return res.json();
};

function App() {
  const { isLoading, error, data } = useQuery("fetchedTodoList", fetchAPI, {
    refetchOnWindowFocus: false,
  });
  const dispatch = useDispatch();

  if (isLoading) return "loading";

  if (error) return "error";

  dispatch(setInitialTodos(data));

  return <Todos />;
}

export default App;
