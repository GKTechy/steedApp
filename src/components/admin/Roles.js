import React, { Component } from 'react'
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css"
import "datatables.net-bs4/js/dataTables.bootstrap4.min.js"

import $ from 'jquery';

import { connect } from "react-redux";

export class Roles extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            rolename:"",
            roleid:0,
            active:true,
            showModal:false,
            errormsg:"",
            rolesList:[],
            isLoaded:false,
           
        }
       
    }
    
   


    componentDidMount() {

        this.getTableValues();
        $(document).ready(function () {
            $('#myTable').DataTable();
        });
        
        console.log('props profile-->:'+this.props.apiurl)
     }  


    getTableValues(){

        fetch("https://api.example.com/items")
        .then(res => res.json())
        .then( (result) => {
                this.setState({
                    isLoaded: true,
                    rolesList: result.items
                });
            },(error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }


    

     saveClick= event =>{
        if(this.state.rolename === ""){
            this.setState({
                errormsg: "Enter Role"
            });
        }else if(!this.state.active && this.state.roleid===0){
            this.setState({
                errormsg: "Select Active"
            });
        }else{
            const obj = {'rolename':this.state.rolename, active:this.state.active,'roleid':this.state.roleid};
          //  console.log("c role->"+obj)
            this.setState({
                errormsg: "",
                rolesList: [...this.state.rolesList, obj],
                rolename:"",
                roleid:0,
                active:true
            },()=>{
                $('#myTable').DataTable();
              //  console.log(this.state.rolesList); 
            });
        }
     }

     resetClick= () => {
        this.setState({ 
            errormsg: "",
            rolename:"",
            roleid:0,
            active:true
        });
    }
    handleFormChange = event => {
        this.setState({
            rolename: event.target.value
        });
    };

    handleCheckClick = () => {
        this.setState({ active: !this.state.active });
    }

    editEvent = (obj) => {
        console.log("-->"+JSON.stringify(obj))
        this.setState({
            rolename:obj.rolename,
            roleid:obj.rolename,
            active:obj.active
        });

    }
    
    deleteAlertEvent = (obj) => {
      //  alert("id-->"+id)
        this.setState({
            rolename:obj.rolename,
            roleid:obj.rolename,
            active:obj.active,
            showModal:true,
        });
    }

    deleteEvent= () => {
       alert("Deleted!!");
       this.setState({
        showModal:false,
    });
    }
    
    render() {
        return (
            <div>
               
            <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-3">
                                <input type="text" className="form-control" placeholder="rolename" name="rolename" id="rolename" value= {this.state.rolename} onChange={this.handleFormChange}/>
                                
                            </div>
                            <div className="col-1">
                                <div className="form-group p-2  ms-2">&nbsp;&nbsp;
                                        <input className="form-check-input" type="checkbox" checked={this.state.active}  onChange={this.handleCheckClick}/><label className="form-check-label">Active</label>
                                </div>
                            </div>
                            <div className="col-1">
                                <button type="button" className="btn btn-primary btn-flat" onClick={this.saveClick}>Add</button>&nbsp;&nbsp;&nbsp;
                                <button type="button" className="btn btn-primary btn-flat" onClick={this.resetClick}>Reset</button>
                            </div>
                            <div className="col-2">
                            <span className="text-danger">{this.state.errormsg}</span>
                            </div>
                        </div>


                        <div className="row">
                        <div className="col-12">
                            <div className="table-responsive-sm" >
                                <table className="table table-striped table-sm table-bordered" id="myTable" >
                                    <thead>
                                        <tr>
                                        
                                        <th>Role</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            this.state.rolesList.map((obj) =>
                                            
                                            <tr key={obj.roleid}>
                                                
                                                <td>{obj.rolename}</td>
                                                <td>{
                                                        obj.active ? <span className="tag tag-success">Active</span> : <span className="tag tag-failure">In Active</span>
                                                    }
                                                </td>
                                                <td className="project-actions ">
                                                    <a className="btn btn-info btn-sm" href="#" onClick={ ()=> this.editEvent(obj)}><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                                    <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-default" onClick={ ()=> this.deleteAlertEvent(obj)}><i className="fas fa-trash"></i>Delete</a>
                                                </td>
                                            </tr>
                                        )}
                                        
                                        
                                    </tbody>
                                </table> 
                            </div>
                        </div>
                        </div>
                   
                       
                    </div>
                    </div>

                   <div className="modal fade" id="modal-default" show={this.state.showModal}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Info</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Do you Want to Delete Role: {this.state.rolename} ?</p>
                        </div>
                        <div className="modal-footer justify-content-between">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={ ()=> this.deleteEvent()}>Delete</button>
                        </div>
                        </div>
                    </div>
                    </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      profile: state.user.profile,
      apiurl: state.user.apiurl
    }
  }

 export default connect(mapStateToProps)(Roles);

//export default Roles
