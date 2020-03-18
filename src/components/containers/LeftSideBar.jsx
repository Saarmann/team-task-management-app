import React from 'react';
import {Link} from 'react-router-dom';


export default class LeftSideBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {active: false, class: 'has-sub'}

        this.handleClick = this.handleClick.bind(this);
  
    }



    handleClick (e) {

        const currentState = this.state.active; //false

        if(!currentState) {
            
            e.target = 'has-sub active'
            this.setState({class: e.target});
            this.setState({active: true});

        }   else {
            this.setState({class: 'has-sub'});
            this.setState({active: false});
        }     

    }

    render() {
        return (
            <div id="sidebar" className="sidebar sidebar-with-footer">
                {/* <!-- Aplication Brand --> */}
                <div className="app-brand">
                    <a href="/index.html" title="Super Dashboard">
                        <svg className="brand-icon" preserveAspectRatio="xMidYMid" width="30" height="33" viewBox="0 0 30 33">
                            <g fill="none" fill-rule="evenodd">
                                <path className="logo-fill-blue" fill="#7DBCFF" d="M0 4v25l8 4V0zM22 4v25l8 4V0z"/>
                                <path className="logo-fill-white" fill="#FFF" d="M11 4v25l8 4V0z" />
                            </g>
                        </svg>
                        <span className="brand-name text-truncate">Tasker App</span>
                    </a>
                </div>
                {/* <!-- begin sidebar scrollbar --> */}
                <div className="sidebar-scrollbar">
                    {/* <!-- sidebar menu --> */}
                    <ul className="nav sidebar-inner" id="sidebar-menu">
                        
                        <li className={this.state.class} onClick={this.handleClick}  >
                            <Link className="sidenav-item-link" href="javascript:void(0)" to="/inbox">
                                <i className="mdi mdi-email-outline"></i>
                                <span className="nav-text">Tickets</span> <b className="caret"></b>
                            </Link>
                        </li>
                        
                        <li className={this.state.class} onClick={this.handleClick} >
                            <Link className="sidenav-item-link" href="javascript:void(0)" to="/main">
                                <i className="mdi mdi-view-dashboard-outline"></i>
                                <span className="nav-text">Dashboard</span> <b className="caret"></b>
                            </Link>
                        </li>

                        <li className={this.state.class} onClick={this.handleClick} >
                            <Link className="sidenav-item-link" href="javascript:void(0)" to="/mytasks">
                                <i className="mdi mdi-pencil-box-multiple"></i>
                                <span className="nav-text">My Tasks</span> <b className="caret"></b>
                            </Link>
                        </li>

                        <li className={this.state.class} onClick={this.handleClick} >
                            <Link className="sidenav-item-link" href="javascript:void(0)" to="/time">
                                <i className="mdi mdi-account-clock"></i>
                                <span className="nav-text">Time</span> <b className="caret"></b>
                            </Link>
                        </li>

                        <li className={this.state.class} onClick={this.handleClick}>
                            <Link className="sidenav-item-link" href="javascript:void(0)" to="/customers">
                                <i className="mdi mdi-folder-account-outline"></i>
                                <span className="nav-text">Customers</span> <b className="caret"></b>
                            </Link>
                        </li>

                        <li className={this.state.class} onClick={this.handleClick}>
                            <Link className="sidenav-item-link" href="javascript:void(0)" to="/invoices">
                                <i className="mdi mdi-cash-multiple"></i>
                                <span className="nav-text">Invoices</span> <b className="caret"></b>
                            </Link>
                        </li>

                        <li className={this.state.class} onClick={this.handleClick}>
                            <Link className="sidenav-item-link" href="javascript:void(0)" to="/reports">
                                <i className="mdi mdi-file-chart"></i>
                                <span className="nav-text">Reports</span> <b className="caret"></b>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

