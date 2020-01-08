import React from 'react';
import Header from './Header';
import PageContent from './PageContent';
import Footer from './Footer';
import LeftSideBar from './LeftSideBar';
import {Route, Switch} from 'react-router-dom';
import TaskContainer from './TaskContainer';
import InvoiceContainer from './InvoiceContainer';
import TimeContainer from './TimeContainer';
import Reports from './ReportContainer';
import Inbox from './InboxContainer';
import Client from './ClientContainer';
import CustomerTable from '../tables/CustomerTable';
import CustomerTablePag from '../tables/CustomerTablePagSearch';
import InvoiceTable from '../tables/InvoiceTable';
import TimeTable from '../tables/TimeTable';


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
                                <Route path="/inbox" component={Inbox}/>
                                <Route path="/main" component={PageContent}/>
                                <Route path="/mytasks" component={TaskContainer}/>
                                <Route path="/time" component={TimeTable}/>
                                <Route path="/customers" component={CustomerTablePag}/>
                                <Route path="/invoices" component={InvoiceTable}/>
                                <Route path="/reports" component={Reports}/>
                           </Switch>

                            <Footer/>

                    </div>

                </div>

            </body>

        );
    }
}