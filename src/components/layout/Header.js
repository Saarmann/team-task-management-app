import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Fragment>
      <header className='main-header ' id='header'>
        <nav className='navbar navbar-static-top navbar-expand-lg'>
          {/* <!-- search form --> */}
          <div className='search-form d-none d-lg-inline-block'></div>

          <div className='navbar-right '>
            <ul className='nav navbar-nav'>
              <li className='dropdown notifications-menu'>
                <Link
                  to='/team'
                  className='dropdown-toggle'
                  data-toggle='dropdown'
                >
                  <i className='mdi mdi-account-supervisor'></i>
                </Link>
              </li>

              {/* <!-- User Account --> */}
              <li className='dropdown user-menu'>
                <button
                  className='dropdown-toggle nav-link'
                  data-toggle='dropdown'
                >
                  <img
                    src='assets/img/user/user.png'
                    className='user-image'
                    alt='User Image'
                  />
                  <span className='d-none d-lg-inline-block'>Mickey Mouse</span>
                </button>
                <ul className='dropdown-menu dropdown-menu-right'>
                  {/* <!-- User image --> */}
                  <li className='dropdown-header'>
                    <img
                      src='assets/img/user/user.png'
                      className='img-circle'
                      alt='User Image'
                    />
                    <div className='d-inline-block'>
                      Mickey Mouse
                      <small className='pt-1'>mickey@gmail.com</small>
                    </div>
                  </li>

                  <li>
                    <Link to='/user'>
                      <i className='mdi mdi-account'></i> My Profile
                    </Link>
                  </li>
                  <li>
                    <a>
                      <i className='mdi mdi-logout'></i> Logout{' '}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;
