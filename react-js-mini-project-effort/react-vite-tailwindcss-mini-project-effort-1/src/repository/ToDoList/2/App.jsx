import React, { useState } from 'react'

const CustomApp = () => {
    const [todos, setTodos] = useState([]);

    const addToDo = (text) =>{
        setTodos([...todos,{id:Date.now(),text}])
    }

    const handleDel = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4">Todo List</h1>
        <ToDoForm onAdd={addToDo}/>
        <ToDoList onDel={handleDel} todos={todos}/>
      </div>
    </>
  )
}

export default CustomApp

// for form 
const ToDoForm = ({onAdd}) => {
    const [text,setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim() !== ''){
            onAdd(text);
            setText('');
        }
    }
    return(
        <>
        <form onSubmit={handleSubmit} className='mt-4'>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Add a new todo' className='p-2 border border-gray-300 rounded' />
            <button type="submit" className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add Todo
            </button>
        </form>
        </>
    )
}

// ul for list
const ToDoList = ({todos,onDel}) => {
    return(
        <>
         <ul className='divide-by divide-gray-300'>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onDel={onDel}/>
            ))}
         </ul>
        </>
    )
}

// li for item
const TodoItem = ({todo,onDel}) => {
    return(
        <li className='flex items-center justify-between p-4'>
            <span>{todo.text}</span>
            <button onClick={() => onDel(todo.id)} className='ml-2 bg-red-500 text-white px-2 rounded hover:bg-red-600'>Delete</button>
        </li>
    )
}

