import react,{ useState } from 'react';
import { useReducer } from 'react';
import { useImmer ,useImmerReducer } from 'use-immer';
import styled from 'styled-components';

export default function About() {
  return (
    <>
      <h3>About</h3>
      {/* <Form/> */}
      {/* <BirthdayCele/> */}
      {/* <Counter/> */}
      {/* <ScoreBoard/> */}
    </>
  )
}



// function ScoreBoard(){
//   const [player,setPlayer] = useState({
//     firstName:'virat',
//     lastName:'kholi',
//     score:10
//   })
//   function btnScore(){
//     setPlayer({
//       ...player,
//       score:player.score + 1
//     })
//   }
//   function handleChange(e){
//     setPlayer({
//       ...player,
//       [e.target.name]:e.target.value
//     })
//   }
//   return(
//     <>
//     <p>{player.firstName} - {player.lastName} - {player.score}</p>
//     <hr/>
//     <p>Score: {player.score} <button onClick={btnScore}>+1</button></p>
//     <input type='text' value={player.firstName} name="firstName" onChange={handleChange}/>
//     <br />
//     <input type='text' value={player.lastName} name="lastName" onChange={handleChange}/>
//     <br />
//     </>
//   )
// }

// function Form(){
//   const [person, setPerson] = useState({
//     firstName: 'Barbara',
//     lastName: 'Hepworth',
//     email: 'bhepworth@sculpture.com'
//   });

//   function handleChange(e) {
//     setPerson({
//       ...person,
//       [e.target.name]:e.target.value
//     })
//   }

//   // function handleFirstNameChange(e) {
//   //   setPerson({
//   //     ...person,
//   //     firstName:e.target.value
//   //   })
//   // }

//   // function handleLastNameChange(e) {
//   //   setPerson({
//   //     ...person,
//   //     lastName:e.target.value
//   //   })
//   // }

//   // function handleEmailChange(e) {
//   //   setPerson({
//   //     ...person,
//   //     email:e.target.value
//   //   })
//   // }

//   const Title = styled.h1`
//     font-size: 1.5em;
//     text-align: center;
//     color: #BF4F74;
//   `;

//   // Create a Wrapper component that'll render a <section> tag with some styles
// const Wrapper = styled.section`
//   padding: 4em;
//   background: papayawhip;
// `;

//   return(
//     <>
//       <Title>My Component</Title>
//       <Wrapper>Wrapper</Wrapper>
//       <label>
//         First name:
//         <input
//         name="firstName"
//           value={person.firstName}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Last name:
//         <input
//         name="lastName"
//           value={person.lastName}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Email:
//         <input
//         name="email"
//           value={person.email}
//           onChange={handleChange}
//         />
//       </label>
//       <p>
//         {person.firstName}{' '}
//         {person.lastName}{' '}
//         ({person.email})
//       </p>
//     </>
//   )
// }

// const initialState = {
//   count:0
// }

// function reducer(draft,action){
//   switch(action.type){
//     case 'increment' : return void draft.count++
//     case 'decrement' : return void draft.count--
//     case 'reset' : return initialState
//   }
// }

// function Counter(){
//   const [state,dispatch] = useImmerReducer(reducer,initialState)
//   return(
//     <>
//     Count: {state.count}
//     <button onClick={() => dispatch({type:'increment'})}>+</button>
//     <button onClick={() => dispatch({type:'decrement'})}>-</button>
//     <button onClick={() => dispatch({type:'reset'})}>reset</button>
//     </>
//   )
// }


// const initialState = {
//   count:0
// }

// function reducer(draft,action){
//   switch(action.type){
//     case "reset" : return initialState;
//     case "increment" : return void draft.count++
//     case "decrement" : return void draft.count--
//   }
// }

// function Counter(){
//   const [state,dispatch] = useImmerReducer(reducer,initialState)
//   return(
//     <>
//     Count {state.count}
//     <button onClick={() => dispatch({type:'reset'})}>reset</button>
//     <button onClick={() => dispatch({type:'increment'})}>+</button>
//     <button onClick={() => dispatch({type:'decrement'})}>-</button>
//     </>
//   )
// }

// function BirthdayCele(){
//   const [age,setAge] = useImmer(20);

//   function birthdDay(e){
//     setAge(age + 1);
//     console.log(`Happy Birthday ${age} sachin! hope you good`)
//   }
//   return(
//     <>
//     <button onClick={birthdDay}>It is my birthday</button>
//     <p>Happy Birthday ${age} sachin! hope you good</p>
//     </>
//   )
// }

// function Form(){

//   const [updatePerson,setUpdatePerson] = useImmer({
//     name:'Michel',
//     age:34
//   });

//   function updateName(name){
//     setUpdatePerson(draft => {
//       draft.name = name;
//     })
//   }

//   function becomeOlder(){
//     setUpdatePerson(prev => {
//       prev.age++
//     })
//   }

//   return(
//     <>
//      <h2>{updatePerson.name} - ({updatePerson.age})</h2>
//      <input type="text" onChange={(e) => updateName(e.target.value)} value={updatePerson.name}/>
//      <button onClick={becomeOlder}>Older</button>
//     </>
//   )
// }



// function Form(){
//   const [person,setPerson] = useState(
//     {
//       name:'Niki de Saint Phalle',
//       artwork:{
//         title:'Blue Nana',
//         city:'hamburg',
//         image:'https://i.imgur.com/Sd1AgUOm.jpg',
//       }
//     }
//   )

//   function handleNameChange(e){
//     setPerson({
//       ...person,
//       name:e.target.value
//     })
//   }

//   function handleTitleChange(e){
//     setPerson({
//       ...person,
//       artwork:{
//         ...person.artwork,
//         title:e.target.value
//       }
//     })
//   }

//   function handleCityChange(e){
//     setPerson({
//       ...person,
//       artwork:{
//         ...person.artwork,
//         city:e.target.value
//       }
//     })
//   }
//   function handleImageChange(e){
//     setPerson({
//       ...person,
//       artwork:{
//         ...person.artwork,
//         image:e.target.value
//       }
//     })
//   }
//   return(
//     <>
//       <label>
//         Name:
//         <input
//           value={person.name}
//           onChange={handleNameChange}
//         />
//       </label>
//       <label>
//         Title:
//         <input
//           value={person.artwork.title}
//           onChange={handleTitleChange}
//         />
//       </label>
//       <label>
//         City:
//         <input
//           value={person.artwork.city}
//           onChange={handleCityChange}
//         />
//       </label>
//       <label>
//         Image:
//         <input
//           value={person.artwork.image}
//           onChange={handleImageChange}
//         />
//       </label>
//       <p>
//         <i>{person.artwork.title}</i>
//         {' by '}
//         {person.name}
//         <br />
//         (located in {person.artwork.city})
//       </p>
//       <img
//         src={person.artwork.image}
//         alt={person.artwork.title}
//       />
//     </>
//   )
// }