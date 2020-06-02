import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Landing from '../pages/Landing';
import Dashboard from './Dashboard';

export const MasterContainer = () => {
    return (
        <Fragment>
            <Route exact path='/' component={Landing} />
            <Route exact path='/register' component={SignUp} />
            <Route exact path='/login' component={SignIn} />
            <Route exact path='/dashboard' component={Dashboard} />
        </Fragment>
    )
}

export default MasterContainer;