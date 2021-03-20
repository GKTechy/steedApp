import React, { Component } from 'react'

export class Supplier extends Component {

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
                        <div className="row">
                        <div className="col-12">
                            <div className="card">
                            <div className="card-header">
                                <div className="card-title">
                                        <div className="input-group input-group-sm">
                                            <span className="input-group-append">
                                            <button type="button" className="btn btn-primary btn-flat" data-toggle="modal" data-target="#new_supplier">Create New Supplier &nbsp;&nbsp;<i class="fas fa-plus"></i></button>
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
                                    <th>Code</th>
                                    <th>Name</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Supplier 1</td>
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
                                        <td>Supplier 12</td>
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
                                        <td>Supplier 13</td>
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
                                        <td>Supplier 14</td>
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

                <div className="modal fade" id="new_supplier">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">New Supplier</h4>
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
                                                        <label htmlFor="inputEmail4">Supplier Code <span class="text-danger">*</span></label>
                                                        <input type="text" className="form-control form-control-sm" id="inputEmail4" placeholder="Supplier Code " />
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
                                                        <label htmlFor="inputEmail4">Email</label>
                                                        <input type="text" className="form-control form-control-sm" id="inputEmail4" placeholder="Email" />
                                                        </div>
                                                    </div>
                                                    <div className="form-row m-2">
                                                       
                                                        <div className="form-group col-md-4">
                                                        <label htmlFor="inputPassword4">Fax</label>
                                                        <input type="text" className="form-control form-control-sm" id="inputPassword4" placeholder="Fax" />
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                        <label htmlFor="inputPassword4">GST</label>
                                                        <input type="text" className="form-control form-control-sm" id="inputPassword4" placeholder="GST" />
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                        <label htmlFor="inputPassword4">PAN</label>
                                                        <input type="text" className="form-control form-control-sm" id="inputPassword4" placeholder="PAN" />
                                                        </div>
                                                    </div>
                                                   
                                                   
                                                    <div className="form-row m-2">
                                                        
                                                        <div className="form-group col-md-4">
                                                        <label htmlFor="inputEmail4">Remarks</label>
                                                        <input type="text" className="form-control form-control-sm" id="inputEmail4" placeholder="Remarks" />
                                                        </div>
                                                       
                                                        <div className="col-md-4 form-inline">
                                                        <label htmlFor="inputPassword4">Is Active</label>&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <input type="checkbox" className="form-control form-control-sm" id="inputPassword4" placeholder="" />
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
                                            <form>

                                                    <div className="form-row m-2">
                                                        <div className="form-group col-md-6">
                                                        <label htmlFor="inputEmail4">Address Name</label>
                                                        <input type="text" className="form-control form-control-sm" id="inputEmail4" placeholder="Address Name" />
                                                        </div>
                                                        <div className="col-md-6 form-inline">
                                                        <label htmlFor="inputPassword4">Is Default Address</label>&nbsp;&nbsp;&nbsp;
                                                        <input type="checkbox" className="form-control form-control-sm" id="inputPassword4" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div className="form-row m-2">
                                                        <div className="form-group col-md-6">
                                                        <label htmlFor="inputEmail4">Address 1</label>
                                                        <input type="text" className="form-control form-control-sm" id="inputEmail4" placeholder="Address 1" />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                        <label htmlFor="inputPassword4">Phone</label>
                                                        <input type="text" className="form-control form-control-sm" id="inputPassword4" placeholder="Phone" />
                                                        </div>
                                                    </div>
                                                    <div className="form-row m-2">
                                                        <div className="form-group col-md-6">
                                                        <label htmlFor="inputEmail4">Address 2</label>
                                                        <input type="text" className="form-control form-control-sm" id="inputEmail4" placeholder="Address 2" />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                        <label htmlFor="inputPassword4">Phone 2</label>
                                                        <input type="text" className="form-control form-control-sm" id="inputPassword4" placeholder="Mobile" />
                                                        </div>
                                                    </div>
                                                    <div className="form-row m-2">
                                                        <div className="form-group col-md-6">
                                                        <label htmlFor="inputEmail4">Address 3</label>
                                                        <input type="text" className="form-control form-control-sm" id="inputEmail4" placeholder="Address 3" />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                        <label htmlFor="inputPassword4">Phone 3</label>
                                                        <input type="text" className="form-control form-control-sm" id="inputPassword4" placeholder="Fax" />
                                                        </div>
                                                    </div>
                                                    <div className="form-row m-2">
                                                        <div className="form-group col-md-6">
                                                        <label htmlFor="inputEmail4">City</label>
                                                        <input type="text" className="form-control form-control-sm" id="inputEmail4" placeholder="City" />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                        <label htmlFor="inputEmail4">Pin Code</label>
                                                        <input type="text" className="form-control form-control-sm" id="inputEmail4" placeholder="Pin Code" />
                                                        </div>
                                                    </div>
                                                    <div className="form-row m-2">
                                                        <div className="form-group col-md-6">
                                                        <label htmlFor="inputEmail4">State</label>
                                                        <input type="text" className="form-control form-control-sm" id="inputEmail4" placeholder="State" />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                        <label htmlFor="inputPassword4">Country</label>
                                                        <input type="text" className="form-control form-control-sm" id="inputPassword4" placeholder="Country" />
                                                        </div>
                                                    </div>
                                                   
                                            </form>
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

            </div>
        )
    }
}

export default Supplier
