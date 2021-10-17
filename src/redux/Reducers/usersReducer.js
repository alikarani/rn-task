import * as types from '../types';
import initialStates from './initialStates';
const initialState = initialStates.usersReducer;

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case types.GET_SINGLE_USER:
      return {
        ...state,
        user: action.payload,
      };
    case types.SEARCH_USERS:
      return {
        ...state,
        users: action.payload.items,
      };

    default:
      return state;
  }
};

export default usersReducer;
