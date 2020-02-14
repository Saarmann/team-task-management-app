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
                            <div className="col-12">
                                <div className="card card-default">
                                    {tasks.map((e) => (
                                         <div className="card-header card-header-border-bottom d-flex justify-content-between">
                                             <h5>{e.taskDescription}</h5>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           
        );
    }
}