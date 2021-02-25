import React, { Component } from 'react'

export class PedProduct extends Component {
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
                                        <div className="form-inline">
                                            <label htmlFor="inlineFormEmail" className="m-2">Name <span class="text-danger">*</span></label>
                                            <input type="email" className="form-control m-2 form-control-sm" id="inlineFormEmail" />
                                            
                                            <label htmlFor="inlineFormEmail" className="m-2">Short Name <span class="text-danger">*</span></label>
                                            <input type="email" className="form-control m-2 form-control-sm" id="inlineFormEmail" />
                                            <label htmlFor="inlineFormEmail" className="m-2">Code <span class="text-danger">*</span></label>
                                            <input type="email" className="form-control m-2 form-control-sm" id="inlineFormEmail" />
                                            <label htmlFor="inlineFormEmail" className="m-2">is Active<span class="text-danger">*</span></label>
                                            <input className="form-check-input" type="checkbox"/>
                                            
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <button type="button" className="btn btn-primary btn-sm m-2">Save</button>
                                            <button type="button" className="btn btn-warning btn-sm m-2">Reset</button>
                                        </div>

                                </div>
                                <div className="card-tools">
                                    <div className="input-group input-group-sm" style={{width: 200}}>
                                    
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
                            <div className="card-body" style={{height: 500}}>
                                <table className="table table-bordered table-hover text-nowrap">
                                <thead>
                                    <tr>
                                    <th>#ID</th>
                                    <th>Name</th>
                                    <th>Short Name</th>
                                    <th>Code</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Product 1</td>
                                        <td>PED1</td>
                                        <td>P1</td>
                                        <td><span className="badge badge-success">Active</span></td>
                                        <td className="project-actions ">
                                            <a className="btn btn-info btn-sm" href="#" data-toggle="modal" data-target="#user-model"><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-deleteUser"><i className="fas fa-trash"></i>Delete</a>&nbsp;&nbsp;
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Product 2</td>
                                        <td>PED2</td>
                                        <td>P2</td>
                                        <td><span className="badge badge-success">Active</span></td>
                                        <td className="project-actions ">
                                            <a className="btn btn-info btn-sm" href="#" data-toggle="modal" data-target="#user-model"><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-deleteUser"><i className="fas fa-trash"></i>Delete</a>&nbsp;&nbsp;
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Product 3</td>
                                        <td>PED33</td>
                                        <td>P3</td>
                                        <td><span className="badge badge-success">Active</span></td>
                                        <td className="project-actions ">
                                            <a className="btn btn-info btn-sm" href="#" data-toggle="modal" data-target="#user-model"><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-deleteUser"><i className="fas fa-trash"></i>Delete</a>&nbsp;&nbsp;
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
            </div>
        )
    }
}

export default PedProduct
