import React, { Component } from 'react'

import { connect } from "react-redux";
import ReactDatatable from '@ashvin27/react-datatable';
import $ from 'jquery';


export class Machine extends Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                key: "machineCode",
                text: "Machine Code",
                sortable: true
            },
            {
                key: "machineName",
                text: "Machine Name",
                sortable: true
            },
            {
                key: "make",
                text: "Make",
                sortable: true
            },
            {
                key: "type",
                text: "Type",
                sortable: true
            },
            {
                key: "capacity",
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
                                style={{marginRight: '5px'}} data-toggle="modal" data-target="#new-machine">
                                    <i className="fas fa-pencil-alt" ></i>&nbsp;Edit
                            </button>
                       
                    );
                }
            }
        ];

        this.config = {
            key_column: 'machineId',
            page_size: 10,
            length_menu: [10, 20, 50],
            show_filter: true,
            show_pagination: true,
            pagination: 'advance',
            filename: "Machine",
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
            isQCMachine:true,
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
        console.log('machine props profile-->:'+this.props.apiurl)
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
        });
    }
    handleFormChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    handleCheckClick = () => {
        this.setState({ active: !this.state.active });
    }

    handleCheckClick1 = () => {
        this.setState({ isQCMachine: !this.state.isQCMachine });
    }

    saveClick= event =>{
        if(this.state.machineName === ""){
            this.setState({
                errormsg: "Enter Machine Name"
            });
        }else if(!this.state.active && this.state.machineId===0){
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
            
            var tempstatus1=""
            if(this.state.isQCMachine){
                tempstatus1="Active"
            }else{
                tempstatus1="InActive"
            }

            const obj = {
                'machineCode':this.state.machineCode,'machineName':this.state.machineName,
                'make':this.state.machineMake,'type':this.state.machineType,
                'commissioningDate':this.state.machineCommissioningDate,'dispoteDate':this.state.machineDispoteDate,
                'invNo':this.state.machineInvNo,'invDate':this.state.machineInvDate,
                'invValue':this.state.machineInvValue,'location':this.state.machineLocation,
                'status':this.state.machineStatus,'capacity':this.state.machineCapacity,
                'isQcMachine':tempstatus1,'isActive':tempstatus,
                'machineId':this.state.machineId,
                "updatedBy":this.state.loginUser.userId,"createdBy":this.state.loginUser.userId};

             // POST request using fetch with error handling
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ "machineObj": obj })
                };
                fetch(this.props.apiurl+"machine/saveMachine", requestOptions)
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
                                records: data.machineList
                            });
                            $("#new-machine .close").click();
                            this.resetClick();
                        }else{
                            this.setState({ errormsg: data.responseMsg});
                            
                        }
                           
                    })
                    .catch(error => {
                        this.setState({ errormsg: error.toString() });
                        console.error('There was an error!', error);
                    });
                    
          
        }
     }


    editRecord = (record, index) => {
       // console.log("Edit record", index, record);
       // console.log("-->"+JSON.stringify(record))
       var tempstatus=true;
       if(record.isActive === "Active"){
            tempstatus=true;
        }else{
            tempstatus=false;
        }

        var tempstatus1=true;
       if(record.isQcMachine === "Active"){
            tempstatus1=true;
        }else{
            tempstatus1=false;
        }

        this.setState({
            machineId:record.machineId,
            machineCode:record.machineCode,
            machineName:record.machineName,
            machineMake:record.make,
            machineType:record.type,
            machineCommissioningDate: record.commissioningDate,
            machineDispoteDate: record.dispoteDate,
            machineInvNo:record.invNo,
            machineInvDate: record.invDate,
            machineInvValue:record.invValue,
            machineLocation:record.location,
            machineStatus:record.status,
            machineCapacity:record.capacity,
            isQCMachine:tempstatus1,
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
                                                <button type="button" className="btn btn-primary btn-flat" onClick={this.resetClick} data-toggle="modal" data-target="#new-machine">Create New Machine &nbsp;&nbsp;<i class="fas fa-plus"></i></button>
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
                                <label htmlFor="code" className="m-2 col-sm-2 font-weight-normal" style={leftAlign}>Machine Code <span class="text-danger">*</span></label>
                                <input type="text" className="form-control m-2 col-sm-3 form-control-sm" name="machineCode" id="machineCode" value= {this.state.machineCode} onChange={this.handleFormChange}/>
                                <label htmlFor="name" className="m-2 col-sm-2 font-weight-normal" style={leftAlign}>Machine Name<span class="text-danger">*</span></label>
                                <input type="text" className="form-control m-2 col-sm-3 form-control-sm" name="machineName" id="machineName" value= {this.state.machineName} onChange={this.handleFormChange} />
                                <label htmlFor="code" className="m-2 col-sm-2 font-weight-normal" style={{textAlign: "left !important"}}>Make</label>
                                <input type="text" className="form-control m-2 col-sm-3 form-control-sm" name="machineMake" id="machineMake" value= {this.state.machineMake} onChange={this.handleFormChange} />
                                <label htmlFor="name" className="m-2 col-sm-2 font-weight-normal" style={leftAlign}>Type</label>
                                <input type="text" className="form-control m-2 col-sm-3 form-control-sm" name="machineType" id="machineType" value= {this.state.machineType} onChange={this.handleFormChange} />
                                <label htmlFor="name" className="m-2 col-sm-2 font-weight-normal" style={leftAlign}>Commissioning Date</label>
                                <input type="date" className="form-control m-2 col-sm-3 form-control-sm " name="machineCommissioningDate" id="machineCommissioningDate"
                                 value= {this.state.machineCommissioningDate} defaultValue={this.state.machineCommissioningDate}  onChange={this.handleFormChange}/>
                                <label htmlFor="code" className="m-2 col-sm-2 font-weight-normal" style={leftAlign}>Dispose Date</label>
                                <input type="date" className="form-control m-2 col-sm-3 form-control-sm" name="machineDispoteDate" id="machineDispoteDate" value= {this.state.machineDispoteDate} onChange={this.handleFormChange} />
                                <label htmlFor="name" className="m-2 col-sm-2 font-weight-normal" style={leftAlign}>Inv No</label>
                                <input type="text" className="form-control m-2 col-sm-3 form-control-sm" name="machineInvNo" id="machineInvNo" value= {this.state.machineInvNo} onChange={this.handleFormChange} />
                                <label htmlFor="code" className="m-2 col-sm-2 font-weight-normal">Inv Date</label>
                                <input type="date" className="form-control m-2 col-sm-3 form-control-sm" name="machineInvDate" id="machineInvDate" value= {this.state.machineInvDate} onChange={this.handleFormChange}/>
                                <label htmlFor="name" className="m-2 col-sm-2 font-weight-normal">Inv Value</label>
                                <input type="text" className="form-control m-2 col-sm-3 form-control-sm" name="machineInvValue" id="machineInvValue" value= {this.state.machineInvValue} onChange={this.handleFormChange} />
                                <label htmlFor="name" className="m-2 col-sm-2 font-weight-normal">Location</label>
                                <input type="text" className="form-control m-2 col-sm-3 form-control-sm" name="machineLocation" id="machineLocation" value= {this.state.machineLocation} onChange={this.handleFormChange} />
                                <label htmlFor="name" className="m-2 col-sm-2 font-weight-normal">Status</label>
                                <input type="text" className="form-control m-2 col-sm-3 form-control-sm" name="machineStatus" id="machineStatus" value= {this.state.machineStatus} onChange={this.handleFormChange} />
                                <label htmlFor="name" className="m-2 col-sm-2 font-weight-normal">Capacity</label>
                                <input type="text" className="form-control m-2 col-sm-3 form-control-sm" name="machineCapacity" id="machineCapacity" value= {this.state.machineCapacity} onChange={this.handleFormChange}/>
                                <label htmlFor="name" className="m-2 col-sm-2 font-weight-normal">Is Active<span class="text-danger">*</span></label>
                                <input type="checkbox" className="form-check-input m-2 form-control-sm" id="active" name="active" checked={this.state.active}  onChange={this.handleCheckClick}/>
                                <label htmlFor="name" className="m-2 col-sm-2 font-weight-normal">Is QC Machine </label>
                                <input type="checkbox" className="form-check-input m-2 form-control-sm" id="isQCMachine" name="isQCMachine" checked={this.state.isQCMachine}  onChange={this.handleCheckClick1}/>
                                <br></br>
                               
                             </form>
                             <span className="text-danger">{this.state.errormsg}</span>
                        </div>
                        </div>
                        <div className="modal-footer justify-content-between">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
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

export default connect(mapStateToProps)(Machine);


//export default Machine
