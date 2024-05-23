import React, { useState } from 'react'

export default function PropsCustom() {
  return (
    <div>
      <Final/>
    </div>
  )
}



// basic props 
// function Greeting(props){
//     return(
//         <>
//          <h3>{props.name}</h3>
//         </>
//     )
// }

// function Final(){
//     return(
//         <>
//             <Greeting name="nitesh"/>
//         </>
//     )
// }

// passing multipe props
// function Greeting(props){
//     return(
//         <>
//           <h2>Name: {props.name}</h2>
//             <p>Age: {props.age}</p>
//             <p>Email: {props.email}</p>
//         </>
//     )
// }

// function Final(){
//     return(
//         <>
//          <Greeting name="nitesh" age={34} email="nitesh.khatri88@gmail.com"/>
//         </>
//     )
// }

// child props 
// function Card(props){
//     return(
//         <>
//             <div className="card">
//                 <h3>{props.title}</h3>
//                 <div>{props.children}</div>
//             </div>
//         </>
//     )
// }

// function Final(){
//     return(
//         <>
//          <Card title="nitesh khatri"><p>This is the content of my card.</p></Card>
//         </>
//     )
// }

// function props (callbacks)
// function Button(props){
//     return(
//         <>
//          <button onClick={props.onClick}>Click me</button>
//         </>
//     )
// }

// function Final(){

//     const handleClick = () => {
//         console.log('Button clicked')
//     }
//     return(
//         <>
//         <Button onClick={handleClick}/>
//         </>
//     )
// }

// passing and displaying props
// const Greeting = (props) => {
//     return(
//         <h1>Hello, {props.name}</h1>
//     )
// }

// function Final(){
//     return(
//         <>
//         <Greeting name="nitesh"/>
//         </>
//     )
// }

// using props in component logic
// function Counter(props){
//     const {initialCount} = props;
//     const [count,setCount] = useState(initialCount);

//     const increment  =() => {
//         setCount(c => c + 1)
//     }
//     const decrement  =() => {
//         setCount(c => c - 1)
//     }
//     const reset  =() => {
//         setCount(0)
//     }
//     return(
//         <>
//          <p>Count: {count}</p>
//          <button onClick={increment}>increment</button>
//          <button onClick={decrement}>decrement</button>
//          <button onClick={reset}>reset</button>
//         </>
//     )
// }

// function Final(){
//     return(
//         <>
//         <Counter initialCount={5}/>
//         </>
//     )
// }

// mapping props to multiple components
// usage
const todosData = [
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build a project' },
    { id: 3, text: 'Deploy to production' },
]

function Final(){
    return(
        <>
        <TodoList todos={todosData}/>
        </>
    )
}

const TodoList = ({todos}) => {
    return(
        <>
         <ul>
            {todos.map((val) => {
                return(
                    <li key={val.id}>{val.text}</li>
                )
            })}
         </ul>
        </>
    )
} 

