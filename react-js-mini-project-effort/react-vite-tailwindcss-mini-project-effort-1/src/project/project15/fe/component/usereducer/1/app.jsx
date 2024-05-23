import React, { useReducer } from 'react';

const initialState = {count:0,isActive:false};

export default function CustomApp() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const incrementCount= ()=>{
        dispatch({type:'increment'})
    }
    const toggleActive = () => {
        dispatch({type:'toggle'})
    }
  return (
    <div>
      <p>Count: {state.count}</p>
      <p>Active: {state.isActive ? 'yes' : 'no'}</p>
      <button onClick={incrementCount}>Increment Count</button>
      <button onClick={toggleActive}>Toggle Active</button>
    </div>
  )
}


function reducer(state,action){
    switch(action.type){
        case 'increment':return {...state,count:state.count+1};
        case 'toggle':return {...state,isActive:!state.isActive};
        default:return state;
    }
}