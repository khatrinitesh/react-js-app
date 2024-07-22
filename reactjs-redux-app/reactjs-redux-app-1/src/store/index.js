import { createStore } from 'redux';

// Action types
const SET_PAGE = 'SET_PAGE';

// Initial state
const initialState = {
  currentPage: 'splash', // 'splash', 'home', 'about', 'contact'
};

// Reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

// Action creators
export const setPage = (page) => ({
  type: SET_PAGE,
  payload: page,
});

// Create store
const store = createStore(reducer);

export default store;
``