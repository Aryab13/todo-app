import { useContext } from "react";
import { TodoContext } from "../context/todo-provider";

function TodoList (){
    const { todos, setTodos, setTodoInput, setIsEdit, setTodoEdit } =
    useContext(TodoContext);

    const handleStatus = (index) => {
        let cloneTodos = [...todos];
        cloneTodos[index].status = !cloneTodos[index].status;
    
        setTodos([...cloneTodos]);
      };
    
      const handleEdit = (todo) => {
        setTodoEdit(todo);
        setTodoInput(todo.value);
        setIsEdit(true);
      };

      const handleDelete = (todo) => {
        const updatedTodos = todos.filter((item) => item.id !== todo.id);
        setTodos(updatedTodos);

      }

    return (
        <>
        <div>
            {todos.map((todo, index) => (
            <div key={todo.id} className="flex justify-between w-80 outline outline-1 outline-slate-400 px-2 mb-5 py-2">
                <div>
                <input type="checkbox" onClick={() => handleStatus(index)}
                className={ `h-5 w-5 ${todo.status ? "line-through" : ""}  `}/>

                <span className={ `ml-2 ${todo.status ? "line-through" : ""}  `}>
                    {todo.value}
                </span>
                </div>
                <div>
                    <button onClick={()=>handleEdit(todo)} className={todo.status ? "hidden" : ""}>✏️</button>
                    <button onClick={()=>handleDelete(todo)} className={todo.status ? "hidden" : ""}>🗑️</button>
                </div>
            </div>
            ))}
        </div>
        </>
    )
}

export default TodoList