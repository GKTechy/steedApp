import React, { Component } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';



export class Roles extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            columns : [{
                dataField: 'id',
                text: 'ID',
                filter: textFilter(),
                sort: true
              }, {
                dataField: 'role',
                text: 'Role',
                filter: textFilter(),
                sort: true
              }, {
                dataField: 'status',
                text: 'Status',
                filter: textFilter(),
                sort: true
              }],
              data:[
                  {
                        id:1,
                        role:"admin",
                        status:'Active'
                  },
                  {
                    id:2,
                    role:"User",
                    status:'Active'
                 },
                 {
                    id:3,
                    role:"root",
                    status:'InActive'
                },
                    {
                    id:3,
                    role:"root",
                    status:'InActive'
                },
                {
                    id:3,
                    role:"root",
                    status:'InActive'
                },
                {
                    id:3,
                    role:"root",
                    status:'InActive'
                },
                    {
                        id:3,
                        role:"root",
                        status:'InActive'
                    },
                    {
                    id:3,
                    role:"root",
                    status:'InActive'
                },
                {
                    id:3,
                    role:"root",
                    status:'InActive'
                },
                {
                    id:3,
                    role:"root",
                    status:'InActive'
                },
                    {
                        id:3,
                        role:"root",
                        status:'InActive'
                    },
                    {
                    id:3,
                    role:"root",
                    status:'InActive'
                }
              ],
              defaultSorted :[{
                dataField: 'role',
                order: 'asc'
              }]
        }
    }
    
   


    componentDidMount() {
      
     }


    render() {
        return (
            <div>
               
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-12">
                              
                        <div className="input-group input-group-sm col-4">
                            <input type="text" className="form-control" placeholder="Enter Role..." />
                            <span className="input-group-append">
                                <button type="button" className="btn btn-primary btn-flat">Add</button>
                            </span>
                        </div><br></br>

                                
                          
                         
                             <BootstrapTable bootstrap4 keyField='id' data={ this.state.data } columns={ this.state.columns }  selectRow={ { mode: 'checkbox' } } 
                                                filter={ filterFactory() }   defaultSorted={ this.state.defaultSorted }  hover noDataIndication="No Data Available" 
                                                pagination={ paginationFactory() }  filterPosition="top" />

                                {/* <table className="table table-bordered table-borderless display" id="myTable">
                                <thead>
                                    <tr>
                                    <th>#ID</th>
                                    <th>Role</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>183</td>
                                        <td>John Doe</td>
                                        <td><span className="tag tag-success">Active</span></td>
                                        <td className="project-actions ">
                                            <a className="btn btn-info btn-sm" href="#"><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-default"><i className="fas fa-trash"></i>Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>183</td>
                                        <td>John Doe</td>
                                        <td><span className="tag tag-success">Active</span></td>
                                        <td className="project-actions ">
                                            <a className="btn btn-info btn-sm" href="#" ><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-default"><i className="fas fa-trash"></i>Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>183</td>
                                        <td>John Doe</td>
                                        <td><span className="tag tag-success">Active</span></td>
                                        <td className="project-actions ">
                                            <a className="btn btn-info btn-sm" href="#"><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-default"><i className="fas fa-trash"></i>Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>183</td>
                                        <td>John Doe</td>
                                        <td><span className="tag tag-success">Active</span></td>
                                        <td className="project-actions ">
                                            <a className="btn btn-info btn-sm" href="#" ><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-default"><i className="fas fa-trash"></i>Delete</a>
                                        </td>
                                    </tr>
                                   
                                </tbody>
                                </table> */}


                            
                        </div>
                        </div>
                   
                       
                    </div>
                    </section>

                   <div className="modal fade" id="modal-default">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Info</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Do you Want to Delete?</p>
                        </div>
                        <div className="modal-footer justify-content-between">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Delete</button>
                        </div>
                        </div>
                    </div>
                    </div>

            </div>
        )
    }
}

export default Roles
