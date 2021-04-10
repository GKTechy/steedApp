import React, { Component } from 'react'

import { connect } from "react-redux";
import ReactDatatable from '@ashvin27/react-datatable';

import $ from 'jquery';
export class UOM extends Component {


    constructor(props) {
        
        super(props)
          this.columns = [
            {
                key: "measurementName",
                text: "MeasureMent Name",
                sortable: true
            },{
                key: "measurementShortName",
                text: "Short Name",
                sortable: true
            }  ,{
                key: "measurementType",
                text: "MeasureMent Type",
                sortable: true
            } ,{
                key: "baseMeasurement",
                text: "Is Base",
                sortable: true
            },
            {
                key: "equivalentValueWithBase",
                text: "Is Varied",
                sortable: true
            },
            {
                key: "action",
                text: "Action",
                cell: (record, index) => {
                    return (
                            <button
                                className="btn btn-info btn-sm"
                                data-toggle="modal" data-target="#uom-new-model"
                                onClick={this.editRecord.bind(this, record, index)}
                                style={{marginRight: '5px'}}>
                                    <i className="fas fa-pencil-alt" ></i>&nbsp;Edit
                            </button>
                       
                    );
                }
            }
        ];

        this.config = {
            key_column: 'unitOfMeasurementId',
            page_size: 10,
            length_menu: [10, 20, 50],
            show_filter: true,
            show_pagination: true,
            pagination: 'advance',
            filename: "UOM",
            button: {
                excel: true,
                print: true,
                csv: true
            }
        }
        this.state = {
            unitOfMeasurementId:0,
            measurementName:"",
            measurementShortName:"",
            measurementType:"",
            baseMeasurement:false,
            equivalentValueWithBase:"",
            description:"",
            variedMeasurement:false,
            isActive:true,

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
     }  
    getTableValues(){
        fetch(this.props.apiurl+"uom/allUOMs")
        .then(res => res.json())
        .then( (result) => {
              //  console.log("result-->"+JSON.stringify(result))
                if(result.valid){
                    this.setState({
                        records: result.uomList
                    });
                }else{}
            },(error) => {
            }
        )
    }

    handleFormChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    handleCheckClick = () => {
        this.setState({ isActive: !this.state.isActive });
    }
    handlebaseClick= () => {
        this.setState({ baseMeasurement: !this.state.baseMeasurement });
    }
    handlevariedClick= () => {
        this.setState({ variedMeasurement: !this.state.variedMeasurement });
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
         this.setState({
            unitOfMeasurementId:record.unitOfMeasurementId,
            measurementName:record.measurementName,
            measurementShortName:record.measurementShortName,
            supplierContactPerson:record.supplierContactPerson,
            measurementType:record.measurementType,
            baseMeasurement:record.baseMeasurement,
            equivalentValueWithBase:record.equivalentValueWithBase,
            description:record.description,
            variedMeasurement:record.variedMeasurement,
            isActive:tempstatus
         });
     }
     resetClick= () => {
         this.setState({ 
            unitOfMeasurementId:0,
            measurementName:"",
            measurementShortName:"",
            measurementType:"",
            baseMeasurement:"",
            equivalentValueWithBase:"",
            description:"",
            variedMeasurement:"",
            isActive:true,
            errormsg:"",
         });
    }
    saveClick= event =>{
      //  console.log("state-->"+JSON.stringify(this.state))
        if(this.state.measurementName === ""){
            this.setState({
                errormsg: "Enter measurement Name"
            });
        }else if(!this.state.isActive && this.state.unitOfMeasurementId===0){
            this.setState({
                errormsg: "Select Active"
            });
        }else{
            var tempstatus="";
            if(this.state.isActive){
                tempstatus="Active"
            }else{
                tempstatus="InActive"
            }
            
            var tempstatus1="";
            if(this.state.baseMeasurement){
                tempstatus1="Active"
            }else{
                tempstatus1="InActive"
            }
            var tempstatus11="";
            if(this.state.variedMeasurement){
                tempstatus11="Active"
            }else{
                tempstatus11="InActive"
            }
        

            const obj = {
                'measurementName':this.state.measurementName,'measurementShortName':this.state.measurementShortName, 
                'measurementType':this.state.measurementType,'baseMeasurement':tempstatus1, 
                'equivalentValueWithBase':this.state.equivalentValueWithBase,'description':this.state.description   , 
                'variedMeasurement':tempstatus11,
                "isActive":tempstatus,'unitOfMeasurementId':this.state.unitOfMeasurementId,
               
                "updatedBy":this.state.loginUser.userId,"createdBy":this.state.loginUser.userId};

             // POST request using fetch with error handling
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ "uomObj": obj })
                };
                fetch(this.props.apiurl+"uom/saveUOM", requestOptions)
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
                                errormsg: "Supplier Details Saved Successfully",
                                records: data.uomList,
                            },()=>{
                                $("#uom-new-model .close").click();
                                this.resetClick();
                            });
                           
                        }else{
                           this.setState({ errormsg: data.responseMsg});
                           this.resetClick();
                        } 
                    })
                    .catch(error => {
                        this.setState({ errormsg: error.toString() });
                      //  console.error('There was an error!', error);
                    });
                    
          
        }
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
                                                <button type="button" className="btn btn-primary btn-flat" data-toggle="modal" data-target="#uom-new-model">Create New  UOM&nbsp;&nbsp;<i class="fas fa-plus"></i></button>
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


                <div className="modal fade" id="uom-new-model">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title font-weight-normal">New UOM</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                                <div className="container-fluid">
                                    <div className="form-inline">
                                        <label htmlFor="code" className="m-2 col-sm-2 font-weight-normal" >Measurement Type<span class="text-danger">*</span></label>
                                        <select className="form-control m-2 col-sm-3" id="measurementType" name="measurementType" value={this.state.measurementType} onChange={this.handleFormChange} >
                                            <option value="0">Select Measurement</option>
                                            <option value="Mass">Mass</option>
                                            <option value="Volume">Volume</option>
                                            <option value="Unit">Unit</option>
                                            <option value="Distance">Distance</option>
                                        </select>
                                        <label htmlFor="name" className="m-2 col-sm-2 font-weight-normal">Base Measurement</label>
                                        <input type="checkbox" className="form-check-input m-1" checked={this.state.baseMeasurement}  onChange={this.handlebaseClick} />
                                        <label htmlFor="name" className="m-2 col-sm-2 font-weight-normal">is Varied</label>
                                        <input type="checkbox" className="form-check-input" checked={this.state.variedMeasurement}  onChange={this.handlevariedClick} />
                                        <label htmlFor="name" className="m-2 col-sm-2 font-weight-normal" >Measurement Name<span class="text-danger">*</span></label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-3" id="measurementName" name="measurementName" value= {this.state.measurementName} onChange={this.handleFormChange} placeholder="Measurement Name" />
                                        <label htmlFor="code" className="m-2 col-sm-2 font-weight-normal" >Short Name</label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-3" id="measurementShortName" name="measurementShortName" value= {this.state.measurementShortName} onChange={this.handleFormChange} placeholder="Short Name" />
                                        <label htmlFor="name" className="m-2 col-sm-2 font-weight-normal" >Equalant Value</label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-3" id="equivalentValueWithBase" name="equivalentValueWithBase" value= {this.state.equivalentValueWithBase} onChange={this.handleFormChange} placeholder="Equalant Value" />
                                        <label htmlFor="name" className="m-2 col-sm-2 font-weight-normal" >Description</label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-3" id="description" name="description" value= {this.state.description} onChange={this.handleFormChange} placeholder="Description"/>
                                        <label htmlFor="name" className="m-2 col-sm-2 font-weight-normal">Active<span class="text-danger">*</span></label>
                                        <input type="checkbox" className="form-check-input m-1" checked={this.state.isActive}  onChange={this.handleCheckClick}/>
                                    </div>
                            </div>
                         </div>
                        <div className="modal-footer justify-content-between">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            <span className="text-danger">{this.state.errormsg}</span>
                            <button type="button" className="btn btn-primary" onClick={this.saveClick}>Save</button>
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
export default connect(mapStateToProps)(UOM);

//export default UOM
