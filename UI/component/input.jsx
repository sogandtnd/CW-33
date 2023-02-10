import axios from "axios";
import { useContext, useState } from "react";
import { BsPlusSquare } from "react-icons/bs";
import { toast } from "react-toastify";
import { BASE_URL } from "../../LOGIC/baseUrl.js";
import { Store } from "../../LOGIC/todo";

function Input(params) {
  const { todoState, dispatch } = useContext(Store);
  console.log(todoState);

  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const notify = () => toast("Successfully added");

  const handleClick = () => {
    let data = {
      title: inputValue,
      id: Math.floor(Math.random() * 100),
      completed: false,
    };
    axios.post(`${BASE_URL}/todos`, data).then((res) => {
      if (res.status === 201) {
        notify();
        dispatch({ type: "create-todo", payload: data });
      }
    });
  };

  return (
    <>
      <div className="flex relative ">
        <input
          onChange={handleChange}
          type="text"
          className="outline-0 py-2 px-3 w-[20rem]"
        />

        <BsPlusSquare
          onClick={handleClick}
          style={{
            backgroundColor: "orange",
            border: "none",
            color: "white",
            position: "absolute",
            top: "0.5rem",
            right: "0.5rem",
            width: "1.5rem",
            height: "1.5rem",
            cursor: "pointer",
          }}
        />
      </div>
    </>
  );
}

export default Input;
