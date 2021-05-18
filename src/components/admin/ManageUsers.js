import React, { Component } from 'react'
import { connect } from "react-redux";
import ReactDatatable from '@ashvin27/react-datatable';
import $ from "jquery";


export class ManageUsers extends Component {

    constructor(props) {
        super(props)
    
        this.columns = [
            {
                key: "userName",
                text: "Name",
                sortable: true
            },
            {
                key: "userRoles",
                text: "Roles",
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
                                style={{marginRight: '5px'}} data-toggle="modal" data-target="#user-model">
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
            userid:0,
            username:"",
            userpwd:"",
            userconfirmpwd:"",
            active:true,
            showModal:false,
            errormsg:"",
            records:[],
            roleList:[],
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
        fetch(this.props.apiurl+"user/allUsers")
        .then(res => res.json())
        .then( (result) => {
               // console.log("result-->"+JSON.stringify(result))
                if(result.valid){
                    this.setState({
                        records: result.usersList,
                        roleList: result.roleList,
                    },()=>{
                        $("#as-react-datatable td").css({"padding":'0.50rem'});
                    });
                }else{}
            },(error) => {
            }
        )
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
            username:record.userName,
            userid:record.userId,
            userpwd:record.password,
            userconfirmpwd:record.password,
            active:tempstatus,
            errormsg:"",
            roleList:  this.state.roleList.map(obj => obj.isChecked ? {...obj, isChecked:false }: obj)
         },()=>{

            let Troles=record.userRoles.split(",");
           //  console.log('roles-->'+JSON.stringify(Troles))
            //  roleList:  this.state.roleList.map(obj => obj.isChecked ? {...obj, isChecked:false }: obj)
            
            Troles.map((tobj) =>{
                this.state.roleList.map((obj,index) => {
                    if( obj.roleName ===  tobj){
                        const {  roleList} = this.state;
                        roleList[index].isChecked = true
                        this.setState({ roleList:roleList},()=>{});
                    }else{

                    }
                })
              
            })

         });

      
        

     }

     handleFormChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    handleCheckClick = () => {
        this.setState({ active: !this.state.active });
    }

    handleChange= (e,index) => {
        let checked = e.target.checked;
        const {  roleList} = this.state;
        roleList[index].isChecked = checked

        this.setState({ roleList:roleList},()=>{
        });

    }

