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
        let cloneTodos = [...todos];
        cloneTodos.filter((item) => item.id != todos.id);

      }

    return (
        <>
        <div>
            {todos.map((todo, index) => (
            <div key={todo.id}>
                <span onClick={()=> handleStatus(index)}>
                    {todo.value}
                </span>
                <div>
                    <button onClick={()=>handleEdit(todo)}>✏️</button>
                    <button></button>
                </div>
            </div>
            ))}
        </div>
        </>
    )
}

export default TodoList