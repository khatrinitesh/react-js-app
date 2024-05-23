import React,{useReducer} from 'react';

// Reducer function
const reducer = (state,action) => {
    switch(action.type){
        case 'INC' : return {count:state.count+1};
        case 'DEC' : return {count:state.count+1};
        case 'RESET' : return {count:0};
        default:return state;
    }
}

// Component using useReducer
const CustomApp = () => {
    // initial state
    const initialState= {
        count:0
    }
    // useReducer returns the current state and a dispatch function
    const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({type:'INC'})}>+</button>
      <button onClick={() => dispatch({type:'DEC'})}>-</button>
      <button onClick={() => dispatch({type:'RESET'})}>Reset</button>
    </div>
  )
}

export default CustomApp
