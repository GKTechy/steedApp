import React, { Component } from 'react'

export class Roles extends Component {
    render() {
        return (
            <div>
                {/* <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Manage Roles</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active">Manage Roles</li>
                            </ol>
                        </div>
                        </div>
                    </div>
                </section> */}
                <section className="content">
                    <div className="container-fluid">
                   {/* /.row */}
                        <div className="row">
                        <div className="col-12">
                            <div className="card">
                            <div className="card-header">
                                <div className="card-title">
                                        {/* <a href="#" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#modal-default"><i class="fas fa-plus"></i></a> */}
                                        <div className="input-group input-group-sm">
                                            <input type="text" className="form-control" placeholder="Enter Role..." />
                                            <span className="input-group-append">
                                                <button type="button" className="btn btn-primary btn-flat">Add</button>
                                            </span>
                                        </div>

                                </div>
                                <div className="card-tools">
                                    <div className="input-group input-group-sm" style={{width: 350}}>
                                    
                                        <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />
                                        <div className="input-group-append">
                                        <button type="submit" className="btn btn-default">
                                            <i className="fas fa-search" />
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         
                            <div className="card-body" style={{height: 500}}>
                                <table className="table table-bordered">
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
                                        <td>183</td>
                                        <td>John Doe</td>
                                        <td><span className="tag tag-success">Active</span></td>
                                        <td className="project-actions ">
                                            <a className="btn btn-info btn-sm" href="#"><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-default"><i className="fas fa-trash"></i>Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>183</td>
                                        <td>John Doe</td>
                                        <td><span className="tag tag-success">Active</span></td>
                                        <td className="project-actions ">
                                            <a className="btn btn-info btn-sm" href="#" ><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-default"><i className="fas fa-trash"></i>Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>183</td>
                                        <td>John Doe</td>
                                        <td><span className="tag tag-success">Active</span></td>
                                        <td className="project-actions ">
                                            <a className="btn btn-info btn-sm" href="#"><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-default"><i className="fas fa-trash"></i>Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>183</td>
                                        <td>John Doe</td>
                                        <td><span className="tag tag-success">Active</span></td>
                                        <td className="project-actions ">
                                            <a className="btn btn-info btn-sm" href="#" ><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-default"><i className="fas fa-trash"></i>Delete</a>
                                        </td>
                                    </tr>
                                   
                                </tbody>
                                </table>
                            </div>
                            <div class="card-footer clearfix">
                                <ul class="pagination pagination-sm m-0 float-right">
                                <li class="page-item"><a class="page-link" href="#">«</a></li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#">»</a></li>
                                </ul>
                            </div>
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
