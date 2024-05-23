import React, { useReducer } from 'react'

const initialState = { count: 0 };

export default function Reducer() {
  return (
    <div>
      <Counter/>
    </div>
  )
}

function reducer(state,action){
    switch(action.type){
        case 'increment':return {count:state.count+1}
        case 'decrement':return {count:state.count-1}
        default:throw new Error();
    }
}


function Counter(){
    const [state,dispatch] = useReducer(reducer,initialState)
    return(
        <>
        <p>You clicked {state.count} times</p>
         <button onClick={() => dispatch({type:'increment'})}>+</button>
         <button onClick={() => dispatch({type:'decrement'})}>-</button>
        </>
    )
}