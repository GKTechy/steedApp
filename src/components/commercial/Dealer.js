import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
export class Dealer extends Component {
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
                                            {/* <Link to="/addDealer"><button type="button" className="btn btn-primary btn-flat" >Create New Dealer &nbsp;&nbsp;<i class="fas fa-plus"></i></button></Link> */}
                                            <button type="button" className="btn btn-primary btn-flat" >Create New Dealer &nbsp;&nbsp;<i class="fas fa-plus"></i></button>
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
                                <table className="table table-bordered table-hover text-nowrap">
                                <thead>
                                    <tr>
                                    <th>#ID</th>
                                    <th>Dealer Code</th>
                                    <th>DealerName</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Dealer 1</td>
                                        <td>John Doe</td>
                                        <td><span className="badge badge-success">Active</span></td>
                                        <td className="project-actions ">
                                            <a className="btn btn-primary btn-sm" href="#" data-toggle="modal" data-target="#user-model"><i className="fas fa-folder"></i>&nbsp;&nbsp;View</a>&nbsp;&nbsp;
                                            <a className="btn btn-info btn-sm" href="#" data-toggle="modal" data-target="#user-model"><i className="fas fa-pencil-alt"></i>&nbsp;&nbsp;Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-deleteUser"><i className="fas fa-trash"></i>&nbsp;&nbsp;Delete</a>&nbsp;&nbsp;
                                         
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Dealer 12</td>
                                        <td>John Doe</td>
                                        <td><span className="badge badge-success">Active</span></td>
                                        <td className="project-actions ">
                                            <a className="btn btn-primary btn-sm" href="#" data-toggle="modal" data-target="#user-model"><i className="fas fa-folder"></i>&nbsp;&nbsp;View</a>&nbsp;&nbsp;
                                            <a className="btn btn-info btn-sm" href="#" data-toggle="modal" data-target="#user-model"><i className="fas fa-pencil-alt"></i>&nbsp;&nbsp;Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-deleteUser"><i className="fas fa-trash"></i>&nbsp;&nbsp;Delete</a>&nbsp;&nbsp;
                                            
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Dealer 13</td>
                                        <td>John Doe</td>
                                        <td><span className="badge badge-success">Active</span></td>
                                        <td className="project-actions ">
                                            <a className="btn btn-primary btn-sm" href="#" data-toggle="modal" data-target="#user-model"><i className="fas fa-folder"></i>&nbsp;&nbsp;View</a>&nbsp;&nbsp;
                                            <a className="btn btn-info btn-sm" href="#" data-toggle="modal" data-target="#user-model"><i className="fas fa-pencil-alt"></i>&nbsp;&nbsp;Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-deleteUser"><i className="fas fa-trash"></i>&nbsp;&nbsp;Delete</a>&nbsp;&nbsp;
                                          
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Dealer 14</td>
                                        <td>John Doe</td>
                                        <td><span className="badge badge-danger">Active</span></td>
                                        <td className="project-actions ">
                                            <a className="btn btn-primary btn-sm" href="#" data-toggle="modal" data-target="#user-model"><i className="fas fa-folder"></i>&nbsp;&nbsp;View</a>&nbsp;&nbsp;
                                            <a className="btn btn-info btn-sm" href="#" data-toggle="modal" data-target="#user-model"><i className="fas fa-pencil-alt"></i>&nbsp;&nbsp;Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-deleteUser"><i className="fas fa-trash"></i>&nbsp;&nbsp;Delete</a>&nbsp;&nbsp;
                                         
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
                            <h4 className="modal-title">New Dealer</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">


                       <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    
                                <div className="card card-primary card-outline direct-chat direct-chat-primary collapsed-card">
                                        <div className="card-header">
                                            <h3 className="card-title">Personal</h3>
                                            <div className="card-tools">
                                            
                                            <button type="button" className="btn btn-tool bg-primary" data-card-widget="collapse">
                                                <i className="fas fa-plus" />
                                            </button>
                                        
                                            </div>
                                        </div>
                                        <div className="card-body" style={{display: 'none'}}>

