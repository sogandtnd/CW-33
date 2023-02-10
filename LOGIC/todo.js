import { createContext, useReducer, useState } from "react";

export const Store = createContext({
  todoState: [],
  dispatch: (command) => {},
});

const Reducer = (todoState, action) => {
  switch (action.type) {
    case "create-todo":
      return [
        ...todoState,
        {
          title: action.payload.title,
          id: action.payload.id,
          completed: action.payload.completed,
        },
      ];
    case "create-todoList":
      return action.payload.users;

    default:
      break;
  }
};

const StoreProvider = ({ children }) => {
  const initialValue = { title: "", id: "", completed: false };

  const [todoState, dispatch] = useReducer(Reducer, []);

  return (
    <Store.Provider value={{ todoState, dispatch }}>{children}</Store.Provider>
  );
};

export default StoreProvider;
