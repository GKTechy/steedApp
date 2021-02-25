import React, { Component } from 'react'

export class PedProcessFlow extends Component {
    render() {
        return (
            <div>
                  <section className="content">
            <div className="container-fluid">
                   
                        <div className="row">
                        <div className="col-12">
                            <div className="card">
                            <div className="card-header">
                                <div className="card-title">
                                         <div className="form-inline">
                                             <label htmlFor="inlineFormEmail" className="m-2">Product </label>
                                            <select className="form-control form-control-sm">
                                                <option>Product 1</option>
                                                <option>Product 2</option>
                                                <option>Product 3</option>
                                                <option>Product 4</option>
                                                <option>Product 5</option>
                                            </select>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                       
                                            <label htmlFor="inlineFormEmail" className="m-2">Operation No <span class="text-danger">*</span></label>
                                            <input type="email" className="form-control m-2 form-control-sm" id="inlineFormEmail" />
                                            <label htmlFor="inlineFormEmail" className="m-2">Process Name </label>
                                            <select className="form-control form-control-sm">
                                                <option>Process 1</option>
                                                <option>Process 2</option>
                                                <option>Process 3</option>
                                                <option>Process 4</option>
                                                <option>Process 5</option>
                                            </select>
                                            <label htmlFor="inlineFormEmail" className="m-2">Cycle Time <span class="text-danger">*</span></label>
                                            <input type="email" className="form-control m-2 form-control-sm" id="inlineFormEmail" />
                                            <button type="button" className="btn btn-primary btn-flat btn-sm">Add &nbsp;&nbsp;<i class="fas fa-plus"></i></button>
                                        </div>

                                </div>
                                <div className="card-tools">
                                   
                                </div>
                            </div>
                            
                            <div className="card-body" style={{height: 500}}>
                                <table className="table table-bordered table-hover text-nowrap">
                                <thead>
                                    <tr>
                                    <th>#ID</th>
                                    <th>Operation No</th>
                                    <th>Process Name</th>
                                    <th>Cycle Time</th>
                                    <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>10</td>
                                        <td>Raw Material Cutting</td>
                                        <td>30</td>
                                        <td className="project-actions ">
                                            <a className="btn btn-info btn-sm" href="#" data-toggle="modal" data-target="#user-model"><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-deleteUser"><i className="fas fa-trash"></i>Delete</a>&nbsp;&nbsp;
                                        </td>
                                        
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>20</td>
                                        <td>CENTERING</td>
                                        <td>30</td>
                                        <td className="project-actions ">
                                            <a className="btn btn-info btn-sm" href="#" data-toggle="modal" data-target="#user-model"><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-deleteUser"><i className="fas fa-trash"></i>Delete</a>&nbsp;&nbsp;
                                        </td>
                                        
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>30</td>
                                        <td>DEEP HOLE DRILLING</td>
                                        <td>30</td>
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

export default PedProcessFlow
