import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice.js'

const TodoAdd = () => {

    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const handleTodo = (event) => {
        event.preventDefault();
        console.log(task)
        dispatch(addTodo(task));
        setTask('');
    }


    return (
        <div>
            <form onSubmit={handleTodo}>
                <input type="text" placeholder='Enter task' value={task} onChange={(event) => {setTask(event.target.value)}} />
                <button>Add task</button>
            </form>
        </div>
    )
}

export default TodoAdd