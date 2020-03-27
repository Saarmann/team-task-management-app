import React from 'react';
import { URL_API } from '../../config';
import MasterContainer from '../containers/MasterContainer';
const axios = require("axios");

const options = {headers: {"Content-Type": "application/json"}};

export default class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          username: "",
          password: "",
          isAuthenticated: false
        }
    }

    componentDidMount = () => {
      console.log(this.isAuthenticated)
    }

    logIn = () => {
      
      const user = {username: this.state.username, password: this.state.password};    

      axios.post(URL_API + '/authenticate', 
        JSON.stringify(user), options)
        
        .then((response) => {

          if(response.status >= 200 && response.status <= 300) {
            this.setState({isAuthenticated: true})
          }
        }).catch(err => console.error(err))
    };

    handleChange = (event) => {
      this.setState({[event.target.name]: event.target.value});
    };

    render() {

        if (this.state.isAuthenticated === true) {
          return (<MasterContainer/>);
        }
        else {
            return(

                  <div className="container d-flex flex-column justify-content-between vh-100">
                  <div className="row justify-content-center mt-5">
                    <div className="col-xl-5 col-lg-6 col-md-10">
                      <div className="card">
                        <div className="card-header bg-primary">
                          <div className="app-brand">
                            <a href="/index.html">
                              <svg className="brand-icon" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="30" height="33"
                                viewBox="0 0 30 33">
                                <g fill="none" fill-rule="evenodd">
                                  <path className="logo-fill-blue" fill="#7DBCFF" d="M0 4v25l8 4V0zM22 4v25l8 4V0z" />
                                  <path className="logo-fill-white" fill="#FFF" d="M11 4v25l8 4V0z" />
                                </g>
                              </svg>
                              <span className="brand-name">Teamster</span>
                            </a>
                          </div>
                        </div>
                        <div className="card-body p-5">

                          <h4 className="text-dark mb-5">Sign In</h4>

                          <form action="/index.html">
                            <div className="row">
                              <div className="form-group col-md-12 mb-4">
                                <input type="text" className="form-control input-lg" name="username" onChange={this.handleChange} placeholder="Username"/>
                              </div>
                              <div className="form-group col-md-12 ">
                                <input type="password" className="form-control input-lg" name="password" onChange={this.handleChange} placeholder="Password"/>
                              </div>
                              <div className="col-md-12">
                                <button onClick={this.logIn} className="btn btn-lg btn-primary btn-block mb-4">Sign In</button>
                              </div>
                            </div>
                          </form>

                        </div>
                      </div>
                    </div>
                  </div>
                 </div>

            );
    }
  }
}