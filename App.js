import "./App.css";
import Filter from "./UI/Filter";
import Input from "./UI/input";

function App() {
  return (
    <div className="bg-[#1e9ee0] w-full h-[100vh] flex flex-col  items-center">
      <h1 className="text-white mt-3 text-2xl font-bold">Tasks</h1>
      <div className="flex gap-3 mt-5 ">
        <Input />
        <Filter />
      </div>
      <div></div>
    </div>
  );
}

export default App;
