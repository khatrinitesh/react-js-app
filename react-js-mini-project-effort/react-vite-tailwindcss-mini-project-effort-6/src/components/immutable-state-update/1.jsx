import React, { useState } from 'react'

const Immutable = () => {
    const [todos,setTodos] = useState(['asdad','adsdad'])
    const [newTodo, setNewTodo] = useState('');

    const handleAdd  =() => {
        if(newTodo.trim() !== ''){
            setTodos([...todos,newTodo]);
            setNewTodo(''); // clear the input field after adding the new todo
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
        <input type="text" className='border' value={newTodo} onChange={handleChange} />
        <button onClick={handleAdd}>add todo</button>
    </div>
  )
}

export default Immutable
