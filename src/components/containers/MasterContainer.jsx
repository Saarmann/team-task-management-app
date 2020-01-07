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
                                <Route path="/time" component={TimeContainer}/>
                                <Route path="/clients" component={Client}/>
                                <Route path="/invoices" component={InvoiceContainer}/>
                                <Route path="/reports" component={Reports}/>
                           </Switch>

                            <Footer/>

                    </div>

                </div>

            </body>

        );
    }
}