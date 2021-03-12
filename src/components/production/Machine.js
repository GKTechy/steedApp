import React, { Component } from 'react'

export class Machine extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        const leftAlign={
            textAlign: 'left'
        };

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
                                                <button type="button" className="btn btn-primary btn-flat" data-toggle="modal" data-target="#new-machine">Create New Machine &nbsp;&nbsp;<i class="fas fa-plus"></i></button>
                                            </span>
                                        </div>
                                </div>
                            
                            </div>
                            <div className="card-body" style={{height: 300}}>
                                <table className="table table-bordered table-hover text-nowrap">
                                <thead>
                                    <tr>
                                    <th>#SNo</th>
                                    <th>Machine Code</th>
                                    <th>Machine Name</th>
                                    <th>Capacity</th>
                                    <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>CSMR/PO2/17</td>
                                        <td>TAPE POLISHING</td>
                                        <td>    ABC-2250M,CH-MO4,MM</td>
                                        <td className="project-actions ">
                                            <a className="btn btn-info btn-sm" href="#" data-toggle="modal" data-target="#user-model"><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-deleteUser"><i className="fas fa-trash"></i>Delete</a>&nbsp;&nbsp;
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>CSMR/PO2/17</td>
                                        <td>TAPE POLISHING</td>
                                        <td>    ABC-2250M,CH-MO4,MM</td>
                                        <td className="project-actions ">
                                            <a className="btn btn-info btn-sm" href="#" data-toggle="modal" data-target="#user-model"><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-deleteUser"><i className="fas fa-trash"></i>Delete</a>&nbsp;&nbsp;
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>3</td>
                                        <td>CSMR/PO2/17</td>
                                        <td>TAPE POLISHING</td>
                                        <td>    ABC-2250M,CH-MO4,MM</td>
                                        <td className="project-actions ">
                                            <a className="btn btn-info btn-sm" href="#" data-toggle="modal" data-target="#user-model"><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-deleteUser"><i className="fas fa-trash"></i>Delete</a>&nbsp;&nbsp;
                                        </td>
                                    </tr>

                                </tbody>
                                </table>
                            </div>
                          
                            </div>
                            
                        </div>
                        </div>
                   
                       
                    </div>
            </section>


            <div className="modal fade" id="new-machine">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Machine</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">


                       <div className="container-fluid">
                            <form className="form-inline">
                                <label htmlFor="code" className="m-2 col-sm-2" style={leftAlign}>Machine Code <span class="text-danger">*</span></label>
                                <input type="text" className="form-control m-2 col-sm-3" id="Machine Code" />
                                <label htmlFor="name" className="m-2 col-sm-2" style={leftAlign}>Machine Name<span class="text-danger">*</span></label>
                                <input type="text" className="form-control m-2 col-sm-3" id="Machine Name" />
                                <label htmlFor="code" className="m-2 col-sm-2" style={{textAlign: "left !important"}}>Make</label>
                                <input type="text" className="form-control m-2 col-sm-3" id="Make" />
                                <label htmlFor="name" className="m-2 col-sm-2" style={leftAlign}>Type</label>
                                <input type="text" className="form-control m-2 col-sm-3" id="Type" />
                                <label htmlFor="name" className="m-2 col-sm-2" style={leftAlign}>Commissioning Date</label>
                                <input type="date" className="form-control m-2 col-sm-3" id="Date of Commissioning" />
                                <label htmlFor="code" className="m-2 col-sm-2" style={leftAlign}>Dispote Date</label>
                                <input type="date" className="form-control m-2 col-sm-3" id="Dispote Date" />
                                <label htmlFor="name" className="m-2 col-sm-2" style={leftAlign}>Inv No</label>
                                <input type="text" className="form-control m-2 col-sm-3" id="Inv No" />
                                <label htmlFor="code" className="m-2 col-sm-2">Inv Date</label>
                                <input type="date" className="form-control m-2 col-sm-3" id="Inv Date" />
                                <label htmlFor="name" className="m-2 col-sm-2">Inv Value</label>
                                <input type="text" className="form-control m-2 col-sm-3" id="Inv Value" />
                                <label htmlFor="name" className="m-2 col-sm-2">Location</label>
                                <input type="text" className="form-control m-2 col-sm-3" id="Location" />
                                <label htmlFor="name" className="m-2 col-sm-2">Status</label>
                                <input type="text" className="form-control m-2 col-sm-3" id="Status" />
                                <label htmlFor="name" className="m-2 col-sm-2">Capacity</label>
                                <input type="text" className="form-control m-2 col-sm-3" id="Capacity" />
                                <label htmlFor="name" className="m-2 col-sm-2">Is Active<span class="text-danger">*</span></label>
                                <input type="checkbox" className="form-check-input m-2 " id="isactive" />
                                <label htmlFor="name" className="m-2 col-sm-2">Is QC Machine <span class="text-danger">*</span> </label>
                                <input type="checkbox" className="form-check-input m-2" id="isqc" />


                            </form>
                              


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

export default Machine
