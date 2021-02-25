import React, { Component } from 'react'

export class productionTransaction extends Component {
    render() {
        return (
            <div>
                <section className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-12">
                        <div className="card card-primary card-tabs">
                            <div className="card-header p-0 pt-1">
                            <ul className="nav nav-tabs" id="custom-tabs-two-tab" role="tablist">
                                <li className="pt-2 px-3"><h3 className="card-title">Production Transaction</h3></li>
                                <li className="nav-item">
                                    <a className="nav-link active" id="custom-tabs-1" data-toggle="pill" href="#tab-1" role="tab" aria-controls="custom-tabs-1" aria-selected="true">Material Issue Voucher</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="custom-tabs-2" data-toggle="pill" href="#tab-2" role="tab" aria-controls="custom-tabs-2" aria-selected="false">Material Issue Voucher</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="custom-tabs-3" data-toggle="pill" href="#tab-3" role="tab" aria-controls="custom-tabs-3" aria-selected="false">Daily Shift Output Data</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="custom-tabs-4" data-toggle="pill" href="#tab-4" role="tab" aria-controls="custom-tabs-4" aria-selected="false">Inspection Requisition Slip</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="custom-tabs-5" data-toggle="pill" href="#tab-5" role="tab" aria-controls="custom-tabs-5" aria-selected="false">CS HeatCode Entry</a>
                                </li>
                           
                            </ul>
                            </div>
                            <div className="card-body" style={{height: 700}}>
                            <div className="tab-content" id="custom-tabs-two-tabContent">
                                <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="custom-tabs-1">
                                    {/* <ManageUsers/> */}1
                                </div>
                                <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="custom-tabs-2">
                                    {/* <Roles/> */}2
                                </div>
                                <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="custom-tabs-3">
                                    {/* <NoteForApproval/> */}3
                                </div>
                                <div className="tab-pane fade" id="tab-4" role="tabpanel" aria-labelledby="custom-tabs-4">
                                    {/* <NoteForApproval/> */}4
                                </div>
                                <div className="tab-pane fade" id="tab-5" role="tabpanel" aria-labelledby="custom-tabs-5">
                                    {/* <NoteForApproval/> */}5
                                </div>
                                
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

export default productionTransaction
