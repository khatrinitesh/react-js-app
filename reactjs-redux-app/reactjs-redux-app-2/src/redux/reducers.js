import { combineReducers } from '@reduxjs/toolkit';

const counterReducer = (state=0,action) => {
    switch(action.type){
        case 'increment': return state + 1;
        case 'decrement': return state - 1;
        default:return state;
    }
};

const rootReducer  = combineReducers({
    counter:counterReducer,
    // Add more reducers here as needed
});

export default rootReducer;