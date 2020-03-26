import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import MasterContainer from './components/containers/MasterContainer';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    
    <BrowserRouter>
      <MasterContainer/>
      {/* <SignIn/> */}
    </BrowserRouter>

  );
}

export default App;


