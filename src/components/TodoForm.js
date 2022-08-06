import { useContext, useEffect, useRef, useState } from 'react';
import { BsPlusSquareFill } from 'react-icons/bs'
import Swal from 'sweetalert2';
import { ColorMood } from '../App';
// import styles from '../TodoForm/TodoForm.module.css'

const TodoForm = (props) => {
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef();

    const mood = useContext(ColorMood);

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const addBtnHandler = (e) => {
        e.preventDefault();
        if (!inputValue) {
            alert("input cant be empity!")
            Swal.fire({
                position: 'top',
                title: 'Task cant be empity',
                showConfirmButton: false,
                icon: 'warning',
                backdrop: false,
                width: '190px',
                timer: 1500,
                customClass: "alert",
            })
            return;
        }
        props.setTodo(inputValue);
        setInputValue('');
    }


    return (
        <div className='TodoForm'>
            <form className='form'>
                <input className={mood === 'light' ? "input" : "input_D"} type="text" value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    ref={inputRef}
                    placeholder="Add Your Task ..."
                ></input>
                <button className={mood === 'light' ? "addTodo_Btn" : "addTodo_Btn_D"} onClick={addBtnHandler}> <BsPlusSquareFill /></button>
            </form>
        </div>
    );
}

export default TodoForm;