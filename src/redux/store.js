import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import auth from './reducers/auth';
import customer from './reducers/customer';

const initialState = {};

const middleWare = [thunk];

const store = createStore(
  combineReducers({
    auth: auth,
    customers: customer,
  }),
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
