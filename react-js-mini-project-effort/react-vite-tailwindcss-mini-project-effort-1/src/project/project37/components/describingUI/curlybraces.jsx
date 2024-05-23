import React from 'react'

export default function CurlyBraces() {
  return (
    <>
        <ToDoList/>
    </>
  )
}

const today = new Date();
function formatDate(date){
  return new Intl.DateTimeFormat('en-US',{weekday:'long'}).format(date);
}

function ToDoList(){
  return(
    <>
     <h1>To Do List for {formatDate(today)}</h1>
    </>
  )
}

// const person = {
//     name: 'Gregorio Y. Zara',
//     imgUrl:'https://i.imgur.com/7vQD0fPs.jpg',
//     theme: {
//       backgroundColor: 'black',
//       color: 'pink'
//     }
// }

// function ToDoList(){
//     return(
//         <div style={person.theme}>
//             <h1>{person.name}</h1>
//             <img src={person.imgUrl} alt="Gregorio Y. Zara"/>
//             <ul>
//                 <li>Improve the videophone</li>
//                 <li>Prepare aeronautics lectures</li>
//                 <li>Work on the alcohol-fuelled engine</li>
//             </ul>
//         </div>
//     )
// }

