import React from 'react'

export const customerTableHead = [
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
        formatter: (cell, row) => {
            return (
                <div>
                    <button
                        type='button'
                        className='btn btn-outline-info mdi mdi-pencil-outline btn-sm ml-2'
                    ></button>
                    <button
                        type='button'
                        className='btn btn-outline-success mdi mdi-check btn-sm ml-2'
                    ></button>
                </div>
            );
        },
    },
];