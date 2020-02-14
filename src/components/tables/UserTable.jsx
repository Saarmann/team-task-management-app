import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory, { PaginationProvider, PaginationListStandalone, SizePerPageDropdownStandalone } from 'react-bootstrap-table2-paginator';
import { URL_API } from '../../config.js';

const axios = require("axios");

const { SearchBar } = Search;

const userDetails = (e) => {

    var { id } = e.target;
}

const formatEditUserButton = (cell, row) => {
    let clickHandler = userDetails;
    var aBtn = React.createElement('button', { id: row.id, className: "btn btn-outline-primary mdi mdi-lead-pencil btn-sm", onClick: clickHandler });
    var bBtn = React.createElement('button', { id: row.id, className: "btn btn-outline-success mdi mdi-check btn-sm ml-2", onClick: clickHandler });
    var cBtn = React.createElement('button', { id: row.id, className: "btn btn-outline-info mdi mdi-email-outline btn-sm ml-2", onClick: clickHandler });
    var userButtons = React.createElement('div', {}, aBtn, bBtn, cBtn);
    return userButtons;
}

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
    dataField: 'firstname',
    text: 'Firstname',
    style: {fontWeight: "normal"}

}, {
    dataField: 'lastname',
    text: 'Lastname'

}, {
    dataField: 'email',
    text: 'Email'

}, {
    dataField: 'role.role',
    text: 'Role'

},{
    text: 'Action',
    headerAlign: 'center',
    style: {
        textAlign: 'center'
    },
    formatter: formatEditUserButton
}];

export default class UserTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            teamMembers: []
        }

        this.showUserList = this.showUserList.bind(this);
    }

    componentDidMount (){
        this.showUserList();
    }

    showUserList() {
        axios.get(URL_API + `/user/team`)
            .then((users) => {

                this.setState({ teamMembers: users.data });

            }).catch((exception) => {
                console.log(exception);
            });
    }

    render() {

        const contentTable = ({ paginationProps, paginationTableProps }) => {

            return (
                <div className="card-body">

                    <ToolkitProvider
                        keyField="id"
                        columns={ columns }
                        data={ this.state.teamMembers }
                        search
                    >
                        {
                            (toolkitprops) => {

                                return (
                                    <div>
                                        <div className="row-between">
                                            
                                            <div>
                                                <SizePerPageDropdownStandalone { ...paginationProps } />
                                            </div>

                                            <div>
                                                <button type="button" className="btn btn-success">Add team member</button>
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
                                                    {...toolkitprops.baseProps}
                                                    {...paginationTableProps}
                                                />
                                            </div>
                                        </div>
                                        <div className="row-between">
                                            <div className="col-sm-9">
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
                        <div className="col-9">
                            <div className="card card-default">

                                <div className="card-header card-header-border-bottom d-flex justify-content-between" id="recent-orders">
                                    <h2>Team members</h2>
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