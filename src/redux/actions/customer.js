import axios from 'axios';
import { GET_CUSTOMERS, CREATE_CUSTOMER, UPDATE_CUSTOMER } from './types';

const URL_API = 'http://localhost:8080';

const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0IiwiZXhwIjoxNTg5MjE2NTEwLCJpYXQiOjE1ODkxODA1MTB9.3H1grifKv7oJMQNccbJNu2td0S_fatJJPqkhCRG6vvc';

export const getCustomers = () => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const res = await axios.get(`${URL_API}/rest/customer/`, config);

    dispatch({
      type: GET_CUSTOMERS,
      payload: res.data,
    });
  } catch (err) {
    console.error();
  }
};
