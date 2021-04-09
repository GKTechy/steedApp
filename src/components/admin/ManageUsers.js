import React, { Component } from 'react'

export class ManageUsers extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
        <div>
          

            <section className="content">
            <div className="container-fluid">
                   {/* /.row */}
                        <div className="row">
                        <div className="col-12">
                            <div className="card">
                            <div className="card-header">
                                <div className="card-title">
                                        {/* <a href="#" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#user-model"><i class="fas fa-plus"></i></a> */}
                                        <div className="input-group input-group-sm">
                                            {/* <input type="text" className="form-control" placeholder="Enter Role..." /> */}
                                            <span className="input-group-append">
                                                <button type="button" className="btn btn-primary btn-flat" data-toggle="modal" data-target="#user-model">Create New User &nbsp;&nbsp;<i class="fas fa-plus"></i></button>
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
                            {/* /.card-header */}
                            <div className="card-body" style={{height: 300}}>
                                <table className="table table-bordered table-hover text-nowrap">
                                <thead>
                                    <tr>
                                    <th>#ID</th>
                                    <th>User Name</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>183</td>
                                        <td>John Doe</td>
                                        <td><span className="badge badge-success">Active</span></td>
                                        <td className="project-actions ">
                                            <a className="btn btn-primary btn-sm" href="#" data-toggle="modal" data-target="#user-model"><i className="fas fa-folder"></i>Roles</a>&nbsp;&nbsp;
                                            <a className="btn btn-info btn-sm" href="#" data-toggle="modal" data-target="#user-model"><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-warning btn-sm" href="#" data-toggle="modal" data-target="#modal-deleteUser"><i className="fas fa-key"></i>Change Password</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>183</td>
                                        <td>John Doe</td>
                                        <td><span className="badge badge-success">Active</span></td>
                                        <td className="project-actions ">
                                            <a className="btn btn-primary btn-sm" href="#" data-toggle="modal" data-target="#user-model"><i className="fas fa-folder"></i>Roles</a>&nbsp;&nbsp;
                                            <a className="btn btn-info btn-sm" href="#" data-toggle="modal" data-target="#user-model"><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-warning btn-sm" href="#" data-toggle="modal" data-target="#modal-deleteUser"><i className="fas fa-key"></i>Change Password</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>183</td>
                                        <td>John Doe</td>
                                        <td><span className="badge badge-success">Active</span></td>
                                        <td className="project-actions ">
                                            <a className="btn btn-primary btn-sm" href="#" data-toggle="modal" data-target="#user-model"><i className="fas fa-folder"></i>Roles</a>&nbsp;&nbsp;
                                            <a className="btn btn-info btn-sm" href="#" data-toggle="modal" data-target="#user-model"><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-warning btn-sm" href="#" data-toggle="modal" data-target="#modal-deleteUser"><i className="fas fa-key"></i>Change Password</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>183</td>
                                        <td>John Doe</td>
                                        <td><span className="badge badge-danger">Active</span></td>
                                        <td className="project-actions ">
                                            <a className="btn btn-primary btn-sm" href="#" data-toggle="modal" data-target="#user-model"><i className="fas fa-folder"></i>Roles</a>&nbsp;&nbsp;
                                            <a className="btn btn-info btn-sm" href="#" data-toggle="modal" data-target="#user-model"><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-warning btn-sm" href="#" data-toggle="modal" data-target="#modal-deleteUser"><i className="fas fa-key"></i>Change Password</a>
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


            <div className="modal fade" id="user-model">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">User</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">


                       <div className="container-fluid">
                            <form className="form-inline">
                                <label htmlFor="inlineFormEmail" className="m-2">User Name <span class="text-danger">*</span></label>
                                <input type="email" className="form-control m-2" id="inlineFormEmail" />
                                <label htmlFor="inlineFormPassword" className="m-2">Password <span class="text-danger">*</span></label>
                                <input type="password" className="form-control m-2" id="inlineFormPassword" />
                                <label htmlFor="confirmFormPassword" className="m-2">Confirm Password <span class="text-danger">*</span></label>
                                <input type="password" className="form-control m-2" id="confirmFormPassword" />
                            </form>
                                <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Roles</h3>
                                        <div className="card-tools">
                                        <div className="input-group input-group-sm" c>
                                            <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />
                                            <div className="input-group-append">
                                            <button type="submit" className="btn btn-default">
                                                <i className="fas fa-search" />
                                            </button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="card-body table-responsive p-0" style={{height: 300}}>
                                        <table className="table table-head-fixed text-nowrap table-bordered">
                                        <thead>
                                            <tr>
                                                <th style={{width: 10}}>#</th>
                                                <th>Role</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><div className="form-check"> <input className="form-check-input" type="checkbox" /></div></td>
                                                <td>John Doe</td>
                                           </tr>
                                           <tr>
                                                <td><div className="form-check"> <input className="form-check-input" type="checkbox" /></div></td>
                                                <td>John Doe</td>
                                           </tr>
                                           <tr>
                                                <td><div className="form-check"> <input className="form-check-input" type="checkbox" /></div></td>
                                                <td>John Doe</td>
                                           </tr>
                                           <tr>
                                                <td><div className="form-check"> <input className="form-check-input" type="checkbox" /></div></td>
                                                <td>John Doe</td>
                                           </tr>
                                           <tr>
                                                <td><div className="form-check"> <input className="form-check-input" type="checkbox" /></div></td>
                                                <td>John Doe</td>
                                           </tr>
                                           <tr>
                                                <td><div className="form-check"> <input className="form-check-input" type="checkbox" /></div></td>
                                                <td>John Doe</td>
                                           </tr>
                                           <tr>
                                                <td><div className="form-check"> <input className="form-check-input" type="checkbox" /></div></td>
                                                <td>John Doe</td>
                                           </tr>
                                        </tbody>
                                        </table>
                                    </div>
                                    </div>
                                    
                                </div>
                                </div>


                        </div>


                        
                        </div>
                        <div className="modal-footer justify-content-between">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                        </div>
                    </div>
            </div>

            <div className="modal fade" id="modal-deleteUser">
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

export default ManageUsers
