
import React from 'react';
import {Link} from 'react-router-dom';

export default class Header extends React.Component {

    constructor(props) {
        super(props); 

        this.state = {

            class: "dropdown-menu dropdown-menu-right"

        }
        this.openUserMenu = this.openUserMenu.bind(this);
    }

    openUserMenu = () => {
        if(this.state.class == "dropdown-menu dropdown-menu-right") {

        this.setState({class: "dropdown-menu dropdown-menu-right show"})
    }   else {
        this.setState({class: "dropdown-menu dropdown-menu-right"});

    };
}

    render() {
        return (

            <header className="main-header " id="header">
                <nav className="navbar navbar-static-top navbar-expand-lg">

                    {/* <!-- Sidebar toggle button --> */}
                    <button id="sidebar-toggler" className="sidebar-toggle">
                        <span className="sr-only">Toggle navigation</span>
                    </button>

                    {/* <!-- search form --> */}
                    <div className="search-form d-none d-lg-inline-block"></div>

                    <div className="navbar-right ">
                        <ul className="nav navbar-nav">
                            <li className="dropdown notifications-menu">
                                <button className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="mdi mdi-account-supervisor"></i>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-right">

                                    <li>
                                        <a href="#">
                                            <i className="mdi mdi-account-plus"></i> New user registered
                                        <span className=" font-size-12 d-inline-block float-right"><i className="mdi mdi-clock-outline"></i> 10 AM</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            <i className="mdi mdi-account-supervisor"></i> New client
                                         <span className=" font-size-12 d-inline-block float-right"><i className="mdi mdi-clock-outline"></i> 10 AM</span>
                                        </a>
                                    </li>

                                </ul>
                            </li>

                            {/* <!-- User Account --> */}
                            <li className="dropdown user-menu">
                                <button href="#" className="dropdown-toggle nav-link" data-toggle="dropdown" onClick={this.openUserMenu}>
                                    <img src="assets/img/user/user.png" className="user-image" alt="User Image" />
                                    <span className="d-none d-lg-inline-block">Abdus Salam</span>
                                </button>
                                <ul className={this.state.class}>
                                    {/* <!-- User image --> */}
                                    <li className="dropdown-header">
                                        <img src="assets/img/user/user.png" className="img-circle" alt="User Image" />
                                        <div className="d-inline-block">
                                            Abdus Salam <small className="pt-1">iamabdus@gmail.com</small>
                                        </div>
                                    </li>


                                    <li>
                                        <Link to="/user" onClick={this.openUserMenu}>
                                            <i className="mdi mdi-account"></i> My Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <a href="index.html">
                                            <i className="mdi mdi-logout"></i> Logout </a>
                                    </li>

                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>

            </header>

        );
    }
}


