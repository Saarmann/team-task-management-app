import {
  GET_CUSTOMERS,
  CREATE_CUSTOMER,
  UPDATE_CUSTOMER,
} from './../actions/types';

const initialState = {
  customers: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CUSTOMERS:
      return {
        ...state,
        customers: action.payload,
      };

    case CREATE_CUSTOMER:
      return {
        ...state,
        customers: [action.payload, ...state.customers],
      };

    case UPDATE_CUSTOMER:
      return {
        ...state,
        customers: action.payload,
      };

    default:
      return state;
  }
}
