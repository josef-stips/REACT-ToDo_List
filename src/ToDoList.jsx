import { ToDoItem } from "./ToDoItem";

export const ToDoList = ({ todos, toggleToDo, deleteToDo }) => {
    return (
        <ul className="list">
            {todos.length === 0 && "No Todos"}
            {todos.map(todo => {
                return (
                    <ToDoItem {...todo} key={todo.id} toggleToDo={toggleToDo} deleteToDo={deleteToDo}/>
                )
            })}
        </ul>
    )
};