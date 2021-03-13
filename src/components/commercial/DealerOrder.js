import React, { Component } from 'react'

export class DealerOrder extends Component {

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
                                 <div className="row">
                                    <div className="col-5">
                                         <form className="form-inline">
                                            <label htmlFor="exampleSelectRounded0" className="my-1 mr-2" >Dealer</label>
                                            <select className="form-control form-control-sm" id="exampleSelectRounded0">
                                                <option>Value 1</option>
                                                <option>Value 2</option>
                                                <option>Value 3Value 3Value 3Value 3</option>
                                            </select>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <label htmlFor="exampleSelectRounded0" className="my-1 mr-2" >Product</label>
                                            <select className="form-control form-control-sm" id="exampleSelectRounded0">
                                                <option>Product 1</option>
                                                <option>Product 2</option>
                                                <option>Product 444444444444444</option>
                                            </select>

                                        </form>
                                     </div>
                                    </div>
                                    <div className="row my-2">
                                        <form className="form-inline">
                                            <label className="my-1 mr-2" for="inlineFormCustomSelectPref">PO Doc No</label>
                                            <input type="text" class="form-control form-control-sm" id="validationDefault05" placeholder="PO Doc No" required />&nbsp;&nbsp;&nbsp;
                                            <label className="my-1 mr-2" for="inlineFormCustomSelectPref">To No</label>
                                            <input type="text" class="form-control form-control-sm" id="validationDefault05" placeholder="PO Doc No" required />&nbsp;&nbsp;&nbsp;

                                            <label className="my-1 mr-2" for="inlineFormCustomSelectPref">PO Doc Date</label>
                                            <input type="date" class="form-control form-control-sm" id="validationDefault05" placeholder="PO Doc No" required />&nbsp;&nbsp;&nbsp;
                                            <label className="my-1 mr-2" for="inlineFormCustomSelectPref">To Date</label>
                                            <input type="date" class="form-control form-control-sm" id="validationDefault05" placeholder="PO Doc No" required />

                                        </form>    
                                    </div> 
                                   
                            </div>
                            
                            <div className="card-body" style={{height: 500}}>
                                <table className="table table-bordered table-hover text-nowrap">
                                <thead>
                                    <tr>
                                    <th>#ID</th>
                                    <th>Doc No</th>
                                    <th>Doc Date</th>
                                    <th>PO No</th>
                                    <th>Customer</th>
                                    <th>Consign</th>
                                    <th>Product</th>
                                    <th>Cs NO</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>CP0202010003</td>
                                        <td>27-OCT-2020</td>
                                        <td>ceeyes store stock</td>
                                        <td>DIESEL LOCOMOTIVE STOCKS</td>
                                        <td>DIESEL LOCOMOTIVE STOCKS</td>
                                        <td>EM 16-710G96</td>
                                        <td>YES</td>
                                        <td><span className="badge badge-success">Active</span></td>
                                        <td className="project-actions ">
                                            <a className="btn btn-primary btn-sm" href="#" data-toggle="modal" data-target="#user-model"><i className="fas fa-folder"></i>&nbsp;&nbsp;View</a>&nbsp;&nbsp;
                                            <a className="btn btn-info btn-sm" href="#" data-toggle="modal" data-target="#user-model"><i className="fas fa-pencil-alt"></i>&nbsp;&nbsp;Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-deleteUser"><i className="fas fa-trash"></i>&nbsp;&nbsp;Delete</a>&nbsp;&nbsp;
                                         
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>CP0202010003</td>
                                        <td>27-OCT-2020</td>
                                        <td>ceeyes store stock</td>
                                        <td>DIESEL LOCOMOTIVE STOCKS</td>
                                        <td>DIESEL LOCOMOTIVE STOCKS</td>
                                        <td>EM 16-710G96</td>
                                        <td>YES</td>
                                        <td><span className="badge badge-success">Active</span></td>
                                        <td className="project-actions ">
                                            <a className="btn btn-primary btn-sm" href="#" data-toggle="modal" data-target="#user-model"><i className="fas fa-folder"></i>&nbsp;&nbsp;View</a>&nbsp;&nbsp;
                                            <a className="btn btn-info btn-sm" href="#" data-toggle="modal" data-target="#user-model"><i className="fas fa-pencil-alt"></i>&nbsp;&nbsp;Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-deleteUser"><i className="fas fa-trash"></i>&nbsp;&nbsp;Delete</a>&nbsp;&nbsp;
                                         
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>CP0202010003</td>
                                        <td>27-OCT-2020</td>
                                        <td>ceeyes store stock</td>
                                        <td>DIESEL LOCOMOTIVE STOCKS</td>
                                        <td>DIESEL LOCOMOTIVE STOCKS</td>
                                        <td>EM 16-710G96</td>
                                        <td>YES</td>
                                        <td><span className="badge badge-success">Active</span></td>
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
            </div>
        )
    }
}

export default DealerOrder
