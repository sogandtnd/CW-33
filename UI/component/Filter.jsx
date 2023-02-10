import { IoMdArrowDropdown } from "react-icons/io";

const Filter = () => {
  return (
    <div className="flex relative">
      <input type="select" className="py-2 w-[8rem]" />
      <div>
        <IoMdArrowDropdown
          style={{
            backgroundColor: "orange",
            border: "none",
            color: "white",
            position: "absolute",

            width: "2rem",
            height: "2.5rem",
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
};
export default Filter;
