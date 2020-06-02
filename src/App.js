import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/containers/MasterContainer';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
