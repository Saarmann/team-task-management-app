import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LeftSideBar from './../layout/LeftSideBar';
import Header from './../layout/Header';
import TaskTable from './../tables/TaskTable';
import TimeTable from './../tables/TimeTable';

import InvoiceTable from './../tables/InvoiceTable';

const Dashboard = () => {
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
          <Switch>
            <Route path='/dashboard/mytasks' component={TaskTable} />
            <Route path='/dashboard/time' component={TimeTable} />

            <Route path='/dashboard/invoices' component={InvoiceTable} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
