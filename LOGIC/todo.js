import { createContext, useReducer, useState } from "react";

export const Store = createContext({
  todoState: [],
  dispatch: (command) => {},
});

const Reducer = (todoState, action) => {
  switch (action.type) {
    case "create-todo":
      return todoState.map(({ title }) => {
        return (title = action.payload);
      });

    default:
      break;
  }
};

const StoreProvider = ({ children }) => {
  const initialValue = { title: "", id: "", completed: false };

  const [todoState, dispatch] = useReducer(Reducer, [initialValue]);

  return (
    <Store.Provider value={{ todoState, dispatch }}>{children}</Store.Provider>
  );
};

export default StoreProvider;
