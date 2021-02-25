import React, { Component } from 'react'
import Bom from './Bom'

import PedProcess from './PedProcess'
import PedProcessFlow from './PedProcessFlow'
import PedProduct from './PedProduct'

export class PEDMaster extends Component {
    render() {
        return (
            <div className="content">
                <section className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-12">
                        <div className="card card-primary card-tabs">
                            <div className="card-header p-0 pt-1">
                            <ul className="nav nav-tabs" id="custom-tabs-two-tab" role="tablist">
                                <li className="pt-2 px-3"><h3 className="card-title">PED Master</h3></li>
                                <li className="nav-item">
                                <a className="nav-link active" id="custom-tabs-two-home-tab" data-toggle="pill" href="#custom-tabs-process" role="tab" aria-controls="custom-tabs-two-home" aria-selected="true">Processes</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" id="custom-tabs-two-profile-tab" data-toggle="pill" href="#custom-tabs-two-processFlow" role="tab" aria-controls="custom-tabs-two-profile" aria-selected="false">ProcessFlow</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" id="custom-tabs-two-messages-tab" data-toggle="pill" href="#custom-tabs-product" role="tab" aria-controls="custom-tabs-two-messages" aria-selected="false">Products</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="custom-tabs-two-messages-tab1" data-toggle="pill" href="#custom-tabs-bom" role="tab" aria-controls="custom-tabs-two-messages1" aria-selected="false">BOM</a>
                                </li>
                                
                            </ul>
                            </div>
                            <div className="card-body" >
                            <div className="tab-content" id="custom-tabs-two-tabContent">
                                <div className="tab-pane fade show active" id="custom-tabs-process" role="tabpanel" aria-labelledby="custom-tabs-two-home-tab">
                                    <PedProcess/>
                                </div>
                                <div className="tab-pane fade" id="custom-tabs-two-processFlow" role="tabpanel" aria-labelledby="custom-tabs-two-profile-tab">
                                    <PedProcessFlow/>
                                </div>
                                <div className="tab-pane fade" id="custom-tabs-product" role="tabpanel" aria-labelledby="custom-tabs-two-messages-tab">
                                    <PedProduct/>
                                </div>
                                <div className="tab-pane fade" id="custom-tabs-bom" role="tabpanel" aria-labelledby="custom-tabs-two-messages-tab1">
                                    <Bom/>
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

export default PEDMaster
