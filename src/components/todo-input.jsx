import { useContext } from "react";
import { TodoContext } from "../context/todo-provider";

function TodoInput() {
    const {
        todos,
        setTodos,
        todoInput,
        setTodoInput,
        isEdit,
        todoEdit,
        setIsEdit,
      } = useContext(TodoContext);

      const handleClick = (e) => {
        e.preventDefault();
    
        if (isEdit) {
          let cloneTodo = [...todos];
          let index = cloneTodo.findIndex((item) => item.id == todoEdit.id);
          cloneTodo[index].value = todoInput;
    
          setTodos(cloneTodo);
          setIsEdit(false);
        } else {
          let newTodo = {
            id: new Date(),
            value: todoInput,
            status: false,
          };
    
          setTodos([...todos, newTodo]);
        }
    
        setTodoInput("");
      };

    return (
      <>
        <form>
            <input
            type="text"
            value={todoInput}
            placeholder="What to do"
            onChange={(e) => setTodoInput(e.target.value)}
            className="outline outline-1 rounded-md p-1 m-3 focus:outline-purple-500"
            />
            <button onClick={handleClick}
            className="bg-purple-500 p-1 px-2 rounded-md hover:bg-purple-600"
            >{isEdit ? "Edit" : "Add"}</button>
        </form>
      </>
    )
  }
  
  export default TodoInput
  