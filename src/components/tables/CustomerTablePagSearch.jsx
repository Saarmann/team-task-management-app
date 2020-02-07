import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { customer } from '../../components/data/customerData.js';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory, { PaginationProvider, PaginationListStandalone, SizePerPageDropdownStandalone } from 'react-bootstrap-table2-paginator';
import '@trendmicro/react-modal/dist/react-modal.css';
import Modal from '@trendmicro/react-modal';
// import {URL_API} from 'config.js';

const axios = require("axios");
const URL_API = "http://localhost:8080/rest"; //import from config eventually

const { SearchBar } = Search;

const options = {
    headers: {"Content-Type": "application/json","Accept": "application/json" },
  };

const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
        Showing {from} to {to} of {size} Results
    </span>
);

const paginationConfig = {
    custom: true,
    paginationSize: 4,
    pageStartIndex: 1,
    firstPageText: 'First',
    prePageText: 'Back',
    nextPageText: 'Next',
    lastPageText: 'Last',
    nextPageTitle: 'First page',
    prePageTitle: 'Pre page',
    firstPageTitle: 'Next page',
    lastPageTitle: 'Last page',
    showTotal: true,
    paginationTotalRenderer: customTotal,
    sizePerPageList: [{
        text: '10', value: 10
    }, {
        text: '25', value: 25
    }, {
        text: '50', value: 50
    }, {
        text: '100', value: 100
    }, {
        text: 'All', value: customer.length
    }] // A numeric array is also available. the purpose of above example is custom the text
};





export default class CustomerTablePag extends React.Component {

    constructor(props) {
        super(props);

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.closeEditModal = this.closeEditModal.bind(this);
        this.saveCustomer = this.saveCustomer.bind(this);
        this.editCustomer = this.editCustomer.bind(this);

        this.state = {
            myTestData: [],
            openModal: false,
            openEditModal: false,
            id: "",
            customerName: "",
            registrationCode: "",
            vatNo: "",
            address: "",
            country: "",
            city: "",
            state: "",
            zip: "",
            customerEmail: "",
            contact: "",
            paymentTerm: ""

        }
    }

    componentDidMount () {
        this.showCustomerList();
    }

    showCustomerList () {
        axios.get(`${URL_API}/customer/`)
        .then((customerData) => {
    
        this.setState({myTestData: customerData.data});    
     
        }).catch((exception)=>{
          console.log(exception);
        });
    }

    openModal (){
        this.setState({openModal: true})
    }

    closeModal (){
        this.clearCustomerModal();
        this.setState({openModal: false})
    }

    closeEditModal (){
        this.clearCustomerModal();
        this.setState({openEditModal: false})
    }

    clearCustomerModal() {

        this.setState({customerName: ""});
        this.setState({registrationCode: ""});
        this.setState({vatNo: ""});
        this.setState({address: ""});
        this.setState({city: ""});
        this.setState({state: ""});
        this.setState({country: ""});
        this.setState({zip: ""});
        this.setState({customerEmail: ""});
        this.setState({contact: ""});
        this.setState({paymentTerm: ""});
        this.setState({id: ""});
    }

    saveCustomer() {

        let customerData = {         
            customerName: this.state.customerName,
            registrationCode: this.state.registrationCode,
            vatNo: this.state.vatNo,
            address: this.state.address,
            city: this.state.city,
            customerState: this.state.state,
            country: this.state.country,
            zip: this.state.zip,
            customerEmail: this.state.customerEmail,
            contact: this.state.contact,
            paymentTerm: this.state.paymentTerm
        }

        axios.post(`${URL_API}/customer/save`, customerData, options)
        .then((response) => {
            console.log(response)
        }).catch((exception)=>{
            console.log(exception)});
      
        this.setState({openModal: false});
        this.clearCustomerModal();
        this.showCustomerList();
    }

    editCustomer(id) {
        
        let customerData = {         
            id: id,
            customerName: this.state.customerName,
            registrationCode: this.state.registrationCode,
            vatNo: this.state.vatNo,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            country: this.state.country,
            zip: this.state.zip,
            customerEmail: this.state.customerEmail,
            contact: this.state.contact,
            paymentTerm: this.state.paymentTerm
        }

        axios.post(`${URL_API}/customer/edit`, customerData, options)
        .then((response) => {
            console.log(response)
        }).catch((exception)=>{
            console.log(exception)});
      
        this.setState({openEditModal: false});
        this.clearCustomerModal();
        this.showCustomerList();
    }

