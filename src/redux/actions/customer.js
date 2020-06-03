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
  };
};

export const updateCustomer = (customerData) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.jwt}`,
    },
  };

  try {
    const res = await axios.post(`${URL_API}/rest/customer/edit`, customerData, config);

    dispatch({
      type: UPDATE_CUSTOMER,
      payload: res.data,
    });

  } catch (err) {
    console.error();
  };
};

export const createCustomer = (customerData) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.jwt}`,
    },
  };

  try {
    const res = await axios.post(`${URL_API}/rest/customer/save`, customerData, config);

    dispatch({
      type: CREATE_CUSTOMER,
      payload: res.data,
    });

  } catch (err) {
    console.error();
  };
};
