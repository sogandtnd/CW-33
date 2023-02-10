import "./App.css";
import Input from "../src/UI/component/input";
import Filter from "../src/UI/component/Filter";
import StoreProvider from "./LOGIC/todo";
import TodoList from "./UI/component/Todolist";

function App() {
  return (
    <StoreProvider>
      <div className="bg-[#1e9ee0] w-full h-[100vh] flex flex-col  items-center">
        <h1 className="text-white mt-3 text-2xl font-bold">Tasks</h1>
        <div className="flex gap-3 mt-5 ">
          <Input />
          <Filter />
        </div>
        <div className="mt-10">
          <TodoList />
        </div>
      </div>
    </StoreProvider>
  );
}

export default App;
