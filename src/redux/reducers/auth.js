import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../actions/types';

const initialState = {
  jwt: localStorage.getItem('jwt'),
  isAuthenticated: null,
  user: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem('jwt', action.payload.jwt);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
      };

    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };

    default:
      return state;
  }
}
