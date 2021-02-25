import React, { Component } from 'react'

export class UserRoleMapping extends Component {
    render() {
        return (
            <div>
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-12">
                            <div className="card">
                            <div className="card-header">
                                    <div className="form-inline">
                                             <label htmlFor="inlineFormEmail" className="m-2">User Role </label>
                                            <select className="form-control">
                                                <option>Role 1</option>
                                                <option>Role 2</option>
                                                <option>Role 3</option>
                                                <option>Role 4</option>
                                                <option>Role 5</option>
                                            </select>
                                            <label htmlFor="inlineFormEmail" className="m-2">Module </label>
                                            <select className="form-control">
                                                <option>Module 1</option>
                                                <option>Module 2</option>
                                                <option>Module 3</option>
                                                <option>Module 4</option>
                                                <option>Module 5</option>
                                            </select>
                                        </div>
                            </div>
                            
                            <div className="card-body">
                                <div className="row">
                                   <table className="table table-hover">
                                            <tbody>
                                               
                                                <tr data-widget="expandable-table" aria-expanded="false">
                                                    <td>
                                                        <i className="fas fa-caret-right fa-fw" />
                                                        Admin
                                                    </td>
                                                </tr>
                                                <tr className="expandable-body d-none">
                                                        <td>
                                                            <div className="p-0" style={{display: 'none'}}>
                                                            <table className="table table-hover">
                                                                <tbody>
                                                                <tr data-widget="expandable-table" aria-expanded="false">
                                                                      <td>
                                                                    <i className="fas fa-caret-right fa-fw" />
                                                                    Master
                                                                    </td>
                                                                </tr>
                                                                <tr className="expandable-body d-none">
                                                                    <td>
                                                                    <div className="p-0" style={{display: 'none'}}>
                                                                        <table className="table table-hover">
                                                                        <tbody>
                                                                            <tr>
                                                                            <td>Manage Users</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <td>Roles</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <td>Note for Approval</td>
                                                                            </tr>
                                                                        </tbody>
                                                                        </table>
                                                                    </div>
                                                                    </td>
                                                                </tr>
                                                                <tr data-widget="expandable-table" aria-expanded="false">
                                                                      <td>
                                                                    <i className="fas fa-caret-right fa-fw" />
                                                                    Transaction
                                                                    </td>
                                                                </tr>
                                                                    <tr className="expandable-body d-none">
                                                                        <td>
                                                                        <div className="p-0" style={{display: 'none'}}>
                                                                            <table className="table table-hover">
                                                                            <tbody>
                                                                                <tr>
                                                                                <td>Users Role Mapping</td>
                                                                                </tr>
                                                                                <tr>
                                                                                <td>Roles Mapping</td>
                                                                                </tr>
                                                                               
                                                                            </tbody>
                                                                            </table>
                                                                        </div>
                                                                        </td>
                                                                    </tr>
                                                            
                                                                </tbody>
                                                            </table>
                                                            </div>
                                                        </td>
                                                </tr>
                                                <tr data-widget="expandable-table" aria-expanded="false">
                                                    <td>
                                                        <i className="fas fa-caret-right fa-fw" />
                                                         Production
                                                    </td>
                                                </tr>
                                            </tbody>
                                            </table>

                                </div>

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

export default UserRoleMapping
