import React, { Component } from 'react'

import { connect } from "react-redux";
import ReactDatatable from '@ashvin27/react-datatable';



export class Material extends Component {

    constructor(props) {
        
        super(props)
          this.columns = [
            {
                key: "rawMaterialName",
                text: "Name",
                sortable: true
            },{
                key: "itemType",
                text: "Type",
                sortable: true
            }  ,{
                key: "measurementType",
                text: "MeasureMent Type",
                sortable: true
            } ,{
                key: "units",
                text: "Units",
                sortable: true
            }
            ,{
                key: "price",
                text: "price",
                sortable: true
            },
            {
                key: "supplierName",
                text: "supplier Name",
                sortable: true
            },{
                key: "hsnCode",
                text: "HSN",
                sortable: true
            },
            {
                key: "action",
                text: "Action",
                cell: (record, index) => {
                    return (
                            <button
                                className="btn btn-info btn-sm"
                                data-toggle="modal" data-target="#material-new-model"
                                onClick={this.editRecord.bind(this, record, index)}
                                style={{marginRight: '5px'}}>
                                    <i className="fas fa-pencil-alt" ></i>Edit
                            </button>
                       
                    );
                }
            }
        ];

        this.config = {
            key_column: 'rawMaterialId',
            page_size: 10,
            length_menu: [10, 20, 50],
            show_filter: true,
            show_pagination: true,
            pagination: 'advance',
            filename: "Raw Material",
            button: {
                excel: true,
                print: true,
                csv: true
            }
        }
        this.state = {
            rawMaterialId:0,
            rawMaterialName:"",
            materialCode:"",
            itemType:"",
            remarks:"",
            measurementType:"",
            units:"",
            price:"",
            referenceLevel:"",
            supplierId:"",
            hsnCode:"",
            isBom:"",
            isActive:true,

            supplierName:"",
            supplierList:[],
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
        fetch(this.props.apiurl+"rawmaterial/allRawMaterial")
        .then(res => res.json())
        .then( (result) => {
              //  console.log("result-->"+JSON.stringify(result))
                if(result.valid){
                    this.setState({
                        records: result.rawMaterialList,
                        supplierList:result.supplierList
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
    handlebomClick= () => {
        this.setState({ isBom: !this.state.isBom });
    }
  
    resetClick= () => {
        this.setState({ 
            rawMaterialId:0,
            rawMaterialName:"",
            materialCode:"",
            itemType:"",
            remarks:"",
            measurementType:"",
            units:"",
            price:"",
            referenceLevel:"",
            supplierId:"",
            hsnCode:"",
            isBom:"",
           isActive:true,
           errormsg:"",
        });
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
        rawMaterialId:record.rawMaterialId,
        rawMaterialName:record.rawMaterialName,
        materialCode:record.materialCode,
        itemType:record.itemType,
        remarks:record.remarks,
        measurementType:record.measurementType,
        units:record.units,
        price:record.price,
        referenceLevel:record.referenceLevel,
        supplierId:record.supplierId,
        hsnCode:record.hsnCode,
        isBom:record.isBom,
        isActive:tempstatus
     });
 }

 saveClick= event =>{
      console.log("state-->"+JSON.stringify(this.state))
      if(this.state.rawMaterialName === ""){
          this.setState({
              errormsg: "Enter Material Name"
          });
      }else if(this.state.itemType === "0" || this.state.itemType === ""){
        this.setState({
            errormsg: "Select Item Type"
        });
    }else if(this.state.measurementType === "0" || this.state.measurementType === ""){
        this.setState({
            errormsg: "Select Measurement Type"
        });
    }else if(this.state.supplierId === "0" || this.state.supplierId === ""){
        this.setState({
            errormsg: "Select Supplier"
        });
    }else if(this.state.hsnCode === ""){
        this.setState({
            errormsg: "Enter HSN Code"
        });
    }else if(!this.state.isActive && this.state.rawMaterialId===0){
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
          if(this.state.isBom){
              tempstatus1="Active"
          }else{
              tempstatus1="InActive"
          }
        //   var tempstatus11="";
        //   if(this.state.variedMeasurement){
        //       tempstatus11="Active"
        //   }else{
        //       tempstatus11="InActive"
        //   }
      

          const obj = {
                'materialCode':this.state.materialCode,'rawMaterialName':this.state.rawMaterialName,'itemType':this.state.itemType, 
              'measurementType':this.state.measurementType,'remarks':this.state.remarks, 
              'units':this.state.units,'price':this.state.price,'referenceLevel':this.state.referenceLevel,'supplierId':this.state.supplierId,'hsnCode':this.state.hsnCode,'isBom':tempstatus1   , 
              "isActive":tempstatus,'rawMaterialId':this.state.rawMaterialId,
             
              "updatedBy":this.state.loginUser.userId,"createdBy":this.state.loginUser.userId};

           // POST request using fetch with error handling
              const requestOptions = {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ "rawMaterialObj": obj })
              };
              fetch(this.props.apiurl+"rawmaterial/saveRawMaterial", requestOptions)
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
                              errormsg: "Raw Material Details Saved Successfully",
                              records: data.rawMaterialList,
                          },()=>{
                              this.resetClick();
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
                                                <button type="button" className="btn btn-primary btn-flat" data-toggle="modal" data-target="#material-new-model">Create New  Material&nbsp;&nbsp;<i class="fas fa-plus"></i></button>
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

                <div className="modal fade" id="material-new-model">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">New Material</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                                <div className="container-fluid">
                                    <div className="form-inline">
                                        <label htmlFor="code" className="m-2 col-sm-2" >Material Code<span class="text-danger">*</span></label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-3" id="materialCode" name="materialCode" value={this.state.materialCode} onChange={this.handleFormChange} />
                                        <label htmlFor="code" className="m-2 col-sm-2" >Material Name<span class="text-danger">*</span></label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-3" id="rawMaterialName" name="rawMaterialName" value={this.state.rawMaterialName} onChange={this.handleFormChange} />
                                        <label htmlFor="code" className="m-2 col-sm-2" >Item Type<span class="text-danger">*</span></label>
                                        <select className="form-control m-2 col-sm-3" id="itemType" name="itemType" value={this.state.itemType} onChange={this.handleFormChange}>
                                            <option value="0">Select</option>
                                            <option value="Base">Base</option>
                                            <option value="Premium">Premium</option>
                                            <option>M 3</option>
                                        </select>
                                        <label htmlFor="name" className="m-2 col-sm-2" >Remarks</label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-3" id="remarks" name="remarks" value={this.state.remarks} onChange={this.handleFormChange} />
                                        <label htmlFor="code" className="m-2 col-sm-2" >MeasureMent Type<span class="text-danger">*</span></label>
                                        <select className="form-control m-2 col-sm-3" id="measurementType" name="measurementType" value={this.state.measurementType} onChange={this.handleFormChange} >
                                            <option value="0">Select</option>
                                            <option value="Mass">Mass</option>
                                            <option value="Volume">Volume</option>
                                            <option value="Unit">Unit</option>
                                            <option value="Distance">Distance</option>
                                        </select>
                                        <label htmlFor="name" className="m-2 col-sm-2" >Units</label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-3" id="units" name="units" value={this.state.units} onChange={this.handleFormChange} />
                                        <label htmlFor="name" className="m-2 col-sm-2" >Price</label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-3" id="price" name="price" value={this.state.price} onChange={this.handleFormChange}/>
                                        <label htmlFor="name" className="m-2 col-sm-2" >Reference Level</label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-3" id="referenceLevel" name="referenceLevel" value={this.state.referenceLevel} onChange={this.handleFormChange} />
                                        <label htmlFor="code" className="m-2 col-sm-2" >Supplier Name<span class="text-danger">*</span></label>
                                        <select className="form-control m-2 col-sm-3" id="supplierId" name="supplierId" value={this.state.supplierId} onChange={this.handleFormChange}>
                                            <option value="0">Select</option>
                                            {this.state.supplierList.map(o => (
                                                <option value={o.supplierId}>{o.supplierName}</option>
                                            ))}
                                        </select>
                                        <label htmlFor="name" className="m-2 col-sm-2" >HSN Code<span class="text-danger">*</span></label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-3" id="hsnCode" name="hsnCode" value={this.state.hsnCode} onChange={this.handleFormChange} />
                          
                                      
                                        <label htmlFor="name" className="m-2 col-sm-2">Is Active<span class="text-danger">*</span></label>
                                        <input type="checkbox" className="form-check-input m-1" checked={this.state.isActive}  onChange={this.handleCheckClick} />
                                        <label htmlFor="name" className="m-2 col-sm-2">Is BOM<span class="text-danger">*</span></label>
                                        <input type="checkbox" className="form-check-input m-1" checked={this.state.isBom}  onChange={this.handlebomClick} />
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
export default connect(mapStateToProps)(Material);

//export default Material
