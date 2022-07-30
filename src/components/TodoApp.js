import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import NavBar from "./NavBar";
import { useContext, useState } from "react";
import UpdateForm from "./UpdateForm";
import Swal from 'sweetalert2';
import { ColorMood, ColorMoodSpatcher } from "../App";
import '../App.css';

const TodoApp = () => {
    const [todos, setTodos] = useState("");
    const [edit, setEdit] = useState({ id: null, text: '', isCompleted: false });

    const mood = useContext(ColorMood)

    // Handlers
    const setTodoHandler = (inputValue) => {
        setTodos([...todos, { id: Math.floor(Math.random() * 1000), text: inputValue, isCompleted: false }]);
        // Swal.fire({
        //     position: 'top',
        //     title: 'New task aded',
        //     showConfirmButton: false,
        //     backdrop: false,
        //     width: '190px',
        //     icon: 'success',
        //     timer: 1500,
        //     // customClass: "alert",
        // })
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500,
            customClass: "alert",
        })

    }

    const editTodoHandler = (todo) => {
        setEdit(todo);
    }

    const updateTodos = (todo) => {
        setEdit({ id: null, text: '', isCompleted: false });
        Swal.fire({
            position: 'top',
            title: 'Task updated',
            showConfirmButton: false,
            icon: 'success',
            backdrop: false,
            width: '190px',
            timer: 1500,
            customClass: "alert",
        })
    }

    const deleteTodoHandler = (id) => {
        const new_todos = todos.filter((todo) => todo.id !== id)
        setTodos(new_todos);

        // Swal.fire({
        //     position: 'top',
        //     title: 'Task deleted',
        //     showConfirmButton: false,
        //     icon: 'success',
        //     backdrop: false,
        //     width: '190px',
        //     timer: 1500,
        //     customClass: "alert",
        // })
        Swal.fire({
            position: 'top',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500,
            customClass: "alert",
        })
    }

    const compelteTodoHandler = (id) => {
        const index = todos.findIndex((todo) => todo.id === id);
        const Selectedtodo = { ...todos[index] };
        Selectedtodo.isCompleted = (!Selectedtodo.isCompleted);
        const updatedTodos = [...todos];
        updatedTodos[index] = Selectedtodo;
        setTodos(updatedTodos);

        if (Selectedtodo.isCompleted) {
            Swal.fire({
                position: 'top',
                title: 'Task completed 🎉',
                showConfirmButton: false,
                icon: 'success',
                backdrop: false,
                width: '190px',
                timer: 1500,
                customClass: "alert",
            })
        }

    }




    return (
        <div className={mood === 'light' ? "TodoApp" : "TodoApp_D"}>
            <NavBar />
            <div className={mood === 'light' ? "container" : "container_D"}>
                {edit.id ? <UpdateForm editThis={edit} onUpdate={updateTodos} /> : <TodoForm setTodo={setTodoHandler} />}
                <TodoList
                    todos={todos}
                    editHandler={editTodoHandler}
                    deleteHandler={deleteTodoHandler}
                    completeHandler={compelteTodoHandler}
                />
            </div>
        </div>
    );
}

export default TodoApp;