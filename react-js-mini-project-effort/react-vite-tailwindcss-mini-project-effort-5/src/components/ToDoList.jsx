import React, { useState } from 'react'

const ToDoList = () => {
    const [todos,setTodos] = useState([
        { id: 1, text: 'Learn React' },
        { id: 2, text: 'Build a todo app' },
        { id: 3, text: 'Master JavaScript' },
    ])
    const [newTodo,setNewTodo] = useState('');
    const [editTodoId,setEditTodoId] = useState(null);
    const [editTodoText,setEditTodoText] = useState('');

    const handleInputChange= (e) => {
        setNewTodo(e.target.value)
    }
    const handleEdit = (id,text) => {
        setEditTodoId(id);
        setEditTodoText(text);
    }

    const handleSaveEdit = (id, newText) => {
        const updatedTodos = todos.map(todo =>
          todo.id === id ? { ...todo, text: newText } : todo
        );
        setTodos(updatedTodos);
        setEditTodoId(null);
        setEditTodoText('');
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(newTodo.trim() === '') return;
        const newId = todos.length ? todos[todos.length - 1].id +1 : 1;
        const newTodoItem = {
            id:newId,
            text:newTodo
        }
        setTodos([...todos,newTodoItem]);
        setNewTodo('');
    }

    const handleDelete = (id) => {
        const updateTodos = todos.filter(todo => todo.id !== id)
        setTodos(updateTodos)
    }
  return (
    <div>
         <h2>Todo List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Add new todo"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {editTodoId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editTodoText}
                  onChange={(e) => setEditTodoText(e.target.value)}
                />
                <button onClick={() => handleSaveEdit(todo.id, editTodoText)}>Save</button>
              </>
            ) : (
              <>
                {todo.text}
                <button onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ToDoList