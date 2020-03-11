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
    
        }).catch((exception)=>{
          console.log(exception);
        });
    }

    render() {

        const {tasks} = this.state;

        return (
            <div className="content-wrapper">
             <div className="content">
                <div className="row">
                    <div className="col-12">
                        <div className="card card-default">
  
                            <div className="card-header card-header-border-bottom d-flex justify-content-between" id="recent-orders">
                              <h2>Tasks</h2>
                            </div>
                            
                            <div className="card-body">
                           
                                <table className="table">
                                    <tr>
                                        <th>Date</th>
                                        <th>Subject</th>
                                        <th>Assigned by</th>
                                        <th>Priority</th>
                                        <th>Deadline</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                    {tasks.map((e) => (
                                        <tbody>

                                            <tr>
                                            <td>{e.taskDate}</td>
                                                <td>
                                                        <div className="media-body align-self-center">
                                                            <h6 className="mt-0 text-dark font-weight-medium">{e.taskDescription}</h6>
                                                        <small>{e.customer.customerName}</small>
                                                        </div>
                                                </td>
                                                <td>
                                                    <div className="media-image mr-3 rounded-circle">
                                                            <a href="profile.html"><img className="rounded-circle w-25" src="assets/img/user/u1.jpg" alt="customer image"/></a>
                                                    </div>
                                                </td>
                                                <td>{e.priority == 1 ? <span className="badge badge-danger">High</span> : "" }</td>
                                                <td>{e.deadline}</td>
                                                <td>{e.taskStatus == 0 ? <span className="badge badge-success">Open</span> :<span className="badge badge-secondary">Closed</span> }</td>
                                                <td>
                                                    <button type="button" className="btn btn-outline-info mdi mdi-eye-outline btn-sm" ></button>
                                                    <button type="button" className="btn btn-outline-success mdi mdi-check btn-sm ml-2"></button>
                                                    <button type="button" className=" btn btn-outline-info mdi mdi-email-outline btn-sm ml-2"></button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    ))}
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