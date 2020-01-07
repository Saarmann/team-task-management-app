import React from 'react';
const axios = require("axios");

const options = {
  headers: {"Content-Type": "application/json","Accept": "application/json" },
  // httpsAgent: agent
};

const postmanEcho="http://localhost:3008/send";


export default class SignUp extends React.Component {

    constructor(props) {
        super(props)
      
        this.state = { 

            name: "",
            email: "",
            password: "",
            cpassword: ""

        };

          this.postData = this.postData.bind(this);

    }
    
    componentDidMount () {
      
      const dataLink ="https://api.mockaroo.com/api/e508ef90?count=5&key=a404b6a0";
  
      axios.get(dataLink)
      .then((response) => {

        this.setState({name: response.data[0].name}); 
        this.setState({email: response.data[0].email});
        this.setState({password: response.data[0].password});
        this.setState({cpassword: response.data[0].cpassword});
        console.log(response);
  
      }).catch((exception)=>{
        console.log(exception);
      });

    }

  
    postData(event) {

      let data = {

        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        cpassword: this.state.cpassword

      };

      axios.post(postmanEcho, data, options)
      .then((response) => {
      
        console.log("response from echo server");
        console.log(response.data)
   
      }).catch((exception)=>{
        console.log(exception);
    });

      event.preventDefault();
    }

    render() {
        return(

          <div className="container d-flex flex-column justify-content-between vh-100">
          <div className="row justify-content-center mt-5">
            <div className="col-xl-5 col-lg-6 col-md-10">
              <div className="card">
                <div className="card-header bg-primary">
                  <div className="app-brand">
                    <a href="/index.html">
                      <svg className="brand-icon" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="30"
                        height="33" viewBox="0 0 30 33">
                        <g fill="none" fill-rule="evenodd">
                          <path className="logo-fill-blue" fill="#7DBCFF" d="M0 4v25l8 4V0zM22 4v25l8 4V0z" />
                          <path className="logo-fill-white" fill="#FFF" d="M11 4v25l8 4V0z" />
                        </g>
                      </svg>
                      <span className="brand-name">Super Dashboard</span>
                    </a>
                  </div>
                </div>
                <div className="card-body p-5">
                  <h4 className="text-dark mb-5">Sign Up</h4>
                  <form action="/index.html">
                    <div className="row">
                      <div className="form-group col-md-12 mb-4">
                        <input type="text" value={this.state.name} onChange={ (e) => this.setState({name: e.target.value})} className="form-control input-lg" id="name" aria-describedby="nameHelp" placeholder="Name"/>
                      </div>
                      <div className="form-group col-md-12 mb-4">
                        <input type="email" value={this.state.email}  onChange={ (e) => this.setState({email: e.target.value})}
                        className="form-control input-lg" id="email" aria-describedby="emailHelp" placeholder="Email"/>
                      </div>
                      <div className="form-group col-md-12 ">
                        <input type="password" value={this.state.password}  onChange={ (e) => this.setState({password: e.target.value})}
                        className="form-control input-lg" id="password" placeholder="Password"/>
                      </div>
                      <div className="form-group col-md-12 ">
                        <input type="password" value={this.state.cpassword}  onChange={ (e) => this.setState({cpassword: e.target.value})}
                        className="form-control input-lg" id="cpassword" placeholder="Confirm Password"/>
                      </div>
                      <div className="col-md-12">
                        <div className="d-inline-block mr-3">
                          <label className="control control-checkbox">
                            <input type="checkbox" />
                            <div className="control-indicator"></div>
                            I Agree the terms and conditions
                          </label>

                        </div>
                        <button type="submit" className="btn btn-lg btn-primary btn-block mb-4" onClick={this.postData}>Sign Up</button>
                        <p>Already have an account?
                          <a className="text-blue" href="sign-in.html">Sign in</a>
                        </p>
                      </div>
                    </div>
                  </form>

                </div>
              </div>
            </div>
          </div>
          <div className="copyright pl-0">
            <p className="text-center">&copy; 2018 Copyright Sleek Dashboard Bootstrap Template by
              <a className="text-primary" href="http://www.iamabdus.com/" target="_blank">Abdus</a>.
            </p>
          </div>
        </div>

        );
    }
}