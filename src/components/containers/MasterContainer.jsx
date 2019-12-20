import React from 'react';
import Header from './Header';
import PageContent from './PageContent';
import Footer from './Footer';
import LeftSideBar from './LeftSideBar';

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
                            <PageContent/>
                            <Footer/>

                    </div>

                </div>

            </body>

        );
    }
}