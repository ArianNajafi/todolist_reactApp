import { useContext, useEffect, useRef, useState } from 'react';
import { MdOutlineModeEditOutline } from 'react-icons/md'
import Swal from 'sweetalert2';
import { ColorMood } from '../App';
// import styles from '../TodoForm/TodoForm.module.css'


const UpdateForm = ({ editThis, onUpdate }) => {
    const [inputValue, setInputValue] = useState(editThis.text);

    const mood = useContext(ColorMood)

    const inputRef = useRef();


    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const onChange = (e) => {
        setInputValue(e.target.value);
        editThis.text = e.target.value;
    }

    const updateHandler = (e) => {
        e.preventDefault();
        if (!inputValue) {

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
        onUpdate(editThis);
    }

    console.log(mood, 8);
    return (
        <div className='TodoForm'>
            <form className='form'>
                <input className={mood === 'light' ? "input" : "input_D"} type="text" value={inputValue}
                    onChange={onChange}
                    ref={inputRef}
                    placeholder="Update Your Task ..."
                ></input>
                {/* <button onClick={updateHandler}>Update</button> */}
                <span className={mood === 'light' ? "addTodo_Btn" : "addTodo_Btn_D"} onClick={updateHandler}> <MdOutlineModeEditOutline /></span>
            </form>
        </div >
    );
}

export default UpdateForm;