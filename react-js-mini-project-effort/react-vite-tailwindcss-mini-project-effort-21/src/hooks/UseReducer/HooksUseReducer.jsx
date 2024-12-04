import React, { useReducer } from 'react';

const HooksUseReducer = () => {
  return (
    <>
      <ReducerExample/>
    </>
  );
}

export default HooksUseReducer;

const reducer = (state,action) => {
    switch(action.type){
        case 'increment': return {count:state.count + 1};
        case 'decrement': return {count:state.count - 1};
        case 'doubled': return {count:state.count * 2};
        default:console.log('test'); return state;
    }
}
const ReducerExample = () => {
    const [state,dispatch] = useReducer(reducer,{count:0});

    return(
        <>
         <p>Count: {state.count}</p>
         <button onClick={() => dispatch({type:'increment'})}>+</button>
         <button onClick={() => dispatch({type:'decrement'})}>-</button>
         <button onClick={() => dispatch({type:'doubled'})}>*</button>
        </>
    )
}
