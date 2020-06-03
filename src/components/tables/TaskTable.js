import React from 'react';
import PropTypes from 'prop-types';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
  SizePerPageDropdownStandalone,
} from 'react-bootstrap-table2-paginator';

const selectRow = {
  mode: 'checkbox',
  clickToSelect: true,
  clickToEdit: true,
};

const { SearchBar } = Search;

const customTotal = (from, to, size) => (
  <span className='react-bootstrap-table-pagination-total'>
    Showing {from} to {to} of {size} Results
  </span>
);

const datata = {
  name: 11,
  description: 'sdada a asda asd'
}

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
  ],
};

const columns = [
  {
    dataField: 'taskDate',
    text: 'Date',
    sort: true,
  },
  {
    dataField: 'customer.customerName',
    text: 'Client',
  },
  {
    dataField: 'taskDescription',
    text: 'Subject',
    style: {
      width: '500px',
    },
  },
  {
    dataField: 'user.firstname',
    text: 'Assigned by',
    sort: true,
  },
  {
    dataField: 'priority',
    text: 'Priority',
    sort: true,
    formatter: (cell, row) => {
      if (row.priority === 1) {
        return (
          <div>
            <span className='badge badge-warning'>High</span>
          </div>
        );
      }
      return <div></div>;
    },
  },
  {
    dataField: 'taskDate',
    text: 'Deadline',
  },
  {
    dataField: 'taskStatus',
    text: 'Status',
    sort: true,
    formatter: (cell, row) => {
      if (row.taskStatus === 0) {
        return (
          <div>
            <span className='badge badge-success'>Open</span>
          </div>
        );
      }
      return (
        <div>
          <span className='badge badge-secondary'>Closed</span>
        </div>
      );
    },
  },
  {
    text: 'Action',
    editable: false,
    formatter: (cell, row) => {
      return (
        <div>
          <button
            type='button'
            className='btn btn-outline-primary mdi mdi-lead-pencil btn-sm ml-2'
          ></button>
          <button
            type='button'
            className='btn btn-outline-success mdi mdi-check btn-sm ml-2'
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

const timeData = {
  client: 'Juku',
  date: '01-01-12',
};

const defaultSorted = [
  {
    dataField: 'taskStatus',
    order: 'asc',
  },
];

const TaskTable = (props) => {
  const contentTable = ({ paginationProps, paginationTableProps }) => {
    return (
      <div className='card-body'>
        <ToolkitProvider
          keyField='id'
          columns={columns}
          data={datata}
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
                      Create new task
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
                      selectRow={selectRow}
                      defaultSorted={defaultSorted}
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
                <h2>Taskmanagement</h2>
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
};

TaskTable.propTypes = {};

export default TaskTable;
