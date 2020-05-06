import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const LeftSideBar = () => {
  return (
    <div id='sidebar' className='sidebar sidebar-with-footer'>
      {/* <!-- Aplication Brand --> */}
      <div className='app-brand'>
        <a href='/index.html' title='Super Dashboard'>
          <svg
            className='brand-icon'
            preserveAspectRatio='xMidYMid'
            width='30'
            height='33'
            viewBox='0 0 30 33'
          >
            <g fill='none' fill-rule='evenodd'>
              <path
                className='logo-fill-blue'
                fill='#7DBCFF'
                d='M0 4v25l8 4V0zM22 4v25l8 4V0z'
              />
              <path
                className='logo-fill-white'
                fill='#FFF'
                d='M11 4v25l8 4V0z'
              />
            </g>
          </svg>
          <span className='brand-name text-truncate'>Tasker App</span>
        </a>
      </div>
      {/* <!-- begin sidebar scrollbar --> */}
      <div className='sidebar-scrollbar'>
        {/* <!-- sidebar menu --> */}
        <ul className='nav sidebar-inner' id='sidebar-menu'>
          <li className='has-sub'>
            <Link className='sidenav-item-link' to='/main'>
              <i className='mdi mdi-view-dashboard-outline'></i>
              <span className='nav-text'>Dashboard</span>{' '}
              <b className='caret'></b>
            </Link>
          </li>

          <li className='has-sub'>
            <Link className='sidenav-item-link' to='/mytasks'>
              <i className='mdi mdi-pencil-box-multiple'></i>
              <span className='nav-text'>My Tasks</span>{' '}
              <b className='caret'></b>
            </Link>
          </li>

          <li className='has-sub active'>
            <Link className='sidenav-item-link' to='/time'>
              <i className='mdi mdi-account-clock'></i>
              <span className='nav-text'>Time</span> <b className='caret'></b>
            </Link>
          </li>

          <li className='has-sub'>
            <Link className='sidenav-item-link' to='/customers'>
              <i className='mdi mdi-folder-account-outline'></i>
              <span className='nav-text'>Customers</span>{' '}
              <b className='caret'></b>
            </Link>
          </li>

          <li className='has-sub'>
            <Link className='sidenav-item-link' to='/invoices'>
              <i className='mdi mdi-cash-multiple'></i>
              <span className='nav-text'>Invoices</span>{' '}
              <b className='caret'></b>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSideBar;
