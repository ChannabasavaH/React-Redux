import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';
import TodoAdd from './TodoAdd';

const Todo = () => {
    const todos = useSelector((state) => state.todo.todos);
    console.log(todos)
    const dispatch = useDispatch();

    return (
        <div>
            <TodoAdd />
            <div>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.task}
                        <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                    </li>
                ))}
            </div>
        </div>
    );
}

export default Todo;
