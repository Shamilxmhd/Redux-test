import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../redux/todoSlice'



function Todo() {

    const [todos, setTodos] = useState({
        id: JSON.stringify(Date.now()), todo: "", status: ""
    })
    const dispatch = useDispatch()
    const handleAdd = () => {
        if (todos.todo == "") {
            alert("Please Enter a Todo!!")
        }
        else {
            dispatch(addTodo(todos))
            setTodos({
                id: JSON.stringify(Date.now()), todo: "", status: ""
            })
        }

    }

    return (

        <div>
            <div className='container-fluid mt-5'>
                <h1 className='text-center mt-5 mb-5 text-warning'>My TodoList</h1>
                <div className='d-flex justify-content-center '>
                    <input value={todos.todo} onChange={e => setTodos({ ...todos, todo: e.target.value })} className='pb-1 w-25 rounded-3' type="text" placeholder='Add Todo....' />
                    &nbsp;
                    <button style={{ backgroundColor: 'lightblue' }} onClick={handleAdd} className='btn rounded-3 '>Add</button>
                </div>

            </div>
        </div>
    )
}

export default Todo