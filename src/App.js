import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/containers/MasterContainer';
import Dashboard from './components/containers/Dashboard';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main />
        {/* <Dashboard /> */}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