                                            <form>
                                                    <div className="form-row m-2">
                                                        <div className="form-group col-md-4">
                                                        <label htmlFor="inputEmail4">Customer Code <span class="text-danger">*</span></label>
                                                        <input type="text" className="form-control form-control-sm" id="inputEmail4" placeholder="Customer Code " />
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                        <label htmlFor="inputPassword4">Name <span class="text-danger">*</span></label>
                                                        <input type="text" className="form-control form-control-sm" id="inputPassword4" placeholder="Name" />
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                        <label htmlFor="inputPassword4">Phone</label>
                                                        <input type="text" className="form-control form-control-sm" id="inputPassword4" placeholder="Phone" />
                                                        </div>
                                                    </div>
                                                    <div className="form-row m-2">
                                                        <div className="form-group col-md-4">
                                                        <label htmlFor="inputEmail4">Contact Person</label>
                                                        <input type="text" className="form-control form-control-sm" id="inputEmail4" placeholder="Contact Person " />
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                        <label htmlFor="inputPassword4">Mobile</label>
                                                        <input type="text" className="form-control form-control-sm" id="inputPassword4" placeholder="Mobile" />
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                        <label htmlFor="inputPassword4">Contact Person Phone</label>
                                                        <input type="text" className="form-control form-control-sm" id="inputPassword4" placeholder="Contact Person  Phone No" />
                                                        </div>
                                                    </div>
                                                    <div className="form-row m-2">
                                                        <div className="form-group col-md-4">
                                                        <label htmlFor="inputEmail4">Email</label>
                                                        <input type="text" className="form-control form-control-sm" id="inputEmail4" placeholder="Email" />
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                        <label htmlFor="inputPassword4">Fax</label>
                                                        <input type="text" className="form-control form-control-sm" id="inputPassword4" placeholder="Fax" />
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                        <label htmlFor="inputPassword4">PAN</label>
                                                        <input type="text" className="form-control form-control-sm" id="inputPassword4" placeholder="PAN" />
                                                        </div>
                                                    </div>
                                                    <div className="form-row m-2">
                                                        <div className="form-group col-md-4">
                                                        <label htmlFor="inputEmail4">Service Tax No</label>
                                                        <input type="text" className="form-control form-control-sm" id="inputEmail4" placeholder="Service Tax No" />
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                        <label htmlFor="inputPassword4">CST</label>
                                                        <input type="text" className="form-control form-control-sm" id="inputPassword4" placeholder="CST" />
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                        <label htmlFor="inputPassword4">Sales Tax No</label>
                                                        <input type="text" className="form-control form-control-sm" id="inputPassword4" placeholder="Sales Tax No" />
                                                        </div>
                                                    </div>
                                                   
                                                    <div className="form-row m-2">
                                                        <div className="form-group col-md-4">
                                                        <label htmlFor="inputEmail4">Remarks</label>
                                                        <input type="text" className="form-control form-control-sm" id="inputEmail4" placeholder="Remarks" />
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                        <label htmlFor="inputPassword4">TIN</label>
                                                        <input type="text" className="form-control form-control-sm" id="inputPassword4" placeholder="TIN" />
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                        <label htmlFor="inputPassword4">Is Active</label>
                                                        <input type="text" className="form-control form-control-sm" id="inputPassword4" placeholder="Sales Tax No" />
                                                        </div>
                                                    </div>
                                                 </form>

                                        </div>
                                    
                                    </div>

                                    <div className="card card-success card-outline direct-chat direct-chat-primary collapsed-card">
                                        <div className="card-header">
                                            <h3 className="card-title">Address</h3>
                                            <div className="card-tools">
                                            
                                            <button type="button" className="btn btn-tool bg-primary" data-card-widget="collapse">
                                                <i className="fas fa-plus" />
                                            </button>
                                        
                                            </div>
                                        </div>
                                        <div className="card-body" style={{display: 'none'}}>
                                            <div className="direct-chat-messages">
                                        
                                        
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card card-warning card-outline direct-chat direct-chat-primary collapsed-card">
                                        <div className="card-header">
                                            <h3 className="card-title">Contact Person</h3>
                                            <div className="card-tools">
                                            
                                            <button type="button" className="btn btn-tool bg-primary" data-card-widget="collapse">
                                                <i className="fas fa-plus" />
                                            </button>
                                        
                                            </div>
                                        </div>
                                        <div className="card-body" style={{display: 'none'}}>
                                            <div className="direct-chat-messages">
                                        
                                        
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="card card-danger card-outline direct-chat direct-chat-primary collapsed-card">
                                        <div className="card-header">
                                            <h3 className="card-title">Bank Details</h3>
                                            <div className="card-tools">
                                            
                                            <button type="button" className="btn btn-tool bg-primary" data-card-widget="collapse">
                                                <i className="fas fa-plus" />
                                            </button>
                                        
                                            </div>
                                        </div>
                                        <div className="card-body" style={{display: 'none'}}>
                                            <div className="direct-chat-messages">
                                        
                                        
                                            </div>
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

export default Dealer
