import axios from 'axios';
import { GET_CUSTOMERS, CREATE_CUSTOMER, UPDATE_CUSTOMER } from './types';

const URL_API = 'http://localhost:8080';

export const getCustomers = () => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.jwt}`,
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
