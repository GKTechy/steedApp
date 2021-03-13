import React, { Component } from 'react'

export class MachineProcessMap extends Component {

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
                            <div className="form-group col-md-4">
                                <label htmlFor="exampleSelectRounded0">Machine Name</label>
                                <select className="custom-select rounded-0" id="exampleSelectRounded0">
                                    <option>M 1</option>
                                    <option>M 2</option>
                                    <option>M 3</option>
                                </select>
                                </div>


                            
                            </div>
                            <div className="card-body" style={{height: 300}}>
                                
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

export default MachineProcessMap
