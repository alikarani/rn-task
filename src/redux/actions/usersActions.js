import * as types from '../types';
import { get } from '../../Api/index';
import { endpoints } from '../../Api/configs';

export const getUsers = () => {
  return async (dispatch) => {
    try {
      const response = await get(endpoints.getUsers);
      dispatch({ type: types.GET_USERS, payload: response });
      return Promise.resolve(response);
    } catch (e) {
      return Promise.reject(e);
    }
  };
};

export const getSingleUser = (userId) => {
  return async (dispatch) => {
    try {
      const response = await get(endpoints.getUsers + '/' + userId);
      dispatch({ type: types.GET_SINGLE_USER, payload: response });
      return Promise.resolve(response);
    } catch (e) {
      return Promise.reject(e);
    }
  };
};
export const searchUser = (userName) => {
  return async (dispatch) => {
    try {
      const response = await get(endpoints.searchUser + '?q=' + userName);
      dispatch({ type: types.SEARCH_USERS, payload: response });
      return Promise.resolve(response);
    } catch (e) {
      return Promise.reject(e);
    }
  };
};