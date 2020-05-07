import React from 'react';
import PropTypes from 'prop-types';
import BootstrapTable from 'react-bootstrap-table-next';
import { invoices as invoiceData } from '../../components/data/invoices.js';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
  SizePerPageDropdownStandalone,
} from 'react-bootstrap-table2-paginator';

const InvoiceTable = (props) => {
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
        value: invoiceData.length,
      },
    ],
  };

  const columns = [
    {
      dataField: 'invoiceNumber',
      text: 'Number',
      style: {
        fontWeight: 'bold',
      },
      sort: true,
    },
    {
      dataField: 'invoiceDate',
      text: 'Date',
      sort: true,
    },
    {
      dataField: 'customer.customerName',
      text: 'Customer',
      sort: true,
    },
    {
      dataField: 'invoiceAmount',
      text: 'Amount',
      headerAlign: 'center',
      style: {
        textAlign: 'center',
      },
      sort: true,
    },
    {
      dataField: 'user.email',
      text: 'Submitter',
      sort: true,
    },
    {
      dataField: 'dueDate',
      text: 'Payment date',
      headerAlign: 'center',
      style: {
        textAlign: 'center',
      },
      sort: true,
    },
    {
      dataField: 'invoiceStatus',
      text: 'Status',
      headerAlign: 'center',
      style: {
        textAlign: 'center',
      },
      sort: true,
      formatter: (cell, row) => {
        if (row.invoiceStatus !== 0) {
          return (
            <div>
              <span className='badge badge-success'>Confirmed</span>
            </div>
          );
        }
        return (
          <div>
            <span className='badge badge-warning'>On hold</span>
          </div>
        );
      },
    },
    {
      dataField: 'invoiceSent',
      text: 'Sent',
      headerAlign: 'center',
      style: {
        textAlign: 'center',
      },
      sort: true,
      formatter: (cell, row) => {
        if (row.invoiceSent !== 0) {
          return (
            <div>
              <span
                class='mdi mdi-check'
                style={{ color: '#29cc97', fontSize: '22px' }}
              ></span>
            </div>
          );
        }
        return '';
      },
    },
    {
      text: 'Action',
      style: {
        textAlign: 'center',
      },
      headerAlign: 'center',
      formatter: (cell, row) => {
        if (row.invoiceStatus === 1 && row.invoiceSent === 1) {
          return (
            <div>
              <button
                type='button'
                className='btn btn-outline-info mdi mdi-eye-outline btn-sm ml-2'
              ></button>
              <button
                type='button'
                className='btn btn-outline-success mdi mdi-check btn-sm ml-2'
              ></button>
            </div>
          );
        } else if (row.invoiceStatus === 1 && row.invoiceSent === 0) {
          return (
            <div>
              <button
                type='button'
                className='btn btn-outline-info mdi mdi-eye-outline btn-sm ml-2'
              ></button>
              <button
                type='button'
                className='btn btn-outline-success mdi mdi-check btn-sm ml-2'
              ></button>
              <button
                type='button'
                className=' btn btn-outline-info mdi mdi-email-outline btn-sm ml-2'
              ></button>
            </div>
          );
        } else {
          return (
            <div>
              <button
                type='button'
                className='btn btn-outline-info mdi mdi-eye-outline btn-sm ml-2'
              ></button>
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
                className=' btn btn-outline-info mdi mdi-email-outline btn-sm ml-2'
              ></button>
              <button
                type='button'
                className='btn btn-outline-danger mdi mdi-delete btn-sm ml-2'
              ></button>
            </div>
          );
        }
      },
    },
  ];

  const contentTable = ({ paginationProps, paginationTableProps }) => {
    return (
      <div className='card-body'>
        <ToolkitProvider
          keyField='id'
          columns={columns}
          data={invoiceData}
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
                      Create new invoice
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
                <h2>Invoices</h2>
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

InvoiceTable.propTypes = {};

export default InvoiceTable;
