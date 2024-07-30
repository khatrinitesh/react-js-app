import React, { useState } from 'react'

const Immutable = () => {
    const [todos,setTodos] = useState(['a','b'])
    const [newTodo,setNewTodo] = useState('');

    const handleAdd = () => {
        if(newTodo.trim !== ''){
            setTodos([...todos,newTodo])
            setNewTodo('');
        }
    }

    const handleChange = (e) => {
        setNewTodo(e.target.value)
    }
  return (
    <div>
        <ul>
            {todos.map((val,index) => (
                <li key={index}>{val}</li>
            ))}
        </ul>
        <input className='border outline-none p-1' type="text" value={newTodo} onChange={handleChange} />
        <br />
        <button onClick={handleAdd}>Add todo</button>
    </div>
  )
}

export default Immutable