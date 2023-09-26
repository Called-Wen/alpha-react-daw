import React, { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

const initialState = {
  todos: [
    {
      id: 1,
      text: "Terra Sonambula",
      category: "Trabalho",
      quant: 20,
      isCompleted: false,
    },
    { id: 2, text: "Matar Sonhos", category: "Escola", quant: 19, isCompleted: false },
    { id: 3, text: "O Diagnostico", category: "Casa", quant: 0, isCompleted: true },
  ],
  search: "",
  filter: "All",
  sort: "Asc",
};

const appReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        ),
      };
    case "SET_SEARCH":
      return {
        ...state,
        search: action.payload,
      };
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    case "SET_SORT":
      return {
        ...state,
        sort: action.payload,
      };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext deve ser usado dentro de um AppProvider");
  }
  return context;
};
