import React, { Component } from 'react'

export class CSGeneration extends Component {
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
                            <div className="card-body" style={{height: 500}}>

                                <div className="row">
                                    <div className="col-12">
                                         <form className="form-inline">
                                            <label htmlFor="exampleSelectRounded0" className="my-1 mr-2" >CS Document No</label>
                                            <input type="text" class="form-control form-control-sm" id="validationDefault05" placeholder="start No" required />&nbsp;
                                            <input type="text" class="form-control form-control-sm" id="validationDefault05" placeholder="end No" required />&nbsp;&nbsp;&nbsp;

                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <label htmlFor="exampleSelectRounded0" className="my-1 mr-2" >Date</label>
                                            <input type="date" class="form-control form-control-sm" id="validationDefault05" placeholder="date" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <label htmlFor="exampleSelectRounded0" className="my-1 mr-2" >Work Order</label>
                                            <select className="form-control form-control-sm" id="exampleSelectRounded0">
                                                <option>Order No 1</option>
                                                <option>Order No 2</option>
                                                <option>Order No 444444444444444</option>
                                            </select>
                                        </form>
                                     </div>
                                </div><br></br>
                                <div className="row">
                                    <div className="col-12">
                                         <form className="form-inline">
                                            <label htmlFor="exampleSelectRounded0" className="my-1 mr-2" >Product</label>
                                            <input type="text" class="form-control form-control-sm" id="validationDefault05" placeholder="product" disabled/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <label htmlFor="exampleSelectRounded0" className="my-1 mr-2" >Qty</label>
                                            <input type="text" class="form-control form-control-sm" id="validationDefault05" placeholder="start " required />&nbsp;
                                            <input type="text" class="form-control form-control-sm" id="validationDefault05" placeholder="end " required />&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <button className="btn btn-primary">Generate</button>
                                        </form>
                                     </div>
                                </div><br></br>
                                <div className="row">
                                    <div className="col-6">
                                         <form className="form-inline">
                                          
                                        </form>
                                     </div>
                                </div>
                                <br></br>
                                <table className="table table-bordered table-hover text-nowrap">
                                <thead>
                                    <tr>
                                    <th>#ID</th>
                                    <th>CS Identification No</th>
                                    <th>Segment</th>
                                    <th>Remarks</th>
                                    <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td><input type="text" class="form-control form-control-sm" id="validationDefault05" placeholder="end " required value="S2000008968574"/></td>
                                        <td><input type="text" class="form-control form-control-sm" id="validationDefault05" placeholder="end " required value="CANSTAT"/></td>
                                        <td><input type="text" class="form-control form-control-sm" id="validationDefault05" placeholder="end " required value=""/></td>
                                        <td className="project-actions ">
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-deleteUser"><i className="fas fa-trash"></i>Delete</a>&nbsp;&nbsp;
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td><input type="text" class="form-control form-control-sm" id="validationDefault05" placeholder="end " required value="S2000008968574"/></td>
                                        <td><input type="text" class="form-control form-control-sm" id="validationDefault05" placeholder="end " required value="CANSTAT"/></td>
                                        <td><input type="text" class="form-control form-control-sm" id="validationDefault05" placeholder="end " required value=""/></td>
                                        <td className="project-actions ">
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-deleteUser"><i className="fas fa-trash"></i>Delete</a>&nbsp;&nbsp;
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td><input type="text" class="form-control form-control-sm" id="validationDefault05" placeholder="end " required value="S2000008968574"/></td>
                                        <td><input type="text" class="form-control form-control-sm" id="validationDefault05" placeholder="end " required value="CANSTAT"/></td>
                                        <td><input type="text" class="form-control form-control-sm" id="validationDefault05" placeholder="end " required value=""/></td>
                                        <td className="project-actions ">
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
            </div>
        )
    }
}

export default CSGeneration
