import React from 'react';
import Header from './Header';
import LeftSideBar from './LeftSideBar';
import {Route, Switch} from 'react-router-dom';
import TaskContainer from './TaskContainer';
import Reports from './ReportContainer';
import CustomerTablePag from '../tables/CustomerTablePagSearch';
import InvoiceTable from '../tables/InvoiceTable';
import TimeTable from '../tables/TimeTable';
import Invoice from './Invoice';
import UserInfo from './userInfo';
import UserTable from '../tables/UserTable';


export default class MasterContainer extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (

            <body className="header-fixed sidebar-fixed sidebar-dark header-light" id="body">

                <div className="wrapper">

                    <aside className="left-sidebar bg-sidebar">

                            <LeftSideBar/>

                    </aside>

                    <div className="page-wrapper">

                            <Header/>

                           <Switch>
                                <Route path="/team" component={UserTable}/>   
                                <Route path="/user" component={UserInfo}/>
                                <Route path="/inbox" component={Invoice}/>
                                <Route path="/main" component={UserInfo}/>
                                <Route path="/mytasks" component={TaskContainer}/>
                                <Route path="/time" component={TimeTable}/>
                                <Route path="/customers" component={CustomerTablePag}/>
                                <Route path="/invoices" component={InvoiceTable}/>
                                <Route path="/reports" component={Reports}/>
                           </Switch>

                    </div>

                </div>

            </body>

        );
    }
}