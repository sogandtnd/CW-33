import { BsPlusSquare } from "react-icons/bs";
function Input(params) {
  return (
    <div className="flex relative ">
      <input type="text" className="outline-0 py-2 px-3 w-[20rem]" />

      <BsPlusSquare
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
  );
}

export default Input;
