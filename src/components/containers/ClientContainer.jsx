
import React from 'react';
const axios = require("axios");

const options = {
    headers: {"Content-Type": "application/json","Accept": "application/json" },
    // httpsAgent: agent
  };
  const postmanEcho="http://localhost:3008/customer";

export default class Client extends React.Component {

    constructor(props) {
        super(props)

        this.state = {

            name: "",
            regCode: "",
            vatNo: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            email: "",
            phone: "",
            payment: ""

        };

        this.postCustomerData = this.postCustomerData.bind(this);
    }

    postCustomerData(event){

        let customer = {

            name: this.state.name,
            regCode: this.state.regCode,
            vatNo: this.state.vatNo,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            email: this.state.email,
            phone: this.state.phone,
            payment: this.state.payment

        };
        
        axios.post(postmanEcho, customer, options)
        .then((response) => {

            console.log("response from echo server");
            console.log(response.customer);

        }).catch((exception) => {
            console.log(exception);
        });

        event.preventDefault();

    }

    render() {
        return (

            <div className="col-lg-6">
            <div className="card card-default">
                <div className="card-header card-header-border-bottom">
                    <h2>Add customer</h2>
                </div>
                <div className="card-body">
                    <form >
                        <div className="form-row">
                            <div className="col-md-12 mb-3">
                                <label for="validationServer01">Client name</label>
                                <input type="text" onChange={ (e) => this.setState({name: e.target.value})} className="form-control" id="validationServer01" placeholder="Company name" required/>
                            </div>
                        </div>
                        
                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                                <label for="validationServer03">Registration code</label>
                                <input type="text" onChange={ (e) => this.setState({regCode: e.target.value})} className="form-control" id="validationServer03" placeholder="Code" required/>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label for="validationServer04">VAT No.</label>
                                <input type="text" onChange={ (e) => this.setState({vatNo: e.target.value})} className="form-control" id="validationServer04" placeholder="Number"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col-md-12 mb-3">
                                <label for="validationServer01">Address</label>
                                <input type="text" onChange={ (e) => this.setState({address: e.target.value})} className="form-control" id="validationServer01" placeholder="Street address"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                                <label for="validationServer03">City</label>
                                <input type="text" onChange={ (e) => this.setState({city: e.target.value})} className="form-control" id="validationServer03" placeholder="City"/>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label for="validationServer04">State</label>
                                <input type="text" onChange={ (e) => this.setState({state: e.target.value})} className="form-control" id="validationServer04" placeholder="State"/>

                            </div>
                            <div className="col-md-3 mb-3">
                                <label for="validationServer05">Zip</label>
                                <input type="text" onChange={ (e) => this.setState({zip: e.target.value})} className="form-control" id="validationServer05" placeholder="Zip"/>

                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col-md-12 mb-3">
                                <label for="validationServer02">Email address</label>
                                <input type="text" onChange={ (e) => this.setState({email: e.target.value})} className="form-control" id="validationServer02" placeholder="Email"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                                <label for="validationServer03">Contact</label>
                                <input type="text" onChange={ (e) => this.setState({phone: e.target.value})} className="form-control" id="validationServer03" placeholder="Phone number"/>

                            </div>
                            <div className="col-md-6 mb-3">
                                <label for="validationServer04">Payment term</label>
                                <input type="text" onChange={ (e) => this.setState({payment: e.target.value})} className="form-control" id="validationServer04" placeholder="Days"/>
                            </div>
                        </div>
                        
                        <button className="btn btn-primary" type="submit" onClick={this.postCustomerData}>Add client</button>
                    </form>
                </div>
            </div>
        </div>

);
}
}