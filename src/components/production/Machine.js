import React, { Component } from 'react'

import { connect } from "react-redux";
import ReactDatatable from '@ashvin27/react-datatable';



export class Machine extends Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                key: "nfaDocumentNo",
                text: "Machine Code",
                sortable: true
            },
            {
                key: "nfaDocumentDate",
                text: "Machine Name",
                sortable: true
            },
            {
                key: "nfaTitle",
                text: "Capacity",
                sortable: true
            },
            // {
            //     key: "nfaDescription",
            //     text: "Description",
            //     sortable: true
            // },
            {
                key: "isActive",
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
                                    <i className="fas fa-pencil-alt"></i>Edit
                            </button>
                       
                    );
                }
            }
        ];

        this.config = {
            key_column: 'nfaId',
            page_size: 10,
            length_menu: [10, 20, 50],
            show_filter: true,
            show_pagination: true,
            pagination: 'advance',
            filename: "Note For Approval",
            button: {
                excel: true,
                print: true,
                csv: true
            }
        }

        this.state = {
          
            machineId:0,
            machineCode:"",
            machineName:"",
            machineMake:"",
            machineType:"",
            machineCommissioningDate: Date.now(),
            machineDispoteDate: Date.now(),
            machineInvNo:"",
            machineInvDate: Date.now(),
            machineInvValue:"",
            machineLocation:"",
            machineStatus:"",
            machineCapacity:"",
            isQCMachine:false,
            active:true,
            showModal:false,
            errormsg:"eeeeeeeeee",
            records:[],
            isLoaded:false,
            loginUser:this.props.profile
        }
    }

    componentDidMount() {
        this.getTableValues();
//        console.log('props profile-->:'+this.props.apiurl)
     }  
    getTableValues(){
        fetch(this.props.apiurl+"machine/allMachines")
        .then(res => res.json())
        .then( (result) => {
               // console.log("result-->"+JSON.stringify(result))
                if(result.valid){
                    this.setState({
                        records: result.machineList
                    });
                }else{}
            },(error) => {
            }
        )
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
        this.setState({[event.target.name]: event.target.value});
    };

    handleCheckClick = () => {
        this.setState({ isActive: !this.state.isActive });
    }

    handleCheckClick1 = () => {
        this.setState({ isQCMachine: !this.state.isQCMachine });
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
    

    render() {
        const leftAlign={
            textAlign: 'left'
        };

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
                                                <button type="button" className="btn btn-primary btn-flat" data-toggle="modal" data-target="#new-machine">Create New Machine &nbsp;&nbsp;<i class="fas fa-plus"></i></button>
                                            </span>
                                        </div>
                                </div>
                            
                            </div>
                            <div className="card-body" style={{height: 300}}>
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


            <div className="modal fade" id="new-machine">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Machine</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">


                       <div className="container-fluid">
                            <form className="form-inline">
                                <label htmlFor="code" className="m-2 col-sm-2" style={leftAlign}>Machine Code <span class="text-danger">*</span></label>
                                <input type="text" className="form-control m-2 col-sm-3 form-control-sm" name="machineCode" id="machineCode" value= {this.state.machineCode} onChange={this.handleFormChange}/>
                                <label htmlFor="name" className="m-2 col-sm-2" style={leftAlign}>Machine Name<span class="text-danger">*</span></label>
                                <input type="text" className="form-control m-2 col-sm-3 v" name="machineName" id="machineName" value= {this.state.machineName} onChange={this.handleFormChange} />
                                <label htmlFor="code" className="m-2 col-sm-2" style={{textAlign: "left !important"}}>Make</label>
                                <input type="text" className="form-control m-2 col-sm-3 form-control-sm" name="machineMake" id="machineMake" value= {this.state.machineMake} onChange={this.handleFormChange} />
                                <label htmlFor="name" className="m-2 col-sm-2" style={leftAlign}>Type</label>
                                <input type="text" className="form-control m-2 col-sm-3 form-control-sm" name="machineType" id="machineType" value= {this.state.machineType} onChange={this.handleFormChange} />
                                <label htmlFor="name" className="m-2 col-sm-2" style={leftAlign}>Commissioning Date</label>
                                <input type="date" className="form-control m-2 col-sm-3 form-control-sm " name="machineCommissioningDate" id="machineCommissioningDate"
                                 value= {this.state.machineCommissioningDate} defaultValue={this.state.machineCommissioningDate}  onChange={this.handleFormChange}/>
                                <label htmlFor="code" className="m-2 col-sm-2" style={leftAlign}>Dispote Date</label>
                                <input type="date" className="form-control m-2 col-sm-3 form-control-sm" name="machineDispoteDate" id="machineDispoteDate" value= {this.state.machineDispoteDate} onChange={this.handleFormChange} />
                                <label htmlFor="name" className="m-2 col-sm-2" style={leftAlign}>Inv No</label>
                                <input type="text" className="form-control m-2 col-sm-3 form-control-sm" name="machineInvNo" id="machineInvNo" value= {this.state.machineInvNo} onChange={this.handleFormChange} />
                                <label htmlFor="code" className="m-2 col-sm-2">Inv Date</label>
                                <input type="date" className="form-control m-2 col-sm-3 form-control-sm" name="machineInvDate" id="machineInvDate" value= {this.state.machineInvDate} onChange={this.handleFormChange}/>
                                <label htmlFor="name" className="m-2 col-sm-2">Inv Value</label>
                                <input type="text" className="form-control m-2 col-sm-3 form-control-sm" name="machineInvValue" id="machineInvValue" value= {this.state.machineInvValue} onChange={this.handleFormChange} />
                                <label htmlFor="name" className="m-2 col-sm-2">Location</label>
                                <input type="text" className="form-control m-2 col-sm-3 form-control-sm" name="machineLocation" id="machineLocation" value= {this.state.machineLocation} onChange={this.handleFormChange} />
                                <label htmlFor="name" className="m-2 col-sm-2">Status</label>
                                <input type="text" className="form-control m-2 col-sm-3 form-control-sm" name="machineStatus" id="machineStatus" value= {this.state.machineStatus} onChange={this.handleFormChange} />
                                <label htmlFor="name" className="m-2 col-sm-2">Capacity</label>
                                <input type="text" className="form-control m-2 col-sm-3 form-control-sm" name="machineCapacity" id="machineCapacity" value= {this.state.machineCapacity} onChange={this.handleFormChange}/>
                                <label htmlFor="name" className="m-2 col-sm-2">Is Active<span class="text-danger">*</span></label>
                                <input type="checkbox" className="form-check-input m-2 form-control-sm" id="active" name="active" checked={this.state.active}  onChange={this.handleCheckClick}/>
                                <label htmlFor="name" className="m-2 col-sm-2">Is QC Machine <span class="text-danger">*</span> </label>
                                <input type="checkbox" className="form-check-input m-2 form-control-sm" id="isQCMachine" name="isQCMachine" checked={this.state.isQCMachine}  onChange={this.handleCheckClick1}/>
                                <br></br>
                               
                             </form>
                             <span className="text-danger">{this.state.errormsg}</span>
                        </div>
                        </div>
                        <div className="modal-footer justify-content-between">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save</button>
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

export default connect(mapStateToProps)(Machine);


//export default Machine
