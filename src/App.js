import React from 'react';
import './App.css';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Landing from './components/pages/Landing';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/containers/Dashboard';
import MasterContainer from './components/containers/MasterContainer';

function App() {
  return (
    <BrowserRouter>
      {/* <Route exact path='/' component={Landing} />

      <Switch>
        <Route exact path='/register' component={SignUp} />
        <Route exact path='/login' component={SignIn} />
      </Switch> */}

      <SignIn />

      {/* <Dashboard /> */}
      {/* <MasterContainer /> */}
    </BrowserRouter>
  );
}

export default App;
