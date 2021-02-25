import React, { Component } from 'react'

export class QualityMaster extends Component {
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
                                    <li className="pt-2 px-3"><h3 className="card-title">Quality Master</h3></li>
                                    <li className="nav-item">
                                     <a className="nav-link active" id="custom-tabs-1" data-toggle="pill" href="#tabs-1" role="tab" aria-controls="custom-tabs-1" aria-selected="true">CS Identification Register</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="custom-tabs-2" data-toggle="pill" href="#tabs-2" role="tab" aria-controls="custom-tabs-2" aria-selected="false">Instruments/ Gauges</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="custom-tabs-3" data-toggle="pill" href="#tabs-3" role="tab" aria-controls="custom-tabs-3" aria-selected="false">Calibaration Schedule</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="custom-tabs-4" data-toggle="pill" href="#tabs-4" role="tab" aria-controls="custom-tabs-4" aria-selected="false">CS(Rejected) Regenerate</a>
                                    </li>
                                </ul>
                                </div>
                                <div className="card-body" >
                                <div className="tab-content" id="custom-tabs-two-tabContent">
                                    <div className="tab-pane fade show active" id="tabs-1" role="tabpanel" aria-labelledby="custom-tabs-1">
                                        1
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

export default QualityMaster
