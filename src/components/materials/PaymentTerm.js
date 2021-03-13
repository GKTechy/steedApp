import React, { Component } from 'react'
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css"
import "datatables.net-bs4/js/dataTables.bootstrap4.min.js"

import $ from 'jquery';

export class PaymentTerm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    componentDidMount(){
        $(document).ready(function () {
            $('#paymentterm_master_table').DataTable();
            
        });

    }
    
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
                                        <div className="input-group input-group-sm">
                                            <span className="input-group-append">
                                                <button type="button" className="btn btn-primary btn-flat" data-toggle="modal" data-target="#new-paymentterm-model">New Payment Term&nbsp;&nbsp;<i class="fas fa-plus"></i></button>
                                            </span>
                                        </div>

                                </div>

                            </div>
                            <div className="card-body">
                            <table id="paymentterm_master_table" className="table table-bordered table-striped">
                                <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>Content</th>
                                    <th>Active</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {/* {
                                    this.state.uomList.map((item) =>
                                    
                                    <tr key={item.id}>
                                        
                                        <td>{item.code}</td>
                                        <td><span className="tag tag-success">{item.desc}</span></td>
                                        <td className="project-actions ">
                                            <a className="btn btn-info btn-sm" href="#"><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-default"><i className="fas fa-trash"></i>Delete</a>
                                        </td>
                                    </tr>
                                )} */}
                                </tbody>
                                <tfoot>
                                <tr>
                                    <th>Description</th>
                                    <th>Content</th>
                                    <th>Active</th>
                                    <th>Action</th>
                                </tr>
                                </tfoot>
                            </table>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>

                <div className="modal fade" id="new-paymentterm-model">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">New Payment Term</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                                <div className="container-fluid">
                                    <div className="form-inline">
                                      
                                        <label htmlFor="name" className="m-2 col-sm-2" >Description<span class="text-danger">*</span></label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-8" id="Description" />
                                        <label htmlFor="code" className="m-2 col-sm-2" >Content<span class="text-danger">*</span></label>
                                        &nbsp;&nbsp;
                                        <textarea class="col-sm-8 form-control" placeholder="Content" ng-model="myTextarea" required data-error="Please enter Content"></textarea>

                                        <label htmlFor="name" className="m-2 col-sm-2">Active<span class="text-danger">*</span></label>
                                        <input type="checkbox" className="form-check-input m-1" id="isactive" />
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

            </div>
        )
    }
}

export default PaymentTerm
