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
                                    <div className="col-8">
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
                                   
                                 
                                   
                                   
                                </tbody>
                                </table>
                            </div>
                            <div class="card-footer clearfix">
                               
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
