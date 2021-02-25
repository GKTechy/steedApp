import React, { Component } from 'react'

export class ColorCode extends Component {
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
                                            <label htmlFor="inlineFormEmail" className="m-2">Order Code <span class="text-danger">*</span></label>
                                                <input type="email" className="form-control m-2 form-control-sm" id="inlineFormEmail" />
                                           
                                            <label htmlFor="inlineFormEmail" className="m-2">Color Code<span class="text-danger">*</span></label>
                                             <input type="email" className="form-control m-2 form-control-sm" id="inlineFormEmail" />
                                            
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <button type="button" className="btn btn-primary btn-sm m-2">Save</button>
                                            <button type="button" className="btn btn-warning btn-sm m-2">Reset</button>
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
                                <table className="table table-bordered table-hover text-nowrap">
                                <thead>
                                    <tr>
                                    <th>#ID</th>
                                    <th>Order Code </th>
                                    <th>Color Code</th>
                                    <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>SS-48-ST-RD-TB</td>
                                       <td>RED WITHBLACK - MAT</td>
                                        <td className="project-actions ">
                                            <a className="btn btn-info btn-sm" href="#" data-toggle="modal" data-target="#user-model"><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-deleteUser"><i className="fas fa-trash"></i>Delete</a>&nbsp;&nbsp;
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>SS-48-ST-WH-LB</td>
                                        <td>WHITE WITH BLACK - GLOSSY</td>
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

export default ColorCode
