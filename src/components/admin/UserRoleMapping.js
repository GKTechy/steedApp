import React, { Component } from 'react'
import { connect } from "react-redux";

import ReactDatatable from '@ashvin27/react-datatable';
import $ from "jquery";


export class UserRoleMapping extends Component {


    constructor(props) {
        super(props)
     
        this.columns = [
            {
                key: "mainMenuName",
                text: "Main Menu",
                sortable: true
            },{
                key: "subMenuName",
                text: "Sub Menu",
                sortable: true
            },{
                key: "menuName",
                text: "Menu",
                sortable: true
            },
            {
                key: "readOnly",
                text: "Read",
                sortable: true,
                cell: (record, index) => {
                    return (
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="readOnly" id="readOnly" checked={record.readOnly} onChange={ (e)=>this.selectReadRecord(e,index)} />
                        </div>
                       
                    );
                }
            },
            {
                key: "readWriteOnly",
                text: "Write",
                sortable: true,
                cell: (record, index) => {
                    return (
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="readWriteOnly" id="readWriteOnly" checked={record.readWriteOnly} onChange={ (e)=>this.selectWriteRecord(e,index)} />
                        </div>
                       
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
            filename: "MenuMapping",
        }

        
        this.state = {
            roleId:0,
            active:true,
            showModal:false,
            errormsg:"",
            records:[],
            roleList:[],
            menuList:[],
            isLoaded:false,
            loginUser:this.props.profile
        }
       
    }


    componentDidMount() {
        this.getTableValues();
         
        $("#as-react-datatable-container").find('select').addClass("form-control-sm");
        $("#as-react-datatable-container").find('input').addClass("form-control-sm");
   } 

    getTableValues(){
      //     console.log('MachineProcessMap props profile-->:'+this.props.apiurl)
            fetch(this.props.apiurl+"role/allRolesModules")
            .then(res => res.json())
            .then( (result) => {
                   // console.log("result-->"+JSON.stringify(result))
                    if(result.valid){
                        this.setState({
                            roleList: result.roleList,
                            records: result.menuList,
                        },()=>{
                            $("#as-react-datatable td").css({"padding":'0.50rem'});
                        });
                    }else{}
                },(error) => {
                }
            )
    }

    handleChange = (event) =>{
        if(event.target.value === 0 || event.target.value === "0"){
            this.setState({[event.target.name]: event.target.value});
            this.setState({ records: this.state.records.map( obj => ({...obj, readOnly:false,readWriteOnly:false }))  });

        }else{

            this.setState({[event.target.name]: event.target.value});
            fetch(this.props.apiurl+"role/roleModules?roleId="+event.target.value)
                .then(res => res.json())
                .then( (result) => {
                       // console.log("result-->"+JSON.stringify(result))
                        if(result.valid){
                            this.setState({
                                records: result.menuList,
                                errormsg: ""
                            });
                        }else{}
                    },(error) => {
                    }
                )

        }

    }

    selectReadRecord = (e,index) => {
        const { records } = this.state;
        let checked=e.target.checked;
        records[index].readOnly = checked;
        this.setState({ records: records },()=>{ 
        });
  }
  selectWriteRecord = (e,index) => {
    const { records } = this.state;
    let checked=e.target.checked;
    records[index].readWriteOnly = checked;
    this.setState({ records: records },()=>{ 
    });
}


 saveClick= event =>{

   //console.log("--."+this.state.roleId)

   const { records } = this.state;
   let ronly = records.filter(el => el.readOnly);
   let rwonly = records.filter(el => el.readWriteOnly);
    console.log("ronly->"+rwonly.length);

    if(this.state.roleId === 0){
        this.setState({
            errormsg: "Select Role"
        });
    }else  if(ronly.length=== 0 && rwonly.length=== 0){
        this.setState({
            errormsg: "Select Menu Details"
        });
    }else{
        this.setState({
            errormsg: ""
        });

       // console.log("this.state.records-->"+JSON.stringify(this.state.records))
        let mlist=  this.state.records.filter(obj => {
            if( obj.readWriteOnly || obj.readOnly ) return obj
        })

       // console.log("mlist-->"+mlist)
          // POST request using fetch with error handling
           const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "roleId":this.state.roleId,"menuList":mlist})
        };
        fetch(this.props.apiurl+"role/saveRoleMenu", requestOptions)
            .then(async response => {
                const data = await response.json();
           //     console.log("--data--"+JSON.stringify(data))
                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }

                if(data.valid){
                     //  console.log("c role->"+obj)
                     this.setState({
                        errormsg: "Successfully Inserted",
                        records: data.menuList,
                    },()=>{
                        //this.resetClick();
                    });
                   
                }else{
                   this.setState({ errormsg: data.responseMsg});
                  // this.resetClick();
                } 
            })
            .catch(error => {
                this.setState({ errormsg: error.toString() });
              //  console.error('There was an error!', error);
            });
   
        }

 }

refreshClick = () => {
    this.setState({ records: this.state.records.map( obj => ({...obj, readOnly:false,readWriteOnly:false })) ,roleId:0, errormsg:""});
}

selectAllClick = () => {
    this.setState({ records: this.state.records.map( obj => ({...obj, readOnly:true,readWriteOnly:true })) });
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
                                    <div className="form-inline">
                                             <label htmlFor="inlineFormEmail" className="m-2">User Role </label>
                                             <select className="custom-select"  id="roleId" name="roleId" value={this.state.roleId} onChange={this.handleChange} >
                                                <option value="0">Select Roles</option>
                                                {this.state.roleList.map(o => (
                                                    <option value={o.roleId}>{o.roleName}</option>
                                                ))}
                                            </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <button type="button" className="btn btn-primary float-right" onClick={this.saveClick}>Save</button>  &nbsp;&nbsp;&nbsp;&nbsp;
                                            <button type="button" className="btn btn-success float-right" onClick={this.refreshClick}>Clear</button>  &nbsp;&nbsp;&nbsp;&nbsp;
                                            <button type="button" className="btn btn-danger float-right" onClick={this.selectAllClick}>Select All</button>  &nbsp;&nbsp;&nbsp;&nbsp;  
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <span className="text-danger float-center">{this.state.errormsg}</span>
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

 export default connect(mapStateToProps)(UserRoleMapping);



//export default UserRoleMapping
