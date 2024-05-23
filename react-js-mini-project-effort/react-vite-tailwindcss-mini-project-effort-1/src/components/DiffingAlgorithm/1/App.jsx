import React,{useState} from 'react'

const CustomApp = () => {
    const [todos, setTodos] = useState(['Buy groceries', 'Read a book', 'Exercise']);

    const addToDo = () => {
        const newTodo = prompt('Enter a new todo:')
        setTodos([...todos,newTodo])
    }

    const delToDo = () => {
        const indexToRemove = prompt('Enter the index of the todo to remove:');
        const updatedToDos = todos.filter((_,index) => index !== parseInt(indexToRemove,10))
        setTodos(updatedToDos);
    }
  return (
    <div>
      <h1>Todo App</h1>
      <TodoList todos={todos}/>
      <button onClick={addToDo}>Add</button>
      <button onClick={delToDo}>Del</button>
    </div>
  )
}

export default CustomApp

const TodoList = ({todos}) => {
    return(
        <>
        {todos.map((val,index) => {
            return(
                <li key={index}>
                    {val}
                </li>
            )
        })}
        </>
    )
}
