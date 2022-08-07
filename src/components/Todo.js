import { useContext } from "react";
import { CgRadioChecked, CgTrash } from "react-icons/cg";
import { MdOutlineModeEditOutline } from "react-icons/md"
import { ColorMood } from "../App";


const Todo = ({ todo, editHandler, deleteHandler, completeHandler }) => {
    const mood = useContext(ColorMood);

    return (
        <div className={mood === 'light' ? "todo" : "todo_D"} >
            <span className={todo.isCompleted ? "completedBtn after_completed_btn" : "completedBtn"} onClick={() => completeHandler(todo.id)}> <CgRadioChecked /> </span>

            <div className={todo.isCompleted ? "todo_text todoText_afterCompleted" : "todo_text"}>
                <p className={((mood === 'dark') && (todo.isCompleted)) ? 'todoText_afterCompleted_D' : ""}>{todo.text}</p>
            </div>

            <div className="btns">
                <span className={mood === 'light' ? "editBtn" : "editBtn_D"} onClick={() => editHandler(todo)}>{<MdOutlineModeEditOutline />}</span>
                <span className={mood === 'light' ? "deleteBtn" : "deleteBtn_D"} onClick={() => deleteHandler(todo.id)}>{<CgTrash />}</span>
            </div>
        </div >
    );
}

export default Todo;