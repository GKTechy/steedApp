import React, { Component } from 'react'

export class CommercialReport extends Component {
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
                                    <li className="pt-2 px-3"><h3 className="card-title">Commercial Report</h3></li>
                                    <li className="nav-item">
                                     <a className="nav-link active" id="custom-tabs-two-home-tab" data-toggle="pill" href="#custom-tabs-1" role="tab" aria-controls="custom-tabs-two-home" aria-selected="true">Dealer</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="custom-tabs-two-profile-tab" data-toggle="pill" href="#custom-tabs-2" role="tab" aria-controls="custom-tabs-two-profile" aria-selected="false">Dealer Order</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="custom-tabs-two-profile-tab" data-toggle="pill" href="#custom-tabs-3" role="tab" aria-controls="custom-tabs-two-profile" aria-selected="false">EO Register</a>
                                    </li>
                                </ul>
                                </div>
                                <div className="card-body" >
                                <div className="tab-content" id="custom-tabs-two-tabContent">
                                    <div className="tab-pane fade show active" id="custom-tabs-1" role="tabpanel" aria-labelledby="custom-tabs-two-home-tab">
                                        
                                    </div>
                                    <div className="tab-pane fade" id="custom-tabs-2" role="tabpanel" aria-labelledby="custom-tabs-two-messages-tab">
                                        
                                    </div>
                                    <div className="tab-pane fade" id="custom-tabs-3" role="tabpanel" aria-labelledby="custom-tabs-two-messages-tab">
                                        
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

export default CommercialReport
