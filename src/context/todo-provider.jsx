import { createContext, useState } from "react";

export const TodoContext = createContext();

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([
    { id: 1, value: "Buy Milk", status: false },
    { id: 2, value: "Buy Egg", status: true },
    { id: 3, value: "Buy T-Shirt", status: false },
  ]);
  const [todoInput, setTodoInput] = useState("");
  const [todoEdit, setTodoEdit] = useState({});

  const [isEdit, setIsEdit] = useState("");

  return (
    <TodoContext.Provider value={{ todos, setTodos, todoInput, setTodoInput, isEdit, setIsEdit, todoEdit, setTodoEdit }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;