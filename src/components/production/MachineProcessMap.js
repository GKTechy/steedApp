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
                key: "Process",
                text: "Process",
                sortable: true
            },
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
                                    <i className="fas fa-pencil-alt" ></i>Edit
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
        console.log('MachineProcessMap props profile-->:'+this.props.apiurl)
        fetch(this.props.apiurl+"machine/allMachinesProcessMapDetails")
        .then(res => res.json())
        .then( (result) => {
                console.log("result-->"+JSON.stringify(result))
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
        this.setState({machineId: event.target.value});
    }
    

    render() {
        let optionTemplate = this.state.processList.map(v => (
            <option value={v.processId}>{v.processName}</option>
          ));
        console.log('optionTemplate-->'+optionTemplate)
        return (
            <div>
                 <section className="content">
                    <div className="container-fluid">
                   
                        <div className="row">
                        <div className="col-12">
                            <div className="card">
                            <div className="card-header form-inline">
                                <div className="form-group col-md-3">
                                    <label htmlFor="exampleSelectRounded0">Machine Name</label>&nbsp;&nbsp;&nbsp;
                                    <select className="custom-select custom-select-sm rounded-0"  id="machineId" value={this.state.machineId} onChange={this.change} >
                                        {this.state.machineList.map(o => (
                                            <option value={o.machineId}>{o.machineName}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="exampleSelectRounded0">Process Name</label>&nbsp;&nbsp;&nbsp;
                                    <select className="custom-select  custom-select-sm rounded-0" id="processId" value={this.state.processId} onChange={this.change} >
                                         {optionTemplate}
                                    </select>
                                </div>
                                <div className="col-md-1">
                                         
                                        <button type="button" className="btn btn-primary" id="save" onClick={this.saveClick}>Save</button>&nbsp;&nbsp;&nbsp;
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
