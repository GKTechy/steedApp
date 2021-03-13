import React, { Component } from 'react'

export class CSRegeneration extends Component {
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
                                            <label htmlFor="exampleSelectRounded0" className="my-1 mr-2" >Work Order</label>
                                            <select className="form-control form-control-sm" id="exampleSelectRounded0">
                                                <option>Order No 1</option>
                                                <option>Order No 2</option>
                                                <option>Order No 444444444444444</option>
                                            </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <label htmlFor="exampleSelectRounded0" className="my-1 mr-2" >Product</label>
                                            <input type="text" class="form-control form-control-sm" id="validationDefault05" placeholder="product" disabled/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <button className="btn btn-primary">Generate</button>
                                        </form>
                                     </div>
                                </div><br></br>
                                <div className="row">
                                     <div class="card-body">
                                        <p class="text-primary">Text light blue to emphasize info (2)</p>
                                        <p class="text-primary">Text light blue to emphasize info (2)</p>
                                        <p class="text-primary">Text light blue to emphasize info (2)</p>
                                        <p class="text-primary">Text light blue to emphasize info (2)</p>
                                        <p class="text-primary">Text light blue to emphasize info (2)</p>
                                        <p class="text-primary">Text light blue to emphasize info (2)</p>

                                    </div>
                                </div>
                                <button className="btn btn-primary">Save</button>&nbsp;&nbsp;&nbsp;
                                <button className="btn btn-danger">Rest</button>
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

export default CSRegeneration
