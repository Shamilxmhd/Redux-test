import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkTodo, deleteTodo } from '../redux/todoSlice'

function List() {

    const dispatch = useDispatch()
    const { todoList, counter } = useSelector((state) => state.todos)
    const [checkBox, setCheckBox] = useState({
        status: "", id: ""
    })
    const handleCheck = (status, id) => {
        setCheckBox({ status: status, id: id })
        dispatch(checkTodo(checkBox))
    }
    const handleDelete = (id) => {
        dispatch(deleteTodo(id))
    }
    useEffect(() => {
        handleCheck()
    }, [checkBox.status])


    return (
        <div>
            <table className='fs-5 mt-5  d-flex justify-content-center ' >
                <thead >
                    {todoList?.map((list) => (
                        <tr className={list.status && 'bg-primary-subtle'}>
                            <th className='ps-4 '><input checked={list.status} onChange={e => handleCheck(e.target.checked, list.id)} type="checkbox" name="" id="" /></th>
                            <th >{list.todo}</th>
                            <th className='py-0 pe-2'><button onClick={() => handleDelete(list.id)} className='btn rounded-3 '>
                                <i class="fa-solid fa-trash-can text-danger"></i></button></th>
                        </tr>
                    ))}
                </thead>
            </table>
            {counter != "" && <h4 className='mt-4 container text-success'>Total Completed Items:{counter}</h4>}
        </div>
    )
}

export default List