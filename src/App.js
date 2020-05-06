import React from 'react';
import './App.css';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Landing from './components/pages/Landing';
import MasterContainer from './components/containers/MasterContainer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* <MasterContainer /> */}
      <Landing />

      {/* <SignIn /> */}
      {/* <SignUp /> */}
    </BrowserRouter>
  );
}

export default App;
