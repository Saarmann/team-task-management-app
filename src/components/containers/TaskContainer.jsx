import React from 'react';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import { URL_API } from '../../config.js';

const axios = require("axios");

export default class TaskContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
        }
        this.getTasks = this.getTasks.bind(this);
    }

    componentDidMount () {
      this.getTasks();
    }

    getTasks(){
    
        axios.get(URL_API + `/task/`)
        .then((response) => {
  
          this.setState({tasks: response.data}); 
        //   console.log(this.state.tasks);
    
        }).catch((exception)=>{
          console.log(exception);
        });
    }

    // addDescription() {
    //     const description = this.setState({description: this.state})this.state.
    // }

    render() {

        const {tasks} = this.state;

        return (
                <div className="content-wrapper">
                     <div className="content">
                     <div className="row">
                                            <div className="col-sm-12">

                    <div className="card card-table-border-none" data-scroll-height="580">
                        <div className="card-header justify-content-between ">
                        <h2>New Customers</h2>
                        <div>

                            <div className="dropdown show d-inline-block widget-dropdown">
                                <a className="dropdown-toggle icon-burger-mini" href="#" role="button" id="dropdown-customar" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                                </a>
                                <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown-customar">
                                    <li className="dropdown-item"><a href="#">Action</a></li>
                                    <li className="dropdown-item"><a href="#">Another action</a></li>
                                    <li className="dropdown-item"><a href="#">Something else here</a></li>
                                </ul>
                                </div>
                        </div>
                        </div>
                        
                        <div className="card-body pt-0">
                            <table className="table ">
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="media">
                                                <div className="media-image mr-3 rounded-circle">
                                                    <a href="profile.html"><img className="rounded-circle w-45" src="assets/img/user/u1.jpg" alt="customer image"/></a>
                                                </div>
                                                <div className="media-body align-self-center">
                                                    <a href="profile.html"><h6 className="mt-0 text-dark font-weight-medium">Selena Wagner</h6></a>
                                                <small>@selena.oi</small>
                                                </div>
                                            </div>
                                        </td>
                                        <td>2 Orders</td>
                                        <td className="text-dark d-none d-md-block">$150</td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <div className="media">
                                            <div className="media-image mr-3 rounded-circle">
                                                <a href="profile.html"><img className="rounded-circle w-45" src="assets/img/user/u2.jpg" alt="customer image"/></a>
                                            </div>
                                            <div className="media-body align-self-center">
                                                <a href="profile.html"><h6 className="mt-0 text-dark font-weight-medium">Walter Reuter</h6></a>
                                            <small>@walter.me</small>
                                            </div>
                                        </div>
                                        </td>
                                        <td>5 Orders</td>
                                        <td className="text-dark d-none d-md-block">$200</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                    </div>
                    </div>
                    </div>
                    </div>

                // <div classNameName="content-wrapper">
                //     <div classNameName="content">

                //         <div classNameName="row">
                //             <div classNameName="col-12">
                //                 <div classNameName="card card-default">
                //                     {tasks.map((e) => (
                //                          <div classNameName="card-header card-header-border-bottom d-flex justify-content-between">
                //                              <h5>{e.taskDescription}</h5>
                //                         </div>
                //                     ))}
                //                 </div>
                //             </div>
                //         </div>
                //     </div>
                // </div>
           
        );
    }
}