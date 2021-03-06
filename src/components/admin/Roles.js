import React, { Component } from 'react'
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css"
import "datatables.net-bs4/js/dataTables.bootstrap4.min.js"

import $ from 'jquery';


export class Roles extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            rolename:"",
            errormsg:"",
            rolesList:[

                {
                    id:1,
                    role:"admin",
                    status:'Active'
                }, {
                    id:2,
                    role:"root",
                    status:'Active'
                }, {
                    id:3,
                    role:"qc",
                    status:'Active'
                }, {
                    id:4,
                    role:"sales",
                    status:'Active'
                }, {
                    id:5,
                    role:"test",
                    status:'Active'
                }, {
                    id:6,
                    role:"purchase",
                    status:'Active'
                }, {
                    id:7,
                    role:"Manufacturing",
                    status:'Active'
                }, {
                    id:8,
                    role:"Accounting",
                    status:'Active'
                }, {
                    id:9,
                    role:"develop",
                    status:'Active'
                }, {
                    id:10,
                    role:"admin1",
                    status:'Active'
                }, {
                    id:11,
                    role:"admin2",
                    status:'Active'
                }, {
                    id:12,
                    role:"admin3",
                    status:'Active'
                },
                
            ]
        }
       
    }
    
   


    componentDidMount() {
        $(document).ready(function () {
            $('#myTable').DataTable();
        });
        
     }  

     addRole= event =>{
        if(this.state.rolename === ""){
            this.setState({
                errormsg: "Enter Role"
            });
        }else{
            const obj = {'role':this.state.rolename, status:'Active','id':1*1};
            this.setState({
                errormsg: "",
                rolesList: [...this.state.rolesList, obj]
            },()=>{
                $('#myTable').DataTable();
                console.log(this.state.rolesList); 
            });
        }
     }

        
    handleFormChange = event => {
        this.setState({
            rolename: event.target.value
        });
    };

    
    render() {
        return (
            <div>
               
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-12">
                              
                        <div className="input-group input-group-sm col-4">
                            <input type="text" 
                            className='form-control'
                             placeholder="Enter Role..." name={this.state.rolename} onChange={this.handleFormChange}/>
                            <span className="input-group-append">
                                <button type="button" className="btn btn-primary btn-flat" onClick={this.addRole}>Add</button>
                            </span>
                        </div>
                        <span className="text-danger">{this.state.errormsg}</span>
                        <br/><br/>
                            <div className="table-responsive-sm" >
                                <table className="table table-striped table-sm table-bordered" id="myTable" >
                                    <thead>
                                        <tr>
                                        
                                        <th>Role</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            this.state.rolesList.map((item) =>
                                            
                                            <tr key={item.id}>
                                                
                                                <td>{item.role}</td>
                                                <td><span className="tag tag-success">{item.status}</span></td>
                                                <td className="project-actions ">
                                                    <a className="btn btn-info btn-sm" href="#"><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                                    <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-default"><i className="fas fa-trash"></i>Delete</a>
                                                </td>
                                            </tr>
                                        )}
                                        
                                        
                                    </tbody>
                                </table> 
                            </div>
                        </div>
                        </div>
                   
                       
                    </div>
                    </section>

                   <div className="modal fade" id="modal-default">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Info</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Do you Want to Delete?</p>
                        </div>
                        <div className="modal-footer justify-content-between">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Delete</button>
                        </div>
                        </div>
                    </div>
                    </div>

            </div>
        )
    }
}

export default Roles
