import {
  GET_CUSTOMERS,
  CREATE_CUSTOMER,
  UPDATE_CUSTOMER,
} from './../actions/types';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CUSTOMERS:
      return {
        ...state,
        customers: action.data,
      };

    default:
      return state;
  }
}
