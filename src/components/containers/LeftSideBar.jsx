import React from 'react';

export default class LeftSideBar extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (


<div id="sidebar" className="sidebar sidebar-with-footer">

    {/* <!-- Aplication Brand --> */}
    <div className="app-brand">
        <a href="/index.html" title="Super Dashboard">
            <svg
                className="brand-icon"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
                width="30"
                height="33"
                viewBox="0 0 30 33"
            >
                <g fill="none" fill-rule="evenodd">
                    <path
                        className="logo-fill-blue"
                        fill="#7DBCFF"
                        d="M0 4v25l8 4V0zM22 4v25l8 4V0z"
                    />
                    <path className="logo-fill-white" fill="#FFF" d="M11 4v25l8 4V0z" />
                </g>
            </svg>
            <span className="brand-name text-truncate">Super Dashboard</span>
        </a>
    </div>

    {/* <!-- begin sidebar scrollbar --> */}
    <div className="sidebar-scrollbar">

        {/* <!-- sidebar menu --> */}
        <ul className="nav sidebar-inner" id="sidebar-menu">

            <li className="has-sub active expand" >
                <a className="sidenav-item-link" href="javascript:void(0)" data-toggle="collapse" data-target="#dashboard"
                    aria-expanded="false" aria-controls="dashboard">
                    <i className="mdi mdi-view-dashboard-outline"></i>
                    <span className="nav-text">Dashboard</span> <b className="caret"></b>
                </a>
                <ul className="collapse show" id="dashboard"
                    data-parent="#sidebar-menu">
                    <div className="sub-menu">

                        <li className="active" >
                            <a className="sidenav-item-link" href="index.html">
                                <span className="nav-text">Ecommerce</span>
                            </a>
                        </li>

                    </div>
                </ul>
            </li>

            <li className="has-sub" >
                <a className="sidenav-item-link" href="javascript:void(0)" data-toggle="collapse" data-target="#app"
                    aria-expanded="false" aria-controls="app">
                    <i className="mdi mdi-pencil-box-multiple"></i>
                    <span className="nav-text">App</span> <b className="caret"></b>
                </a>
                <ul className="collapse" id="app"
                    data-parent="#sidebar-menu">
                    <div className="sub-menu">

                        <li >
                            <a className="sidenav-item-link" href="chat.html">
                                <span className="nav-text">Chat</span>

                            </a>
                        </li>

                        <li >
                            <a className="sidenav-item-link" href="contacts.html">
                                <span className="nav-text">Contacts</span>

                            </a>
                        </li>

                    </div>
                </ul>
            </li>

            <li className="has-sub" >
                <a className="sidenav-item-link" href="javascript:void(0)" data-toggle="collapse" data-target="#icons"
                    aria-expanded="false" aria-controls="icons">
                    <i className="mdi mdi-diamond-stone"></i>
                    <span className="nav-text">Icons</span> <b className="caret"></b>
                </a>
                <ul className="collapse" id="icons"
                    data-parent="#sidebar-menu">

                </ul>
            </li>

            <li className="has-sub" >
                <a className="sidenav-item-link" href="javascript:void(0)" data-toggle="collapse" data-target="#forms"
                    aria-expanded="false" aria-controls="forms">
                    <i className="mdi mdi-email-mark-as-unread"></i>
                    <span className="nav-text">Forms</span> <b className="caret"></b>
                </a>

            </li>

            <li className="has-sub" >
                <a className="sidenav-item-link" href="javascript:void(0)" data-toggle="collapse" data-target="#tables"
                    aria-expanded="false" aria-controls="tables">
                    <i className="mdi mdi-table"></i>
                    <span className="nav-text">Tables</span> <b className="caret"></b>
                </a>
                <ul className="collapse" id="tables"
                    data-parent="#sidebar-menu">
                    <div className="sub-menu">

                        <li >
                            <a className="sidenav-item-link" href="basic-tables.html">
                                <span className="nav-text">Basic Tables</span>

                            </a>
                        </li>

                        <li className="has-sub" >
                            <a className="sidenav-item-link" href="javascript:void(0)" data-toggle="collapse" data-target="#data-tables"
                                aria-expanded="false" aria-controls="data-tables">
                                <span className="nav-text">Data Tables</span> <b className="caret"></b>
                            </a>
                            <ul className="collapse" id="data-tables">
                                <div className="sub-menu">

                                    <li >
                                        <a href="basic-data-table.html">Basic Data Table</a>
                                    </li>

                                    <li >
                                        <a href="responsive-data-table.html">Responsive Data Table</a>
                                    </li>

                                    <li >
                                        <a href="hoverable-data-table.html">Hoverable Data Table</a>
                                    </li>

                                    <li >
                                        <a href="expendable-data-table.html">Expendable Data Table</a>
                                    </li>

                                </div>
                            </ul>
                        </li>
                    </div>
                </ul>
            </li>

            <li className="has-sub" >
                <a className="sidenav-item-link" href="javascript:void(0)" data-toggle="collapse" data-target="#pages"
                    aria-expanded="false" aria-controls="pages">
                    <i className="mdi mdi-image-filter-none"></i>
                    <span className="nav-text">Pages</span> <b className="caret"></b>
                </a>
                <ul className="collapse" id="pages"
                    data-parent="#sidebar-menu">
                    <div className="sub-menu">

                        <li >
                            <a className="sidenav-item-link" href="user-profile.html">
                                <span className="nav-text">User Profile</span>
                            </a>
                        </li>

                        <li className="has-sub" >
                            <a className="sidenav-item-link" href="javascript:void(0)" data-toggle="collapse" data-target="#authentication"
                                aria-expanded="false" aria-controls="authentication">
                                <span className="nav-text">Authentication</span> <b className="caret"></b>
                            </a>
                            <ul className="collapse" id="authentication">
                                <div className="sub-menu">

                                    <li >
                                        <a href="sign-in.html">Sign In</a>
                                    </li>

                                    <li >
                                        <a href="sign-up.html">Sign Up</a>
                                    </li>

                                </div>
                            </ul>
                        </li>

                        <li className="has-sub" >
                            <a className="sidenav-item-link" href="javascript:void(0)" data-toggle="collapse" data-target="#others"
                                aria-expanded="false" aria-controls="others">
                                <span className="nav-text">Others</span> <b className="caret"></b>
                            </a>
                            <ul className="collapse" id="others">
                                <div className="sub-menu">

                                    <li >
                                        <a href="invoice.html">Invoice</a>
                                    </li>

                                    <li >
                                        <a href="404.html">404 Page</a>
                                    </li>

                                </div>
                            </ul>
                        </li>
                    </div>
                </ul>
            </li>
        </ul>
    </div>
</div>

        );
    }
}
