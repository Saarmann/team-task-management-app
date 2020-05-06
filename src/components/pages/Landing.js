import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const Landing = () => {
  //   if (isAuthenticated) {
  //     return <Redirect to='/dashboard' />;
  //   }

  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Team Task Manager</h1>
          <p className='lead'>Manage your team tasks and be super productive</p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary mt-3 mr-3'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-light mt-3'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
