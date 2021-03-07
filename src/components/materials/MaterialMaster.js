import React, { Component } from 'react'
import UOM from './UOM'

export class MaterialMaster extends Component {
    render() {
        return (
            <div>
            <div className="content">
                <section className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-12">
                        <div className="card card-primary card-tabs">
                            <div className="card-header p-0 pt-1">
                            <ul className="nav nav-tabs" id="custom-tabs-two-tab" role="tablist">
                                <li className="pt-2 px-3"><h3 className="card-title">Material Master</h3></li>
                                <li className="nav-item">
                                 <a className="nav-link active" id="custom-tabs-1" data-toggle="pill" href="#tabs-1" role="tab" aria-controls="custom-tabs-1" aria-selected="true">UOM</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="custom-tabs-2" data-toggle="pill" href="#tabs-2" role="tab" aria-controls="custom-tabs-2" aria-selected="false">Material Type</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="custom-tabs-3" data-toggle="pill" href="#tabs-3" role="tab" aria-controls="custom-tabs-3" aria-selected="false">Materials</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="custom-tabs-4" data-toggle="pill" href="#tabs-4" role="tab" aria-controls="custom-tabs-4" aria-selected="false">Supplier</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="custom-tabs-5" data-toggle="pill" href="#tabs-5" role="tab" aria-controls="custom-tabs-5" aria-selected="false">Payment Terms</a>
                                </li>
                            </ul>
                            </div>
                            <div className="card-body" >
                            <div className="tab-content" id="custom-tabs-two-tabContent">
                                <div className="tab-pane fade show active" id="tabs-1" role="tabpanel" aria-labelledby="custom-tabs-1">
                                        <UOM/>
                                </div>
                                <div className="tab-pane fade" id="tabs-2" role="tabpanel" aria-labelledby="custom-tabs-2">
                                    2
                                </div>
                                <div className="tab-pane fade" id="tabs-3" role="tabpanel" aria-labelledby="custom-tabs-3">
                                    3
                                </div>
                                <div className="tab-pane fade" id="tabs-4" role="tabpanel" aria-labelledby="custom-tabs-4">
                                    4
                                </div>
                                <div className="tab-pane fade" id="tabs-5" role="tabpanel" aria-labelledby="custom-tabs-5">
                                    5
                                </div>
                            </div>
                            </div>
                            
                        </div>
                        </div>

                    </div>
                </section>

            </div>
        </div>
        )
    }
}

export default MaterialMaster
