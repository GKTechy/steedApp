import React, { Component } from 'react'

export class Bom extends Component {
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
                                         
                                            <label htmlFor="inlineFormEmail" className="m-2">Copy From </label>
                                            <select className="form-control form-control-sm">
                                                <option>Process 1</option>
                                                <option>Process 2</option>
                                                <option>Process 3</option>
                                                <option>Process 4</option>
                                                <option>Process 5</option>
                                            </select>
                                            &nbsp;&nbsp;&nbsp;
                                            <button type="button" className="btn btn-primary btn-flat btn-sm">Search &nbsp;&nbsp;<i class="fas fa-search"></i></button>
                                        </div>

                                </div>
                                <div className="card-tools">
                                   
                                </div>
                            </div>
                            
                            <div className="card-body" style={{height: 500}}>
                                <table className="table table-bordered table-hover text-nowrap">
                                <thead>
                                    <tr>
                                    <th style={{width: 30}}>#ID</th>
                                    <th>Item Type</th>
                                    <th>Item Name</th>
                                    <th>Qty</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>AC</td>
                                        <td>AC00001-PIPE</td>
                                        <td><input type="text" name="table_search" className="form-control  col-3" placeholder="Qty Nos" /> </td>
                                       
                                        
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>AC</td>
                                        <td>AC00002-ELASTIC</td>
                                        <td><input type="text" name="table_search" className="form-control col-3" placeholder="Qty Nos" /> </td>
                                   
                                        
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>AC</td>
                                        <td>AC00001-SPECIAL STUD</td>
                                        <td><input type="text" name="table_search" className="form-control col-3" placeholder="Qty Nos" /> </td>
                                     
                                        
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

export default Bom
