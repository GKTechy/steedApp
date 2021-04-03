import React, { Component } from 'react'
import { connect } from "react-redux";
import ReactDatatable from '@ashvin27/react-datatable';


export class PedProcessFlow extends Component {
    constructor(props) {
        
        super(props)
          this.columns = [
            {
                key: "operationNo",
                text: "Operation No",
                sortable: true
            },{
                key: "productName",
                text: "Product Name",
                sortable: true
            },{
                key: "processName",
                text: "Process Name",
                sortable: true
            } ,{
                key: "cycleTime",
                text: "Cycle Time",
                sortable: true
            } ,
            {
                key: "action",
                text: "Action",
                cell: (record, index) => {
                    return (
                            <button
                                className="btn btn-info btn-sm"
                                onClick={this.editRecord.bind(this, record, index)}
                                style={{marginRight: '5px'}}>
                                    <i className="fas fa-pencil-alt" ></i>&nbsp;Edit
                            </button>
                       
                    );
                }
            }
        ];

        this.config = {
            key_column: 'processFlowId',
            page_size: 10,
            length_menu: [10, 20, 50],
            show_filter: true,
            show_pagination: true,
            pagination: 'advance',
            filename: "Process Flow",
            button: {
                excel: true,
                print: true,
                csv: true
            }
        }
        this.state = {
            processFlowId:0,
            productId:0,
            processId:0,
            operationNo:"",
            cycleTime:"",

            processName:"",
            productName:"",
            isActive:true,

            showModal:false,
            errormsg:"",
            records:[],
            productList:[],
            processList:[],
            isLoaded:false,
            loginUser:this.props.profile
        }
       
    }

      
    componentDidMount() {
        this.getTableValues();
//        console.log('props profile-->:'+this.props.apiurl)
     }  
    getTableValues(){
        fetch(this.props.apiurl+"processflow/allProcessFlows")
        .then(res => res.json())
        .then( (result) => {
              //  console.log("result-->"+JSON.stringify(result))
                if(result.valid){
                    this.setState({
                        records: result.processFlowList,
                        productList:result.productList,
                        processList:result.processList,
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

    saveClick= event =>{
        //  console.log("state-->"+JSON.stringify(this.state))
          if(this.state.productId === "" || this.state.productId == "0"){
              this.setState({
                  errormsg: "Select Product Name"
              });
          }else if(this.state.processId === "" || this.state.processId == "0"){
            this.setState({
                errormsg: "Select Process"
            });
        }else if(this.state.operationNo === "" ){
              this.setState({
                  errormsg: "Enter Operation No"
              }); 
          }else if(this.state.cycleTime === "" ){
            this.setState({
                errormsg: "Enter Cycle Time"
            });
        }else{
              var tempstatus="";
              if(this.state.isActive){
                  tempstatus="Active"
              }else{
                  tempstatus="InActive"
              }
         
          
  
              const obj = {
                  'productId':this.state.productId,'processId':this.state.processId,'operationNo':this.state.operationNo,'cycleTime':this.state.cycleTime,
                  "updatedBy":this.state.loginUser.userId,"createdBy":this.state.loginUser.userId};
  
               // POST request using fetch with error handling
                  const requestOptions = {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ "processFlowObj": obj })
                  };
                  fetch(this.props.apiurl+"processflow/saveProcessFlow", requestOptions)
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
                                  errormsg: "Process Flow Details Saved Successfully",
                                  records: data.processFlowList,
                              },()=>{
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

      editRecord = (record, index) => {
        // console.log("Edit record", index, record);
        // console.log("-->"+JSON.stringify(record))
        
         this.setState({
            productId:record.productId,
            processId:record.processId,
            operationNo:record.operationNo,
            cycleTime:record.cycleTime
         });
     }

      resetClick= () => {
        this.setState({ 
            processFlowId:0,
            productId:0,
            processId:0,
            operationNo:"",
            cycleTime:"",

            processName:"",
            productName:"",
            isActive:true,

           errormsg:"",
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
                                         <div className="form-inline">
                                             <label htmlFor="inlineFormEmail" className="m-2 font-weight-normal">Product </label>
                                            <select className="form-control form-control-sm" id="productId" name="productId" value={this.state.productId} onChange={this.handleFormChange}>
                                                <option value="0">Select</option>
                                                {this.state.productList.map(o => (
                                                    <option value={o.productId}>{o.productName}</option>
                                                ))}
                                            </select>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                       
                                            <label htmlFor="inlineFormEmail" className="m-2 font-weight-normal">Operation No <span class="text-danger">*</span></label>
                                            <input type="email" className="form-control m-2 form-control-sm" id="operationNo" name="operationNo" value= {this.state.operationNo} onChange={this.handleFormChange} placeholder="Operation No"  />
                                            <label htmlFor="inlineFormEmail" className="m-2 font-weight-normal">Process Name </label>
                                            <select className="form-control form-control-sm" id="processId" name="processId" value={this.state.processId} onChange={this.handleFormChange}>
                                                <option value="0">Select</option>
                                                {this.state.processList.map(o => (
                                                    <option value={o.processId}>{o.processName}</option>
                                                ))}
                                            </select>
                                            <label htmlFor="inlineFormEmail" className="m-2 font-weight-normal">Cycle Time <span class="text-danger">*</span></label>
                                            <input type="email" className="form-control m-2 form-control-sm" id="cycleTime" name="cycleTime" value= {this.state.cycleTime} onChange={this.handleFormChange} placeholder="Cycle Time"  />
                                            <button type="button" className="btn btn-primary  btn-sm" onClick={this.saveClick}>Save</button> &nbsp;&nbsp;&nbsp;
                                            <button type="button" className="btn btn-warning  btn-sm" onClick={this.resetClick}>Clear</button> &nbsp;&nbsp;&nbsp;
                                            <span className="text-danger">{this.state.errormsg}</span>
                                        </div>

                                </div>
                                <div className="card-tools">
                                   
                                </div>
                            </div>
                            
                            <div className="card-body" style={{height: 500}}>
                                

                                <ReactDatatable
                                    config={this.config}
                                    records={this.state.records}
                                    columns={this.columns}/>

                            </div>
                            <div class="card-footer clearfix">
                                
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
export default connect(mapStateToProps)(PedProcessFlow);


//export default PedProcessFlow
