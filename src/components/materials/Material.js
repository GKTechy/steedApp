import React, { Component } from 'react'

export class Material extends Component {

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
                                                <button type="button" className="btn btn-primary btn-flat" data-toggle="modal" data-target="#material-new-model">Create New  Material&nbsp;&nbsp;<i class="fas fa-plus"></i></button>
                                            </span>
                                        </div>

                                </div>

                            </div>
                            <div className="card-body">
                            <table id="material_master_table" className="table table-bordered table-striped">
                                <thead>
                                <tr>
                                    <th>Item Code</th>
                                    <th>Item Name</th>
                                    <th>Type</th>
                                    <th>Remarks</th>
                                    <th>HSN</th>
                                    <th>Price</th>
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
                                    <th>Item Code</th>
                                    <th>Item Name</th>
                                    <th>Type</th>
                                    <th>Remarks</th>
                                    <th>HSN</th>
                                    <th>Price</th>
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

                <div className="modal fade" id="material-new-model">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">New Material</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                                <div className="container-fluid">
                                    <div className="form-inline">
                                        <label htmlFor="code" className="m-2 col-sm-2" >Material Code<span class="text-danger">*</span></label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-3" id="Material Code" />
                                        <label htmlFor="code" className="m-2 col-sm-2" >Material Name<span class="text-danger">*</span></label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-3" id="Material Name" />
                                        <label htmlFor="code" className="m-2 col-sm-2" >Item Type<span class="text-danger">*</span></label>
                                        <select className="form-control m-2 col-sm-3" id="exampleSelectRounded0">
                                            <option>M 1</option>
                                            <option>M 2</option>
                                            <option>M 3</option>
                                        </select>
                                        <label htmlFor="name" className="m-2 col-sm-2" >Remarks</label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-3" id="Remarks" />
                                        <label htmlFor="code" className="m-2 col-sm-2" >MeasureMent Type<span class="text-danger">*</span></label>
                                        <select className="form-control m-2 col-sm-3" id="exampleSelectRounded0">
                                            <option>M 1</option>
                                            <option>M 2</option>
                                            <option>M 3</option>
                                        </select>
                                        <label htmlFor="name" className="m-2 col-sm-2" >Units</label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-3" id="Units" />
                                        <label htmlFor="name" className="m-2 col-sm-2" >Price</label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-3" id="Price" />
                                        <label htmlFor="name" className="m-2 col-sm-2" >Reference Level</label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-3" id="Reference Level" />
                                        <label htmlFor="code" className="m-2 col-sm-2" >Supplier Name<span class="text-danger">*</span></label>
                                        <select className="form-control m-2 col-sm-3" id="exampleSelectRounded0">
                                            <option>M 1</option>
                                            <option>M 2</option>
                                            <option>M 3</option>
                                        </select>
                                        <label htmlFor="name" className="m-2 col-sm-2" >HSN Code<span class="text-danger">*</span></label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-3" id="HSN Code" />
                          
                                      
                                        <label htmlFor="name" className="m-2 col-sm-2">Is Active<span class="text-danger">*</span></label>
                                        <input type="checkbox" className="form-check-input m-1" id="isactive" />
                                        <label htmlFor="name" className="m-2 col-sm-2">Is BOM<span class="text-danger">*</span></label>
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

export default Material
