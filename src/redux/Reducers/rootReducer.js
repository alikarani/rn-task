import { combineReducers } from 'redux';
import usersReducer from './usersReducer';

const appReducer = combineReducers({
  usersReducer: usersReducer
});
export default appReducer;
