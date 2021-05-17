import React, { Component } from 'react'
import { connect } from "react-redux";

import ReactDatatable from '@ashvin27/react-datatable';
import $ from "jquery";

export class Roles extends Component {

    constructor(props) {
        super(props)
        
        this.columns = [
            {
                key: "roleName",
                text: "Name",
                sortable: true
            },
            {
                key: "status",
                text: "Active",
                sortable: true
            },
            {
                key: "action",
                text: "Action",
                cell: (record, index) => {
                    return (
                            <button
                                className="btn btn-info btn-sm"
                                onClick={this.editRecord.bind(this, record, index)}
                                style={{marginRight: '5px'}}>
                                    <i className="fas fa-pencil-alt"></i>&nbsp;Edit
                            </button>
                       
                    );
                }
            }
        ];

        this.config = {
            key_column: 'roleId',
            page_size: 10,
            length_menu: [10, 20, 50],
            show_filter: true,
            show_pagination: true,
            pagination: 'advance',
            filename: "Roles",
            button: {
                excel: true,
                print: true,
                csv: true
            }
        }
        this.state = {
            rolename:"",
            roleid:0,
            active:true,
            showModal:false,
            errormsg:"",
            records:[],
            isLoaded:false,
            loginUser:this.props.profile
        }
       
    }
    componentDidMount() {
        this.getTableValues();
//        console.log('props profile-->:'+this.props.apiurl)
        $("#as-react-datatable-container").find('select').addClass("form-control-sm");
        $("#as-react-datatable-container").find('input').addClass("form-control-sm");
     }  
    getTableValues(){
        fetch(this.props.apiurl+"role/allRoles")
        .then(res => res.json())
        .then( (result) => {
               // console.log("result-->"+JSON.stringify(result))
                if(result.valid){
                    this.setState({
                        records: result.roleList
                    },()=>{
                        $("#as-react-datatable td").css({"padding":'0.50rem'});
                    });
                }else{}
            },(error) => {
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
            var tempstatus=""
            if(this.state.active){
                tempstatus="Active"
            }else{
                tempstatus="InActive"
            }
            
            const obj = {'roleName':this.state.rolename, status:tempstatus,'roleId':this.state.roleid,"updatedBy":this.state.loginUser.userId,"createdBy":this.state.loginUser.userId};

             // POST request using fetch with error handling
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ "roleObj": obj })
                };
                fetch(this.props.apiurl+"role/saveRole", requestOptions)
                    .then(async response => {
                        const data = await response.json();
                       // console.log("--data--"+JSON.stringify(data))
                        // check for error response
                        if (!response.ok) {
                            // get error message from body or default to response status
                            const error = (data && data.message) || response.status;
                            return Promise.reject(error);
                        }

                        if(data.valid){
                             //  console.log("c role->"+obj)
                             this.setState({
                                errormsg: "",
                                records: data.roleList,
                                rolename:"",
                                roleid:0,
                                active:true
                            },()=>{});
                        }else{
                            this.setState({ errormsg: data.responseMsg});
                            this.setState({
                                errormsg: "",
                                rolename:"",
                                roleid:0,
                                active:true
                            },()=>{});
                        }
                           
                    })
                    .catch(error => {
                        this.setState({ errormsg: error.toString() });
                        console.error('There was an error!', error);
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

    editRecord = (record, index) => {
       // console.log("Edit record", index, record);
       // console.log("-->"+JSON.stringify(record))
       var tempstatus=true;
       if(record.status === "Active"){
            tempstatus=true;
        }else{
            tempstatus=false;
        }
        this.setState({
            rolename:record.roleName,
            roleid:record.roleId,
            active:tempstatus
        });


    }

    refreshClick = () => {
        this.resetClick();
        this.componentDidMount();
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
                            <div className="col-2">
                                <button type="button" className="btn btn-primary" onClick={this.saveClick}>Save</button>&nbsp;&nbsp;&nbsp;
                                 <button type="button" className="btn btn-success" onClick={this.refreshClick}><i class="fas fa-sync"></i>&nbsp;Refresh</button>
                            </div>
                            <div className="col-2">
                                 <span className="text-danger">{this.state.errormsg}</span>
                            </div>
                        </div>


                        <div className="row">
                        <div className="col-12">
                            <div className="table-responsive-sm" >
                              <ReactDatatable
                                    config={this.config}
                                    records={this.state.records}
                                    columns={this.columns}/>


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