    saveClick= event =>{

        const result = this.state.roleList.filter(obj => obj.isChecked);
      //  console.log('result-->'+result.length);


        if(this.state.username === ""){
            this.setState({
                errormsg: "Enter User Name"
            });
        }else if(this.state.userpwd === ""){
            this.setState({
                errormsg: "Enter Password"
            });
        }else if(this.state.userconfirmpwd === ""){
            this.setState({
                errormsg: "Enter Confirm Password"
            });
        }else if(this.state.userconfirmpwd !== this.state.userpwd){
            this.setState({
                errormsg: "Password Can't Match"
            });
        }else if(!this.state.active && this.state.userid===0){
            this.setState({
                errormsg: "Select Active"
            });
        }else if(result.length === 0){
            this.setState({
                errormsg: "Select Any one Role"
            });
        }else{
            var tempstatus=""
            if(this.state.active){
                tempstatus="Active"
            }else{
                tempstatus="InActive"
            }
            
            const obj = {'userName':this.state.username,'password': this.state.userpwd, status:tempstatus,'userId':this.state.userid,"updatedBy":this.state.loginUser.userId,"createdBy":this.state.loginUser.userId};
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ "userObj": obj ,"roleList":this.state.roleList})
            };

            fetch(this.props.apiurl+"user/saveUserList", requestOptions)
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
                            this.setState({ errormsg: "User Created Successfully" , records: data.usersList,roleList: data.roleList});

                        }else{
                          
                        }
                           
                    })
                    .catch(error => {
                        this.setState({ errormsg: error.toString() });
                        
                    });

        }


    }

    resetClick= () => {
        this.setState({ 
            userid:0,
            username:"",
            userpwd:"",
            userconfirmpwd:"",
            active:true,
            errormsg:"",
            roleList:  this.state.roleList.map(obj => obj.isChecked ? {...obj, isChecked:false }: obj)
        });
          
    }


    render() {
        return (
        <div>
          

            <section className="content">
            <div className="container-fluid">
                   
                        <div className="row">
                        <div className="col-12">
                            <div className="card">
                            <div className="card-header">
                                <div className="card-title">
                                        <div className="input-group input-group-sm">
                                            <span className="input-group-append">
                                                <button type="button" className="btn btn-primary btn-flat" onClick={this.resetClick} data-toggle="modal" data-target="#user-model">Create New User &nbsp;&nbsp;<i className="fas fa-plus"></i></button>
                                            </span>
                                        </div>

                                </div>
                             
                            </div>
                            
                            <div className="card-body">
                                <ReactDatatable
                                    config={this.config}
                                    records={this.state.records}
                                    columns={this.columns}/>    
                            </div>
                           
                            </div>
                            
                        </div>
                        </div>
                   
                       
                    </div>
            </section>


            <div className="modal fade" id="user-model">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">User</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">

          

                       <div className="container-fluid">
                            <form className="form-inline">
                                <label htmlFor="inlineFormEmail" className="m-2 font-weight-normal">User Name <span className="text-danger">*</span></label>
                                <input type="email" className="form-control col-2 form-control-sm" name="username" id="username" value= {this.state.username} onChange={this.handleFormChange} />
                                <label htmlFor="inlineFormPassword" className="m-2 font-weight-normal">Password <span className="text-danger">*</span></label>
                                <input type="password" className="form-control  col-2 form-control-sm" name="userpwd" id="userpwd" value= {this.state.userpwd} onChange={this.handleFormChange} />
                                <label htmlFor="confirmFormPassword" className="m-2 font-weight-normal">Confirm Password <span className="text-danger">*</span></label>
                                <input type="password" className="form-control  col-2 form-control-sm" name="userconfirmpwd" id="userconfirmpwd" value= {this.state.userconfirmpwd} onChange={this.handleFormChange} />
                                <label htmlFor="isActive" className="m-2 font-weight-normal">Active<span className="text-danger">*</span></label>
                                <input type="checkbox" className="form-check-input" id="isActive"  checked={this.state.active} onChange={this.handleCheckClick}/>
                            </form>
                                <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                   
                                    <div className="card-body table-responsive p-0" style={{height: 300}}>
                                        <table className="table table-head-fixed text-nowrap table-bordered">
                                        <thead>
                                            <tr>
                                                <th style={{width: 10}}>#</th>
                                                <th>Roles</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.roleList.map( (role, i)=>(
                                                    <tr key={i}>
                                                        <td><div className="form-check"> <input className="form-check-input" type="checkbox" name={role.roleId}  value={role.roleId} checked={role.isChecked} onChange={ (e)=>this.handleChange(e,i)}/></div></td>
                                                        <td>{role.roleName}</td>
                                                    </tr>
                                                ))
                                            }
                                    </tbody>
                                        </table>
                                    </div>
                                    </div>
                                    
                                </div>
                                </div>


                        </div>


                        
                        </div>
                        <div className="modal-footer justify-content-between">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button> &nbsp;&nbsp;
                             <span className="text-danger"> {this.state.errormsg}</span>
                            <button type="button" className="btn btn-primary" onClick={this.saveClick}>Save</button>
                        </div>
                        </div>
                    </div>
            </div>

            <div className="modal fade" id="modal-deleteUser">
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


const mapStateToProps = (state) => {
    return {
      profile: state.user.profile,
      apiurl: state.user.apiurl
    }
  }

 export default connect(mapStateToProps)(ManageUsers);


//export default ManageUsers
