import React, { Component } from 'react'
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"

import $ from 'jquery';


export class Roles extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            
        }
    }
    
   


    componentDidMount() {
        $(document).ready(function () {
            $('#myTable').DataTable();
        });
        
     }  


    render() {
        return (
            <div>
               
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-12">
                              
                        <div className="input-group input-group-sm col-4">
                            <input type="text" className="form-control" placeholder="Enter Role..." />
                            <span className="input-group-append">
                                <button type="button" className="btn btn-primary btn-flat">Add</button>
                            </span>
                        </div><br></br>
                        <div className="table-responsive-sm">
                        <table className="table table-striped table-sm" id="myTable">
                                <thead>
                                    <tr>
                                    <th>#ID</th>
                                    <th>Role</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>181</td>
                                        <td>John Doe</td>
                                        <td><span className="tag tag-success">Active</span></td>
                                        <td className="project-actions ">
                                            <a className="btn btn-info btn-sm" href="#"><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-default"><i className="fas fa-trash"></i>Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>182</td>
                                        <td>abc</td>
                                        <td><span className="tag tag-success">Active</span></td>
                                        <td className="project-actions ">
                                            <a className="btn btn-info btn-sm" href="#" ><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-default"><i className="fas fa-trash"></i>Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>183</td>
                                        <td>John</td>
                                        <td><span className="tag tag-success">Active</span></td>
                                        <td className="project-actions ">
                                            <a className="btn btn-info btn-sm" href="#"><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-default"><i className="fas fa-trash"></i>Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>184</td>
                                        <td>Doe</td>
                                        <td><span className="tag tag-success">Active</span></td>
                                        <td className="project-actions ">
                                            <a className="btn btn-info btn-sm" href="#" ><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-default"><i className="fas fa-trash"></i>Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>181</td>
                                        <td>John Doe</td>
                                        <td><span className="tag tag-success">Active</span></td>
                                        <td className="project-actions ">
                                            <a className="btn btn-info btn-sm" href="#"><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-default"><i className="fas fa-trash"></i>Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>182</td>
                                        <td>abc</td>
                                        <td><span className="tag tag-success">Active</span></td>
                                        <td className="project-actions ">
                                            <a className="btn btn-info btn-sm" href="#" ><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-default"><i className="fas fa-trash"></i>Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>183</td>
                                        <td>John</td>
                                        <td><span className="tag tag-success">Active</span></td>
                                        <td className="project-actions ">
                                            <a className="btn btn-info btn-sm" href="#"><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-default"><i className="fas fa-trash"></i>Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>184</td>
                                        <td>Doe</td>
                                        <td><span className="tag tag-success">Active</span></td>
                                        <td className="project-actions ">
                                            <a className="btn btn-info btn-sm" href="#" ><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-default"><i className="fas fa-trash"></i>Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>181</td>
                                        <td>John Doe</td>
                                        <td><span className="tag tag-success">Active</span></td>
                                        <td className="project-actions ">
                                            <a className="btn btn-info btn-sm" href="#"><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-default"><i className="fas fa-trash"></i>Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>182</td>
                                        <td>abc</td>
                                        <td><span className="tag tag-success">Active</span></td>
                                        <td className="project-actions ">
                                            <a className="btn btn-info btn-sm" href="#" ><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-default"><i className="fas fa-trash"></i>Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>183</td>
                                        <td>John</td>
                                        <td><span className="tag tag-success">Active</span></td>
                                        <td className="project-actions ">
                                            <a className="btn btn-info btn-sm" href="#"><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-default"><i className="fas fa-trash"></i>Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>184</td>
                                        <td>Doe</td>
                                        <td><span className="tag tag-success">Active</span></td>
                                        <td className="project-actions ">
                                            <a className="btn btn-info btn-sm" href="#" ><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-default"><i className="fas fa-trash"></i>Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>181</td>
                                        <td>John Doe</td>
                                        <td><span className="tag tag-success">Active</span></td>
                                        <td className="project-actions ">
                                            <a className="btn btn-info btn-sm" href="#"><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-default"><i className="fas fa-trash"></i>Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>182</td>
                                        <td>abc</td>
                                        <td><span className="tag tag-success">Active</span></td>
                                        <td className="project-actions ">
                                            <a className="btn btn-info btn-sm" href="#" ><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-default"><i className="fas fa-trash"></i>Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>183</td>
                                        <td>John</td>
                                        <td><span className="tag tag-success">Active</span></td>
                                        <td className="project-actions ">
                                            <a className="btn btn-info btn-sm" href="#"><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-default"><i className="fas fa-trash"></i>Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>184</td>
                                        <td>Doe</td>
                                        <td><span className="tag tag-success">Active</span></td>
                                        <td className="project-actions ">
                                            <a className="btn btn-info btn-sm" href="#" ><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-default"><i className="fas fa-trash"></i>Delete</a>
                                        </td>
                                    </tr>
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
