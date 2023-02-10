import { FaTrashAlt } from "react-icons/fa";
import { BsCheckLg } from "react-icons/bs";
const TodoItem = () => {
  return (
    <div className="flex justify-between">
      <div className="bg-white w-[18rem] ">
        <p className="px-1 flex align-middle">hello</p>
      </div>
      <div className="flex ">
        <div className="w-">
          <BsCheckLg
            style={{
              backgroundColor: "green",
              border: "none",
              color: "white",
              width: "2.5rem",
              height: "2.5rem",
              cursor: "pointer",
            }}
          />
        </div>

        <div>
          {" "}
          <FaTrashAlt
            style={{
              backgroundColor: "orange",
              border: "none",
              color: "white",
              width: "2.5rem",
              height: "2.5rem",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default TodoItem;
