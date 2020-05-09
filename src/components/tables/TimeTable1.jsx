import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
  SizePerPageDropdownStandalone,
} from 'react-bootstrap-table2-paginator';
import { URL_API } from '../../config.js';
import cellEditFactory from 'react-bootstrap-table2-editor';
import { OPTIONS } from '../../config.js';

const axios = require('axios');

const selectRow = {
  mode: 'checkbox',
  clickToSelect: true,
  clickToEdit: true,
};

// const customerDetails = (e) => {
//     // console.log(e.target);
//     var { id } = e.target;
//     console.log("See Details for Id: "+id);
//     //hashHistory.push('/contacts/details/'+id);
// }

// const formatEditCustomerButton = (cell, row) => {
//     let clickHandler = customerDetails;
//     var emptyContent = React.createElement('i', { id: row.id, onClick: clickHandler });
//     var aBtn = React.createElement('a', { id: row.id, className: "mdi mdi-lead-pencil", onClick: clickHandler }, emptyContent);
//     return aBtn;

// }

const createActionButtons = (cell, row) => {
  return (
    <div>
      <button
        type='button'
        className='btn btn-outline-primary mdi mdi-lead-pencil btn-sm'
      >
        {/* Edit */}
      </button>
      {/* ml-2 adds space between buttons */}
      <button
        type='button'
        className='btn btn-outline-danger mdi mdi-delete btn-sm ml-2'
      >
        {/* Delete */}
      </button>
    </div>
  );
};

const { SearchBar } = Search;

const customTotal = (from, to, size) => (
  <span className='react-bootstrap-table-pagination-total'>
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
  sizePerPageList: [
    {
      text: '10',
      value: 10,
    },
    {
      text: '25',
      value: 25,
    },
    {
      text: '50',
      value: 50,
    },
    {
      text: '100',
      value: 100,
    },
    {
      text: 'All',
      value: 1000000,
    },
  ], // A numeric array is also available. the purpose of above example is custom the text
};

const columns = [
  {
    dataField: 'taskDate',
    text: 'Date',
    sort: true,
  },
  {
    dataField: 'startTime',
    text: 'Start',
  },
  {
    dataField: 'endTime',
    text: 'Stop',
  },
  {
    dataField: 'customer.customerName',
    text: 'Customer',
    sort: true,
  },
  {
    dataField: 'taskDescription',
    text: 'Task',
  },
  {
    dataField: 'user.firstname',
    text: 'Assigned by',
    editable: false,
    sort: true,
  },
  {
    dataField: 'timeSpent',
    text: 'Time spent',
    editable: false,
  },
  {
    dataField: 'taskStatus',
    text: 'Status',
    editable: false,
    formatter: (cell, row) => {
      if (row.taskStatus === 1) {
        return (
          <div>
            <span className='badge badge-success'>Invoiced</span>
          </div>
        );
      }
      return '';
    },
  },
  {
    text: 'Action',
    editable: false,
    formatter: (cell, row) => {
      if (row.invoiced) {
        return '';
      }
      return (
        <div>
          <button
            type='button'
            className='btn btn-outline-primary mdi mdi-lead-pencil btn-sm ml-2'
          ></button>
          <button
            type='button'
            className='btn btn-outline-danger mdi mdi-delete btn-sm ml-2'
          ></button>
        </div>
      );
    },
  },
];

export default class TimeTable1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskData: [],
    };

    this.showTaskList = this.showTaskList.bind(this);
  }

  componentDidMount() {
    this.showTaskList();
  }

  showTaskList() {
    axios
      .get(URL_API + `/rest/task/`, OPTIONS)
      .then((tasks) => {
        this.setState({ taskData: tasks.data });
      })
      .catch((exception) => {
        console.log(exception);
      });
  }

  render() {
    const contentTable = ({ paginationProps, paginationTableProps }) => {
      return (
        <div className='card-body'>
          <ToolkitProvider
            keyField='id'
            columns={columns}
            data={this.state.taskData}
            search
          >
            {(toolkitprops) => {
              return (
                <div>
                  <div className='row-between'>
                    <div>
                      <SizePerPageDropdownStandalone {...paginationProps} />
                    </div>

                    <div>
                      <button type='button' className='btn btn-success'>
                        Send to invoice
                      </button>
                    </div>

                    <div>
                      <SearchBar {...toolkitprops.searchProps} />
                    </div>
                  </div>
                  <br />

                  <div className='row'>
                    <div className='col-sm-12'>
                      <BootstrapTable
                        bordered={false}
                        hover
                        cellEdit={cellEditFactory({
                          mode: 'dbclick',
                          nonEditableRows: () => [0],
                        })}
                        selectRow={selectRow}
                        {...toolkitprops.baseProps}
                        {...paginationTableProps}
                      />
                    </div>
                  </div>
                  <div className='row-between'>
                    <div className='col-sm-8'></div>
                    <div>
                      <div>
                        <PaginationListStandalone {...paginationProps} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            }}
          </ToolkitProvider>
        </div>
      );
    };

    return (
      <div className='content-wrapper'>
        <div className='content'>
          <div className='row'>
            <div className='col-12'>
              <div className='card card-default'>
                <div
                  className='card-header card-header-border-bottom d-flex justify-content-between'
                  id='recent-orders'
                >
                  <h2>Timetracking</h2>
                </div>

                <PaginationProvider
                  pagination={paginationFactory(paginationConfig)}
                >
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
