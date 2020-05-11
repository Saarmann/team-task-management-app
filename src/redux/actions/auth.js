import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
} from './types';

const URL_API = 'http://localhost:8080';

//Login user
export const login = (data) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post(`${URL_API}/authenticate`, data, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    console.error(err.message);
  }
};

//Load user
export const loadUser = () => async (dispatch) => {
  try {
    const user = localStorage.username;

    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.jwt}`,
      },
    };

    const res = await axios.get(`${URL_API}/rest/user/${user}`, config);

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    console.error(err.message);
  }
};
