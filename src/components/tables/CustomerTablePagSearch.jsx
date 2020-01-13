import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { customer } from '../../components/data/customerData.js';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory, { PaginationProvider, PaginationListStandalone, SizePerPageDropdownStandalone } from 'react-bootstrap-table2-paginator';

import '@trendmicro/react-modal/dist/react-modal.css';
import Modal from '@trendmicro/react-modal';
import '@trendmicro/react-buttons/dist/react-buttons.css';
// import { Button, ButtonGroup, ButtonToolbar } from '@trendmicro/react-buttons';

const customerDetails = (e) => {
    //console.log(e.target);
    var { id } = e.target;
    console.log("See Details for Id: "+id);
    //hashHistory.push('/contacts/details/'+id);
};

const formatEditCustomerButton = (cell, row) => {
    let clickHandler = customerDetails;
    var emptyContent = React.createElement('i', { id: row.id, onClick: clickHandler });
    var aBtn = React.createElement('button', { id: row.id, className: "btn btn-outline-primary mdi mdi-lead-pencil btn-sm", onClick: clickHandler }, emptyContent);
    return aBtn;
}

const { SearchBar } = Search;

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

const columns = [{
    dataField: 'id',
    text: 'ID'

}, {
    dataField: 'customer_name',
    text: 'Customer name',
    sort: true

}, {
    dataField: 'registration_code',
    text: 'Registration No.'

}, {
    dataField: 'vat_no',
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
    dataField: 'customer_email',
    text: 'Email'

}, {
    dataField: 'contact',
    text: 'Contact phone'

}, {
    dataField: 'payment_term',
    text: 'Payment term'

}, {
    text: 'Action',
    formatter: formatEditCustomerButton
}];

export default class CustomerTablePag extends React.Component {

    constructor(props) {
        super(props);

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.saveCustomer = this.saveCustomer.bind(this);

        this.state = {
            openModal: false,
            id: "",
            customerName: "",
            registrationCode: "",
            vatNo: "",
            address: "",
            country: "",
            city: "",
            customerState: "",
            zip: "",
            customerEmail: "",
            contact: "",
            paymentTerm: ""

        }
    }

    openModal (){
        this.setState({openModal: true})
    }

    closeModal (){
        this.setState({openModal: false})
    }

    saveCustomer(e) {

        let customerData = {
            
            customerName: this.state.customerName,
            registrationCode: this.state.registrationCode,
            vatNo: this.state.vatNo,
            address: this.state.address,
            city: this.state.city,
            customerState: this.state.customerState,
            zip: this.state.zip,
            customerEmail: this.state.customerEmail,
            contact: this.state.contact,
            paymentTerm: this.state.paymentTerm

        }

        console.log(customerData);
        this.setState({openModal: false});
    }

    render() {


        const contentTable = ({ paginationProps, paginationTableProps }) => {

            return (
                <div className="card-body">

                    <ToolkitProvider
                        keyField="id"
                        columns={ columns }
                        data={ customer }
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
                                                                                <input type="text" value={this.customerState} onChange={(e) => this.setState({customerState: e.target.value})} className="form-control" id="validationServer04" placeholder="State"/>

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

