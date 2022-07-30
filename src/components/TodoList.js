import Todo from "./Todo"
import { BsCalendarCheck } from 'react-icons/bs';
import FilterTodos from "./FilterTodos";
import { useContext, useState } from "react";
import { ColorMood } from "../App";


const TodoList = ({ todos, editHandler, deleteHandler, completeHandler }) => {
    const [filterValue, setFilterValue] = useState("All");

    const mood = useContext(ColorMood);

    const getTodos = () => {
        if (filterValue === 'Completed')
            return todos.filter((todo) => todo.isCompleted === true)
        else if (filterValue === 'UnCompleted')
            return todos.filter((todo) => todo.isCompleted === false)
        else
            return todos
    }

    const onFilterHandler = (filterValue) => {
        if (filterValue === 'Completed')
            setFilterValue("Completed")
        else if (filterValue === 'UnCompleted')
            setFilterValue('UnCompleted')
        else
            setFilterValue("All")
    }


    const renderTodoList = () => {
        if (getTodos().length === 0)
            return <p></p>
        else {
            return (
                getTodos().map((todo) => {
                    return <Todo
                        key={todo.id}
                        todo={todo}
                        editHandler={editHandler}
                        deleteHandler={deleteHandler}
                        completeHandler={completeHandler}
                    />
                })
            )
        }
    }


    const render_todoListNavbar = () => {
        if (todos.length === 0)
            return <div className="todolist_navbar">
                <p className={mood === 'light' ? "todoListTitle_listEmpity" : "todoListTitle_listEmpity_D"}><BsCalendarCheck /> Focus on your day</p>
            </div>
        else
            return <div className="todolist_navbar">
                <h2 className={mood === 'light' ? "todoListTitle_listNotEmpity" : "todoListTitle_listNotEmpity_D"}>{getTodos().length} Task</h2>
                <FilterTodos onFilter={onFilterHandler} />
            </div >
    }

    return (
        <div className="todoList">
            {render_todoListNavbar()}
            {renderTodoList()}
        </div>
    )
}

export default TodoList;