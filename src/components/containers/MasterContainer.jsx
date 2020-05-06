import React from 'react';
import Header from './../layout/Header';
import { Route, Switch } from 'react-router-dom';
import LeftSideBar from './../layout/LeftSideBar';
import CustomerTablePag from '../tables/CustomerTablePagSearch';
import InvoiceTable from '../tables/InvoiceTable';
import TimeTable from '../tables/TimeTable';
import UserInfo from './userInfo';
import UserTable from '../tables/UserTable';
import TaskTable from '../tables/TaskTable';
import SignUp from './../pages/SignUp';
import SignIn from './../pages/SignIn';
import Landing from './../pages/Landing';
import Dashboard from './Dashboard';

export default class MasterContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className='header-fixed sidebar-fixed sidebar-dark header-light'
        id='body'
      >
        <div className='wrapper'>
          <aside className='left-sidebar bg-sidebar'>
            <LeftSideBar />
          </aside>

          <div className='page-wrapper'>
            <Header />
            <Route exact path='/' component={Landing} />
            <Route exact path='/register' component={SignUp} />
            <Route exact path='/login' component={SignIn} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Switch>
              <Route path='/team' component={UserTable} />
              <Route path='/user' component={UserInfo} />
              <Route path='/main' component={UserInfo} />
              <Route path='/mytasks' component={TaskTable} />
              <Route path='/time' component={TimeTable} />
              <Route path='/customers' component={CustomerTablePag} />
              <Route path='/invoices' component={InvoiceTable} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