    render() {

        const editCustomerDetails = (e) => {

            var { id } = e.target;
            this.setState({openEditModal: true});
                        
            axios.get(`${URL_API}/customer/`+id)
            .then((response) => {
                
              this.setState({address: response.data.address}); 
              this.setState({city: response.data.city});
              this.setState({contact: response.data.contact});
              this.setState({country: response.data.country});
              this.setState({customerEmail: response.data.customerEmail});
              this.setState({customerName: response.data.customerName});
              this.setState({paymentTerm: response.data.paymentTerm});
              this.setState({registrationCode: response.data.registrationCode});
              this.setState({state: response.data.state});
              this.setState({vatNo: response.data.vatNo});
              this.setState({zip: response.data.zip});
              this.setState({id: id});  
        
            }).catch((exception)=>{
              console.log(exception);
            });
        };
        
        const formatEditCustomerButton = (cell, row) => {
            let clickHandler = editCustomerDetails;
            var aBtn = React.createElement('button', { id: row.id, className: "btn btn-outline-primary mdi mdi-lead-pencil btn-sm", onClick: clickHandler });
            return aBtn;
        }

        const columns = [{
        //     dataField: 'id',
        //     text: 'ID'
        
        // }, {
            dataField: 'customerName',
            text: 'Customer name',
            sort: true
        
        }, {
            dataField: 'registrationCode',
            text: 'Registration No.'
        
        }, {
            dataField: 'vatNo',
            text: 'VAT No.'
        
        }, {
            dataField: 'address',
            text: 'Address'
        
        }, {
            dataField: 'city',
            text: 'City'
        
        }, {
            dataField: 'state',
            text: 'State'
        
        }, {
            dataField: 'zip',
            text: 'Zip code'
        
        }, {
            dataField: 'customerEmail',
            text: 'Email'
        
        }, {
            dataField: 'contact',
            text: 'Contact phone'
        
        }, {
            dataField: 'paymentTerm',
            text: 'Payment term'
        
        }, {
            text: 'Action',
            formatter: formatEditCustomerButton
        }];


        const contentTable = ({ paginationProps, paginationTableProps }) => {

            return (
                <div className="card-body">

                    <ToolkitProvider
                        keyField="id"
                        columns={ columns }
                        data={ this.state.myTestData }
                        search
                    >
                        {
                            (toolkitprops) => {

                                return (
                                    <div>
                                        
                                        {
                                            this.state.openModal &&
                                            <Modal size={400} onClose={ this.closeModal}>
                                                <Modal.Header>
                                                    <Modal.Title>
                                                        Add new customer
                                                    </Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body padding>
                                                        
                                                                <div className="card-body">
                                                                    <form >
                                                                        <div className="form-row">
                                                                            <div className="col-md-12 mb-3">
                                                                                <label for="validationServer01">Customer name</label>
                                                                                <input type="text" value={this.customerName} onChange={(e) => this.setState({customerName: e.target.value})} className="form-control" id="validationServer01" placeholder="Company name" required/>
                                                                            </div>
                                                                        </div>
                                                                        
                                                                        <div className="form-row">
                                                                            <div className="col-md-6 mb-3">
                                                                                <label for="validationServer03">Registration code</label>
                                                                                <input type="text" value={this.registrationCode} onChange={(e) => this.setState({registrationCode: e.target.value})} className="form-control" id="validationServer03" placeholder="Code" required/>
                                                                            </div>
                                                                            <div className="col-md-6 mb-3">
                                                                                <label for="validationServer04">VAT No.</label>
                                                                                <input type="text" value={this.vatNo} onChange={(e) => this.setState({vatNo: e.target.value})} className="form-control" id="validationServer04" placeholder="Number"/>
                                                                            </div>
                                                                        </div>

                                                                        <div className="form-row">
                                                                            <div className="col-md-6 mb-3">
                                                                                <label for="validationServer01">Address</label>
                                                                                <input type="text" value={this.address} onChange={(e) => this.setState({address: e.target.value})} className="form-control" id="validationServer01" placeholder="Street address"/>
                                                                            </div>
                                                                            <div className="col-md-6 mb-3">
                                                                                <label for="validationServer03">City</label>
                                                                                <input type="text" value={this.city} onChange={(e) => this.setState({city: e.target.value})} className="form-control" id="validationServer03" placeholder="City"/>
                                                                            </div>

                                                                        </div>

                                                                        <div className="form-row">
                                                                            <div className="col-md-6 mb-3">
                                                                                <label for="validationServer03">Country</label>
                                                                                <input type="text" value={this.country} onChange={(e) => this.setState({country: e.target.value})} className="form-control" id="validationServer03" placeholder="Country"/>
                                                                            </div>
                                                                            <div className="col-md-3 mb-3">
                                                                                <label for="validationServer04">State</label>
                                                                                <input type="text" value={this.state} onChange={(e) => this.setState({state: e.target.value})} className="form-control" id="validationServer04" placeholder="State"/>

                                                                            </div>
                                                                            <div className="col-md-3 mb-3">
                                                                                <label for="validationServer05">Zip</label>
                                                                                <input type="text" value={this.zip} onChange={(e) => this.setState({zip: e.target.value})} className="form-control" id="validationServer05" placeholder="Zip"/>

                                                                            </div>
                                                                        </div>

                                                                        <div className="form-row">
                                                                            <div className="col-md-12 mb-3">
                                                                                <label for="validationServer02">Email address</label>
                                                                                <input type="text" value={this.customerEmail} onChange={(e) => this.setState({customerEmail: e.target.value})} className="form-control" id="validationServer02" placeholder="Email"/>
                                                                            </div>
                                                                        </div>

                                                                        <div className="form-row">
                                                                            <div className="col-md-6 mb-3">
                                                                                <label for="validationServer03">Contact</label>
                                                                                <input type="text" value={this.contact} onChange={(e) => this.setState({contact: e.target.value})} className="form-control" id="validationServer03" placeholder="Phone number"/>

                                                                            </div>
                                                                            <div className="col-md-6 mb-3">
                                                                                <label for="validationServer04">Payment term</label>
                                                                                <input type="text" value={this.paymentTerm} onChange={(e) => this.setState({paymentTerm: e.target.value})} className="form-control" id="validationServer04" placeholder="Days"/>
                                                                            </div>
                                                                        </div>
                                                                                                                                            
                                                                    </form>
                                                                </div>
                                                          
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <button type="button" class="btn btn-primary" onClick={ this.saveCustomer }>Save customer</button>
                                                    <button type="button" class="btn btn-danger" onClick={ this.closeModal }>Close</button>
                                                   
                                                </Modal.Footer>
                                            </Modal>

                                        }

                                        {
                                            this.state.openEditModal &&
                                            <Modal size={400} onClose={ this.closeEditModal}>
                                                <Modal.Header>
                                                    <Modal.Title>
                                                        Edit customer
                                                    </Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body padding>
                                                        
                                                                <div className="card-body">
                                                                    <form >
                                                                        <div className="form-row">
                                                                            <div className="col-md-12 mb-3">
                                                                                <label for="validationServer01">Customer name</label>
                                                                                <input type="text" value={this.state.customerName} onChange={(e) => this.setState({customerName: e.target.value})} className="form-control" id="validationServer01" placeholder="Company name" required/>
                                                                            </div>
                                                                        </div>
                                                                        
                                                                        <div className="form-row">
                                                                            <div className="col-md-6 mb-3">
                                                                                <label for="validationServer03">Registration code</label>
                                                                                <input type="text" value={this.state.registrationCode} onChange={(e) => this.setState({registrationCode: e.target.value})} className="form-control" id="validationServer03" placeholder="Code" required/>
                                                                            </div>
                                                                            <div className="col-md-6 mb-3">
                                                                                <label for="validationServer04">VAT No.</label>
                                                                                <input type="text" value={this.state.vatNo} onChange={(e) => this.setState({vatNo: e.target.value})} className="form-control" id="validationServer04" placeholder="Number"/>
                                                                            </div>
                                                                        </div>

                                                                        <div className="form-row">
                                                                            <div className="col-md-6 mb-3">
                                                                                <label for="validationServer01">Address</label>
                                                                                <input type="text" value={this.state.address} onChange={(e) => this.setState({address: e.target.value})} className="form-control" id="validationServer01" placeholder="Street address"/>
                                                                            </div>
                                                                            <div className="col-md-6 mb-3">
                                                                                <label for="validationServer03">City</label>
                                                                                <input type="text" value={this.state.city} onChange={(e) => this.setState({city: e.target.value})} className="form-control" id="validationServer03" placeholder="City"/>
                                                                            </div>

                                                                        </div>

                                                                        <div className="form-row">
                                                                            <div className="col-md-6 mb-3">
                                                                                <label for="validationServer03">Country</label>
                                                                                <input type="text" value={this.state.country} onChange={(e) => this.setState({country: e.target.value})} className="form-control" id="validationServer03" placeholder="Country"/>
                                                                            </div>
                                                                            <div className="col-md-3 mb-3">
                                                                                <label for="validationServer04">State</label>
                                                                                <input type="text" value={this.state.state} onChange={(e) => this.setState({state: e.target.value})} className="form-control" id="validationServer04" placeholder="State"/>

                                                                            </div>
                                                                            <div className="col-md-3 mb-3">
                                                                                <label for="validationServer05">Zip</label>
                                                                                <input type="text" value={this.state.zip} onChange={(e) => this.setState({zip: e.target.value})} className="form-control" id="validationServer05" placeholder="Zip"/>

                                                                            </div>
                                                                        </div>

                                                                        <div className="form-row">
                                                                            <div className="col-md-12 mb-3">
                                                                                <label for="validationServer02">Email address</label>
                                                                                <input type="text" value={this.state.customerEmail} onChange={(e) => this.setState({customerEmail: e.target.value})} className="form-control" id="validationServer02" placeholder="Email"/>
                                                                            </div>
                                                                        </div>

                                                                        <div className="form-row">
                                                                            <div className="col-md-6 mb-3">
                                                                                <label for="validationServer03">Contact</label>
                                                                                <input type="text" value={this.state.contact} onChange={(e) => this.setState({contact: e.target.value})} className="form-control" id="validationServer03" placeholder="Phone number"/>

                                                                            </div>
                                                                            <div className="col-md-6 mb-3">
                                                                                <label for="validationServer04">Payment term</label>
                                                                                <input type="text" value={this.state.paymentTerm} onChange={(e) => this.setState({paymentTerm: e.target.value})} className="form-control" id="validationServer04" placeholder="Days"/>
                                                                            </div>
                                                                        </div>
                                                                                                                                            
                                                                    </form>
                                                                </div>
                                                          
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <button type="button" class="btn btn-primary" onClick={ () => this.editCustomer(this.state.id) }>Save customer</button>
                                                    <button type="button" class="btn btn-danger" onClick={ this.closeEditModal }>Close</button>
                                                   
                                                </Modal.Footer>
                                            </Modal>

                                        }

                                        <div className="row-between">
                                            
                                            <div >
                                                <SizePerPageDropdownStandalone { ...paginationProps } />
                                            </div>

                                            <div>
                                                <button type="button" onClick={ this.openModal} className="btn btn-success">Add new customer</button>
                                            </div>

                                            <div >                                                
                                                <SearchBar {...toolkitprops.searchProps} />                                                     
                                               
                                            </div>
                                        </div>
                                        <br />

                                        <div className="row">
                                            <div className="col-md-12">
                                                <BootstrapTable
                                                    bordered={false}
                                                    hover
                                                    {...toolkitprops.baseProps}
                                                    {...paginationTableProps}
                                                />
                                            </div>
                                        </div>
                                        <div className="row-between">
                                            <div className="col-md-8">
                                            </div>
                                            <div>
                                                <div>
                                                    <PaginationListStandalone {...paginationProps}   />
                                                </div>                                                   
                                            </div>
                                        </div>
                                    </div>);


                            }
                        }
                    </ToolkitProvider>          


                </div>
            );
        }

        return (
            <div className="content-wrapper">
                <div className="content">

                    <div className="row">
                        <div className="col-12">
                            <div className="card card-default">

                                <div className="card-header card-header-border-bottom d-flex justify-content-between" id="recent-orders">
                                    <h2>Customers</h2>
                                </div>
                                
                                <PaginationProvider pagination={paginationFactory(paginationConfig)} >
                                    {contentTable}
                                </PaginationProvider>

                           </div>
                        </div>
                    </div>


                </div>
            </div>
        );
    }


}

