import React, { Component } from 'react'
import UserRoleMapping from './UserRoleMapping'

export default class AdminTransaction extends Component {
    render() {
        return (
            <div className="content">
            <section className="container-fluid">
                <div className="row">
                    <div className="col-12 col-12">
                    <div className="card card-primary card-tabs">
                        <div className="card-header p-0 pt-1">
                        <ul className="nav nav-tabs" id="custom-tabs-two-tab" role="tablist">
                            <li className="pt-2 px-3"><h3 className="card-title">Admin Transaction</h3></li>
                            <li className="nav-item">
                            <a className="nav-link active" id="custom-tabs-two-home-tab" data-toggle="pill" href="#custom-tabs-two-home" role="tab" aria-controls="custom-tabs-two-home" aria-selected="true">Employee User Mapping</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" id="custom-tabs-two-profile-tab" data-toggle="pill" href="#custom-tabs-two-profile" role="tab" aria-controls="custom-tabs-two-profile" aria-selected="false">Roles Menu Mapping</a>
                            </li>
                           
                        </ul>
                        </div>
                        <div className="card-body">
                        <div className="tab-content" id="custom-tabs-two-tabContent">
                            <div className="tab-pane fade show active" id="custom-tabs-two-home" role="tabpanel" aria-labelledby="custom-tabs-two-home-tab">
                                <UserRoleMapping/>
                            </div>
                            <div className="tab-pane fade" id="custom-tabs-two-profile" role="tabpanel" aria-labelledby="custom-tabs-two-profile-tab">
                                <UserRoleMapping/>
                            </div>
      
               
                        </div>
                        </div>
                        {/* /.card */}
                    </div>
                    </div>

                </div>
            </section>

        </div>
        )
    }
}
