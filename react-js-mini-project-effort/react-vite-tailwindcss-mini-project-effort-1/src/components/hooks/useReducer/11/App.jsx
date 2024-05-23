import React,{useReducer} from 'react';

const reducer = (state,action) => {
    switch(action.type){
        case 'inc' : return {
            count:state.count  + 1
        };
        case 'dsc': return{
            count:state.count-1 
        };
        case 'reset':return {
            count:0
        };
        default:return state
    }
}

const CustomApp = () => {
    const initialState = {
        count:0
    } 
    const [state,dispatch] = useReducer(reducer,initialState);
  return (
    <div>
      {state.count}
      <button onClick={() => dispatch({type:'inc'})}>+</button>
      <button onClick={() => dispatch({type:'dsc'})}>-</button>
      <button onClick={() => dispatch({type:'reset'})}>reset</button>
    </div>
  )
}

export default CustomApp
