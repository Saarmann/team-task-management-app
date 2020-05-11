import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
  SizePerPageDropdownStandalone,
} from 'react-bootstrap-table2-paginator';
import { getCustomers } from '../../redux/actions/customer';
import { connect } from 'react-redux';
import { customer as myData } from '../data/customerData';

const CustomerTable = ({ getCustomers }) => {
  // useEffect(() => {
  //   getCustomers();
  // }, [getCustomers]);

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
        value: 99999999,
      },
    ],
  };

  const columns = [
    {
      dataField: 'customerName',
      text: 'Customer name',
      sort: true,
    },
    {
      dataField: 'registrationCode',
      text: 'Registration No.',
    },
    {
      dataField: 'vatNo',
      text: 'VAT No.',
    },
    {
      dataField: 'address',
      text: 'Address',
    },
    {
      dataField: 'city',
      text: 'City',
    },
    {
      dataField: 'state',
      text: 'State',
    },
    {
      dataField: 'zip',
      text: 'Zip code',
    },
    {
      dataField: 'customerEmail',
      text: 'Email',
    },
    {
      dataField: 'contact',
      text: 'Contact phone',
    },
    {
      dataField: 'paymentTerm',
      text: 'Payment term',
    },
    {
      text: 'Action',
      //   formatter: formatEditCustomerButton,
    },
  ];

  const customersasd = {
    name: 'juku',
    address: 'address',
  };

  const contentTable = ({ paginationProps, paginationTableProps }) => {
    return (
      <div className='card-body'>
        <ToolkitProvider keyField='id' columns={columns} data={myData} search>
          {(toolkitprops) => {
            return (
              <div>
                <div className='row-between'>
                  <div>
                    <SizePerPageDropdownStandalone {...paginationProps} />
                  </div>

                  <div>
                    <button
                      type='button'
                      className='btn btn-success'
                      onClick={getCustomers}
                    >
                      Add new customer
                    </button>
                  </div>

                  <div>
                    <SearchBar {...toolkitprops.searchProps} />
                  </div>
                </div>
                <br />

                <div className='row'>
                  <div className='col-md-12'>
                    <BootstrapTable
                      bordered={false}
                      hover
                      {...toolkitprops.baseProps}
                      {...paginationTableProps}
                    />
                  </div>
                </div>
                <div className='row-between'>
                  <div className='col-md-8'></div>
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
                <h2>Customers</h2>
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

CustomerTable.propTypes = {
  getCustomers: PropTypes.func.isRequired,
  customers: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {};

export default connect(mapStateToProps, { getCustomers })(CustomerTable);
