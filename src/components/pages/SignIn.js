import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../redux/actions/auth';

const SignIn = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = (e) => {
    e.preventDefault();
    login(formData);
    localStorage.setItem('username', formData.username);
  };

  // if (isAuthenticated) {
  //   return <Redirect to='/dashboard/main' />;
  // }

  return (
    <Fragment>
      <div className='container d-flex flex-column justify-content-between vh-100'>
        <div className='row justify-content-center mt-5'>
          <div className='col-xl-5 col-lg-6 col-md-10'>
            <div className='card'>
              <div className='card-header bg-primary'>
                <div className='app-brand'>
                  <a>
                    <svg
                      className='brand-icon'
                      xmlns='http://www.w3.org/2000/svg'
                      preserveAspectRatio='xMidYMid'
                      width='30'
                      height='33'
                      viewBox='0 0 30 33'
                    >
                      <g>
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
                    <span className='brand-name'>Teamster</span>
                  </a>
                </div>
              </div>
              <div className='card-body p-5'>
                <h4 className='text-dark mb-5'>Sign In</h4>

                <form onSubmit={(e) => onSubmit(e)}>
                  <div className='row'>
                    <div className='form-group col-md-12 mb-4'>
                      <input
                        type='text'
                        className='form-control input-lg'
                        name='username'
                        value={formData.username}
                        placeholder='Username'
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </div>
                    <div className='form-group col-md-12 '>
                      <input
                        type='password'
                        className='form-control input-lg'
                        name='password'
                        value={formData.password}
                        placeholder='Password'
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </div>
                    <div className='form-group col-md-12 '>
                      <input
                        type='submit'
                        className='btn btn-lg btn-primary btn-block mb-2'
                        value='Sign In'
                      />
                    </div>

                    <div className='col-md-12'>
                      <p>
                        Don't have an account?
                        <Link to='/register' className='text-blue'>
                          {' '}
                          Sign up
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

SignIn.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(SignIn);
