import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory, { PaginationProvider, PaginationListStandalone, SizePerPageDropdownStandalone } from 'react-bootstrap-table2-paginator';
import { URL_API } from '../../config.js';
import '@trendmicro/react-modal/dist/react-modal.css';
import Modal from '@trendmicro/react-modal';

const axios = require("axios");

const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    clickToEdit: true   
  };
 
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
        text: 'All', value: 1000000
    }] // A numeric array is also available. the purpose of above example is custom the text
};

const columns = [{
    dataField: 'taskDate',
    text: 'Date',
    sort: true

}, {
    dataField: 'customer.customerName',
    text: 'Client',

}, {
    dataField: 'taskDescription',
    text: 'Subject',
    style: {
        width: '500px'
    },

}, {
    dataField: 'user.firstname',
    text: 'Assigned by',
    editable: false,
    sort: true

}, {
    dataField: 'priority',
    text: 'Priority',
    sort: true,
    formatter: (cell, row) => {
        if(row.taskStatus ===1 ) {
            return (
                <div>
                    <span className="badge badge-warning">High</span>
                </div>
            );
        }
            return (
                <div></div>
            );
    }

}, {
    dataField: 'taskDate',
    text: 'Deadline',

}, {
    dataField: 'taskStatus',
    text: 'Status',
    sort: true,
    editable: false,
    formatter: (cell, row) => {
        if(row.taskStatus ===1 ) {
            return (
                <div>
                    <span className="badge badge-success">Open</span>
                </div>
            );
        }
            return (
                <div>
                    <span className="badge badge-secondary">Closed</span>
                </div>
            );
    }
  
}, {
    text: 'Action',
    editable: false,
    formatter: (cell, row) => {
            return (
                <div>
                    <button type="button" className="btn btn-outline-primary mdi mdi-lead-pencil btn-sm" ></button>
                    <button type="button" className="btn btn-outline-success mdi mdi-check btn-sm ml-2"></button>
                    <button type="button" className="btn btn-outline-danger mdi mdi-delete btn-sm ml-2"></button>
                </div>
            );
    }
}];

export default class TaskTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            taskData: [],
            openModal: true,
            myCustomerName: []
        }

        this.showTaskList = this.showTaskList.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount (){
        this.showTaskList();
        this.showCustomerList();
    }

    showTaskList() {
        axios.get(URL_API + `/task/`)
            .then((tasks) => {

                this.setState({ taskData: tasks.data });
                console.log(tasks.data);

            }).catch((exception) => {
                console.log(exception);
            });
    }

    showCustomerList () {
        axios.get(URL_API+`/customer/`)
        .then((customerData) => {
    
        this.setState({myCustomerName: customerData.data});    
     
        }).catch((exception)=>{
          console.log(exception);
        });
    }

    openModal (){
        this.setState({openModal: true})
    }

    closeModal (){
        this.setState({openModal: false})
    }

    render() {
        const { myCustomerName } = this.state
        const contentTable = ({ paginationProps, paginationTableProps }) => {
  
            return (
                <div className="card-body">

                    <ToolkitProvider
                        keyField="id"
                        columns={ columns }
                        data={ this.state.taskData }
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
                                                        Add new task
                                                    </Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body padding>
                                                        
                                                                <div className="card-body">
                                                                    
                                                                    <form >
                                                                        <div className="form-row">
                                                                            <div className="col-md-6 mb-3">
                                                                                <label for="validationServer03">Date</label>
                                                                                <input type="date" value={this.state.country} onChange={(e) => this.setState({country: e.target.value})} className="form-control"/>
                                                                            </div>
                                                                            
                                                                            <div className="col-md-6 mb-3">
                                                                                <label>Client</label>
                                                                                    <select className="form-control">
                                                                                    <option></option>
                                                                                    {myCustomerName.map((e) => (                                                                                  
                                                                                    <option>{e.customerName}</option>
                                                                                    ))}        
                                                                                    </select>
                                                                                </div>   
                                                                        </div>

                                                                        <div className="form-row">
                                                                            <div className="col-md-12 mb-3">
                                                                                <label for="validationServer02">Subject</label>
                                                                                <input type="text" value={this.state.customerEmail} onChange={(e) => this.setState({customerEmail: e.target.value})} className="form-control" placeholder="Text"/>
                                                                            </div>
                                                                        </div>

                                                                        <div className="form-row">
                                                                            <div className="col-md-6 mb-3">
                                                                                <label>Deadline</label>
                                                                                <input type="date" value={this.state.contact} onChange={(e) => this.setState({contact: e.target.value})} className="form-control" id="validationServer03" placeholder="Phone number"/>
                                                                            </div>
                                                                        </div>

                                                                        <div className="form-row">
                                                                            <div className="ml-4">
                                                                                <input type="checkbox" className="form-check-input"/>
                                                                                <label >Priority "High"</label>
                                                                            </div>
                                                                        </div>                                                                    
                                                                    </form>
                                                                   
                                                                </div>
                                                          
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <button type="button" class="btn btn-primary" onClick={ () => this.editCustomer(this.state.id) }>Add task</button>
                                                    <button type="button" class="btn btn-danger" onClick={ this.closeModal }>Close</button>
                                                   
                                                </Modal.Footer>
                                            </Modal>

                                        }

                                        <div className="row-between">
                                            
                                            <div>
                                                <SizePerPageDropdownStandalone { ...paginationProps } />
                                            </div>

                                            <div>
                                                <button type="button" onClick={ this.openModal}  className="btn btn-success">Create new task</button>
                                                </div>

                                            <div>                                                
                                                <SearchBar {...toolkitprops.searchProps} />                                                     
                                               
                                            </div>
                                        </div>
                                        <br />

                                        <div className="row">
                                            <div className="col-sm-12">
                                                <BootstrapTable
                                                    bordered={false}
                                                    hover
                                                    selectRow={ selectRow } 
                                                    {...toolkitprops.baseProps}
                                                    {...paginationTableProps}
                                                  
                                                />
                                            </div>
                                        </div>
                                        <div className="row-between">
                                            <div className="col-sm-8">
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
                                    <h2>Taskmanagement</h2>
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

