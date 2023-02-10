import { useContext, useEffect, useState } from "react";
import TodoItem from "./Todo";
import { BASE_URL } from "../../LOGIC/baseUrl";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Store } from "../../LOGIC/todo";

const TodoList = () => {
  //   const [todos, setTodos] = useState();
  const { todoState, dispatch } = useContext(Store);
  console.log(todoState);
  const getAllTodos = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/todos`);
      const todosList = await res.data;
      //   setTodos(todosList);
      dispatch({ type: "create-todoList", payload: { users: todosList } });
    } catch (error) {}
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  return (
    <>
      {todoState.map((item) => {
        return <TodoItem item={item} />;
      })}
    </>
  );
};
export default TodoList;
