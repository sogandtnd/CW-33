import { FaTrashAlt } from "react-icons/fa";
import { BsCheckLg } from "react-icons/bs";
const TodoItem = ({ item }) => {
  return (
    <div className="flex justify-between ">
      <div className="bg-white w-[18rem] p-2 ">
        <p className="px-1 flex align-middle">{item.title}</p>
      </div>
      <div className="flex ">
        <div className="w-[2rem] bg-[#008000] 	 flex justify-center items-center">
          <BsCheckLg
            style={{
              backgroundColor: "green",
              border: "none",
              color: "white",
              width: "1rem",
              height: "1rem",
              cursor: "pointer",
            }}
          />
        </div>

        <div className="w-[2rem] flex justify-center items-center bg-[#ffa500]">
          {" "}
          <FaTrashAlt
            style={{
              backgroundColor: "orange",
              border: "none",
              color: "white",
              width: "1rem",
              height: "1rem",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default TodoItem;
