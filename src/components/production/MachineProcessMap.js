import React, { Component } from 'react'
import { connect } from "react-redux";
import ReactDatatable from '@ashvin27/react-datatable';

export class MachineProcessMap extends Component {

    constructor(props) {
        super(props)
        
        this.columns = [
           
            {
                key: "machineName",
                text: "Machine Name",
                sortable: true
            },
            {
                key: "processName",
                text: "Process",
                sortable: true
            },
            // {
            //     key: "isActive",
            //     text: "Active",
            //     sortable: true
            // },
            {
                key: "action",
                text: "Action",
                cell: (record, index) => {
                    return (
                            <button
                                className="btn btn-info btn-sm"
                                onClick={this.editRecord.bind(this, record, index)}
                                style={{marginRight: '5px'}} >
                                    <i className="fas fa-pencil-alt" ></i>&nbsp;Edit
                            </button>
                       
                    );
                }
            }
        ];

        this.config = {
            key_column: 'machineprocessMapId',
            page_size: 10,
            length_menu: [10, 20, 50],
            show_filter: true,
            show_pagination: true,
            pagination: 'advance',
            filename: "Machine Process Map",
            button: {
                excel: true,
                print: true,
                csv: true
            }
        }


        this.state = {
            machineprocessMapId:0,
            machineId:"",
            processId:"",
            active:true,
            showModal:false,
            errormsg:"",
            records:[],
            machineList:[],
            processList:[],
            isLoaded:false,
            loginUser:this.props.profile
        }
    }

    componentDidMount() {
        this.getTableValues();
      
     }  

     getTableValues(){
    //    console.log('MachineProcessMap props profile-->:'+this.props.apiurl)
        fetch(this.props.apiurl+"machine/allMachinesProcessMapDetails")
        .then(res => res.json())
        .then( (result) => {
               // console.log("result-->"+JSON.stringify(result))
                if(result.valid){
                    this.setState({
                        records: result.machineProcessMapList,
                        machineList: result.machineList,
                        processList: result.processList

                    });
                }else{}
            },(error) => {
            }
        )
    }

    handleChange = (event) =>{
        this.setState({[event.target.name]: event.target.value});
    }
    
    editRecord = (record, index) => {
        // console.log("Edit record", index, record);
        // console.log("-->"+JSON.stringify(record))
        // var tempstatus=true;
        // if(record.isActive === "Active"){
        //      tempstatus=true;
        //  }else{
        //      tempstatus=false;
        //  }
         this.setState({
            machineprocessMapId:record.machineprocessMapId,
            machineId:record.machineNameId,
            processId:record.processId,
         });
     }
 
     resetClick  = () =>{
        this.setState({
            machineprocessMapId:0,
            machineId:"",
            processId:"",
         });
    }
    saveClick= event =>{

     //   console.log("state values-->"+JSON.stringify(this.state))
        if(this.state.machineId === "0"){
            this.setState({
                errormsg: "Select Machine"
            });
        }else if(this.state.processId === "0"){
            this.setState({
                errormsg: "Select Process"
            });
        }
        // else if(!this.state.isActive && this.state.paymentTermsId===0){
        //     this.setState({
        //         errormsg: "Select Active"
        //     });
        // }
        else{
            // var tempstatus="";
            // if(this.state.isActive){
            //     tempstatus="Active"
            // }else{
            //     tempstatus="InActive"
            // }
            
             const obj = { machineprocessMapId:this.state.machineprocessMapId,'machineNameId':this.state.machineId,'processId':this.state.processId, "updatedBy":this.state.loginUser.userId,"createdBy":this.state.loginUser.userId};

            //  // POST request using fetch with error handling
                 const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ "machineProcessMapObj": obj })
                };
                fetch(this.props.apiurl+"machine/saveMachinesProcessMapDetails", requestOptions)
                    .then(async response => {
                        const data = await response.json();
                        console.log("--data--"+JSON.stringify(data))
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
                                records: data.machineProcessMapList,
                                machineId:0,
                                processId:0,
                                //isActive:true
                            },()=>{});
                        }else{
                            this.setState({ errormsg: data.responseMsg});
                            this.setState({
                                errormsg: "",
                                machineId:0,
                                processId:0,
                                //isActive:true
                            },()=>{});
                        }
                           
                    })
                    .catch(error => {
                        this.setState({ errormsg: error.toString() });
                      //  console.error('There was an error!', error);
                    });
                    
          
        }
     }

     refreshClick = () => {
        this.resetClick();
        this.componentDidMount();
    }

    
    render() {
        let optionTemplate = this.state.processList.map(v => (
            <option value={v.processId}>{v.processName}</option>
          ));
       // console.log('optionTemplate-->'+optionTemplate)
        return (
            <div>
                 <section className="content">
                    <div className="container-fluid">
                   
                        <div className="row">
                        <div className="col-12">
                            <div className="card">
                            <div className="card-header form-inline">
                                <div className="form-group col-md-3">
                                    <label htmlFor="exampleSelectRounded0" className="font-weight-normal">Machine Name</label>&nbsp;&nbsp;&nbsp;
                                    <select className="custom-select  "  id="machineId" name="machineId" value={this.state.machineId} onChange={this.handleChange} >
                                        <option value="0">Select Machine</option>
                                        {this.state.machineList.map(o => (
                                            <option value={o.machineId}>{o.machineName}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="exampleSelectRounded0" className="font-weight-normal">Process Name</label>&nbsp;&nbsp;&nbsp;
                                    <select className="custom-select  " id="processId" name="processId" value={this.state.processId} onChange={this.handleChange} >
                                        <option value="0">Select Process</option>
                                         {optionTemplate}
                                    </select>
                                </div>
                                <div className="col-md-3">
                                         
                                        <button type="button" className="btn btn-primary" id="save" onClick={this.saveClick}>Save</button>&nbsp;&nbsp;&nbsp;
                                        <button type="button" className="btn btn-primary" id="save" onClick={this.resetClick}>Clear</button>&nbsp;&nbsp;&nbsp;
                                        <button type="button" className="btn btn-success" onClick={this.refreshClick}><i class="fas fa-sync"></i>&nbsp;Refresh</button>
                                </div>

                            
                            </div>
                            <div className="card-body" >
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

export default connect(mapStateToProps)(MachineProcessMap);


//export default MachineProcessMap
