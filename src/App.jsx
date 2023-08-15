import "./styles.css";
import { useEffect, useState } from "react";
import { NewToDoForm } from "./NewToDoForm";
import { ToDoList } from "./ToDoList";

export default function App() {
    const [todos, setTodos] = useState(() => {
        const localVal = localStorage.getItem('ITEMS');

        if( localVal == null) return [];
        return JSON.parse(localVal);
    });

    useEffect(() => {
        localStorage.setItem('ITEMS', JSON.stringify(todos))
    }), [todos];

    const addToDo = (title) => {
        // initialize todo array item
        setTodos(currToDos => {
            return [
                ...currToDos, 
                {id: crypto.randomUUID(), title, completed: false}
        ]});
    };

    const toggleToDo = (id, completed) => {
        setTodos(currToDos => {
            return currToDos.map(todo => {
                if(todo.id === id) return {...todo, completed};

                return todo;
            });
        });
    };

    const deleteToDo = id => {
        setTodos(currToDos => {
            return currToDos.filter(todo => todo.id !== id);
        });
    };

    return (
    <>
        <NewToDoForm onSubmit={addToDo} />

        <h1 className="header">Todo List</h1>

        <ToDoList todos={todos} toggleToDo={toggleToDo} deleteToDo={deleteToDo} />
    </>
    )
};