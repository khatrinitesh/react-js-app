import React, { useState } from 'react';

const TodoListApp = () => {
  return (
    <>
     <TodoList/> 
    </>
  )
}

export default TodoListApp

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
  
    const addTask = () => {
      if (newTask.trim() !== '') {
        setTasks([
            ...tasks, 
            { 
                id: Date.now(), 
                text: newTask, 
                completed: false }]);
                setNewTask('');
            }
    };
  
    const deleteTask = (taskId) => {
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);
    };
  
    const toggleTaskCompletion = (taskId) => {
      const updatedTasks = tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );
      setTasks(updatedTasks);
    };
  
    return (
      <div>
        <h2>Todo List</h2>
        <div>
          <input
            type="text"
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={addTask}>Add Task</button>
        </div>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
              />
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
              </span>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

