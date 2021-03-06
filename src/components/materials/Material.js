import React, { Component } from 'react'

import { connect } from "react-redux";
import ReactDatatable from '@ashvin27/react-datatable';
import $ from "jquery";

export class Material extends Component {

    constructor(props) {
        
        super(props)
          this.columns = [
            {
                key: "materialCode",
                text: "Code",
                sortable: true
            },
            {
                key: "rawMaterialName",
                text: "Name",
                sortable: true
            },{
                key: "materialType",
                text: "Material Type",
                sortable: true
            }  ,{
                key: "measurementType",
                text: "MeasureMent Type",
                sortable: true
            } ,{
                key: "measurementName",
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
                key: "isBom",
                text: "BOM",
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
                                    <i className="fas fa-pencil-alt" ></i>&nbsp;Edit
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
            isBasic:false,
            isPremium:false,
            isCommon:false,
            isActive:true,

            supplierName:"",
            supplierList:[],
            showModal:false,
            errormsg:"",
            records:[],
            isLoaded:false,
            loginUser:this.props.profile,

            materialTypeList:[],
            uomList:[],
            unitList:[],
            seqList:[],
        }
       
    }
    componentDidMount() {
        this.getTableValues();
//        console.log('props profile-->:'+this.props.apiurl)
        $("#as-react-datatable-container").find('select').addClass("form-control-sm");
        $("#as-react-datatable-container").find('input').addClass("form-control-sm");

     }  
    getTableValues(){
        fetch(this.props.apiurl+"rawmaterial/allRawMaterial")
        .then(res => res.json())
        .then( (result) => {
              //  console.log("result-->"+JSON.stringify(result))
                if(result.valid){
                    this.setState({
                        records: result.rawMaterialList,
                        supplierList:result.supplierList,
                        materialTypeList:result.materialTypeList,
                        uomList:result.uomList,
                        seqList:result.seqList
                    },()=>{ $("#as-react-datatable td").css({"padding":'0.50rem'});});
                }else{}
            },(error) => {
            }
        )
    }

    handleFormChange = event => {

        if(event.target.name === "itemType"){

            let mcode=this.state.seqList.filter(item => item.value == event.target.options[event.target.selectedIndex].text )
            console.log("mcode.currentNext--"+mcode[0].currentNext)
            this.setState({materialCode: event.target.options[event.target.selectedIndex].text+mcode[0].currentNext});
        }
        this.setState({[event.target.name]: event.target.value});


    };

    handleFormChange1 = event => {
        this.setState({[event.target.name]: event.target.value});

        if( event.target.value === 0 && event.target.value === "0"){
            this.setState({unitList:[] });
        }else{
            this.setState({unitList: this.state.uomList.filter(item => item.measurementType == event.target.value )        });
        }
        

    };



    handleCheckClick = () => {
        this.setState({ isActive: !this.state.isActive });
    }
    handlebomClick= () => {
        this.setState({ isBom: !this.state.isBom },()=>{
            if(!this.state.isBom){
                this.setState({ 
                    isBasic:false,
                    isPremium:false,
                    isCommon:false
                 });
            }
        });
    }

    handlebasicClick= () => {
        this.setState({ isBasic: !this.state.isBasic },()=>{
            if(this.state.isBasic)
            { this.setState({ isPremium: false,isCommon:false})            }
        });
    }

    handlecommonClick= () => {
        
        this.setState({ isCommon: !this.state.isCommon },()=>{
            if(this.state.isCommon)
            { this.setState({ isBasic: false,isPremium:false})            }
        });

    }

    handlepremiumClick= () => {
       
        this.setState({ isPremium: !this.state.isPremium },()=>{
            if(this.state.isPremium)
            { this.setState({ isBasic: false,isCommon:false})            }
        });

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
           isBasic:false,
            isPremium:false,
            isCommon:false,
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
        isActive:tempstatus,
        isBasic:record.isBasic,
        isPremium:record.isPremium,
        isCommon:record.isCommon,
        errormsg:"",
     },()=>{
        if( record.measurementType === 0 && record.measurementType === "0"){
            this.setState({unitList:[] });
        }else{
            this.setState({unitList: this.state.uomList.filter(item => item.measurementType == record.measurementType )        });
        }
     });
 }

 saveClick= event =>{
      //console.log("state-->"+JSON.stringify(this.state))
      if(this.state.itemType === "0" || this.state.itemType === ""){
        this.setState({
            errormsg: "Select Material Type"
        });
    } else if(this.state.rawMaterialName === ""){
          this.setState({
              errormsg: "Enter Material Name"
          });
      } else if(this.state.measurementType === "0" || this.state.measurementType === ""){
        this.setState({
            errormsg: "Select Measurement Type"
        });
    }else if(this.state.units === "0" || this.state.units === ""){
        this.setState({
            errormsg: "Select Units"
        });
    }else if(this.state.supplierId === "0" || this.state.supplierId === ""){
        this.setState({
            errormsg: "Select Supplier"
        });
    }else if(!this.state.isActive && this.state.rawMaterialId===0){
          this.setState({
              errormsg: "Select Active"
          });
    }else if(this.state.isBom && (!this.state.isBasic &&  !this.state.isCommon && !this.state.isPremium)){
        this.setState({
            errormsg: "Select Anyone BOM Details"
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
              'isBasic':this.state.isBasic,'isCommon':this.state.isCommon,'isPremium':this.state.isPremium,
              
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
                           this.resetClick();
                           this.setState({
                              errormsg: "Raw Material Details Saved Successfully",
                              records: data.rawMaterialList,
                              seqList:data.seqList
                          },()=>{
                              
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
    this.resetClick();
    this.componentDidMount();
}



    render() {

        let optionTemplate = this.state.materialTypeList.map(o => (
            <option value={o.materialTypeId}>{o.materialTypeName}</option>
          ));

          let optionTemplate1 = this.state.unitList.map(o => (
            <option value={o.unitOfMeasurementId}>{o.measurementName}</option>
          ));

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
                                                <button type="button" className="btn btn-primary btn-flat" onClick={this.resetClick} data-toggle="modal" data-target="#material-new-model">Create New  Material&nbsp;&nbsp;<i className="fas fa-plus"></i></button>&nbsp;&nbsp;&nbsp;
                                                <button type="button" className="btn btn-success" onClick={this.refreshClick}><i className="fas fa-sync"></i>&nbsp;Refresh</button>
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
                                        
                                        <label htmlFor="code" className="m-2 col-sm-2 font-weight-normal" >Material Type<span className="text-danger">*</span></label>
                                        <select className="form-control m-2 col-sm-3" id="itemType" name="itemType" value={this.state.itemType} onChange={this.handleFormChange}>
                                             <option value="0">Select</option>
                                              {optionTemplate}
                                        </select>
                                        <label htmlFor="code" className="m-2 col-sm-2 font-weight-normal" >Material Code<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-3" id="materialCode" name="materialCode" value={this.state.materialCode} onChange={this.handleFormChange} />
                                        <label htmlFor="code" className="m-2 col-sm-2 font-weight-normal" >Material Name<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-3" id="rawMaterialName" name="rawMaterialName" value={this.state.rawMaterialName} onChange={this.handleFormChange} />
                                       
                                        <label htmlFor="name" className="m-2 col-sm-2 font-weight-normal" >Remarks</label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-3" id="remarks" name="remarks" value={this.state.remarks} onChange={this.handleFormChange} />
                                        <label htmlFor="code" className="m-2 col-sm-2 font-weight-normal" >MeasureMent Type<span className="text-danger">*</span></label>
                                        <select className="form-control m-2 col-sm-3" id="measurementType" name="measurementType" value={this.state.measurementType} onChange={this.handleFormChange1} >
                                            <option value="0">Select</option>
                                            <option value="Mass">Mass</option>
                                            <option value="Volume">Volume</option>
                                            <option value="Unit">Unit</option>
                                            <option value="Distance">Distance</option>
                                        </select>
                                        <label htmlFor="name" className="m-2 col-sm-2 font-weight-normal" >Units <span className="text-danger">*</span></label>
                                        <select className="form-control m-2 col-sm-3" id="units" name="units" value={this.state.units} onChange={this.handleFormChange} >
                                            <option value="0">Select</option>
                                             {optionTemplate1}
                                        </select>

                                        
                                        <label htmlFor="name" className="m-2 col-sm-2 font-weight-normal" >Price</label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-3" id="price" name="price" value={this.state.price} onChange={this.handleFormChange}/>
                                        <label htmlFor="name" className="m-2 col-sm-2 font-weight-normal" >Reference Level</label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-3" id="referenceLevel" name="referenceLevel" value={this.state.referenceLevel} onChange={this.handleFormChange} />
                                        <label htmlFor="code" className="m-2 col-sm-2 font-weight-normal" >Supplier Name<span className="text-danger">*</span></label>
                                        <select className="form-control m-2 col-sm-3" id="supplierId" name="supplierId" value={this.state.supplierId} onChange={this.handleFormChange}>
                                            <option value="0">Select</option>
                                            {this.state.supplierList.map(o => (
                                                <option value={o.supplierId}>{o.supplierName}</option>
                                            ))}
                                        </select>
                                        <label htmlFor="name" className="m-2 col-sm-2 font-weight-normal" >HSN Code</label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-3" id="hsnCode" name="hsnCode" value={this.state.hsnCode} onChange={this.handleFormChange} />
                          
                                      


                                    </div>
                                <form className="form-inline">
                                        <div className="form-check row">
                                            <input className="form-check-input" type="checkbox" id={this.state.isActive}  checked={this.state.isActive}  onChange={this.handleCheckClick}/>
                                            <label className="form-check-label" htmlFor="inlineFormCheck">
                                                Is Active
                                            </label>
                                            &nbsp;&nbsp;&nbsp;
                                            <input className="form-check-input" type="checkbox" id={this.state.isBom}  checked={this.state.isBom}  onChange={this.handlebomClick} />
                                            <label className="form-check-label" htmlFor="inlineFormCheck">
                                                Is BOM
                                            </label>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                        {
                                            this.state.isBom ?
                                            <>
                                                <input className="form-check-input" type="checkbox" id={this.state.isBasic}  checked={this.state.isBasic}  onChange={this.handlebasicClick} />
                                                <label className="form-check-label" htmlFor="inlineFormCheck">
                                                            Basic
                                                </label>
                                                &nbsp;&nbsp;
                                                <input className="form-check-input" type="checkbox" id={this.state.isPremium}  checked={this.state.isPremium}  onChange={this.handlepremiumClick}  />
                                                <label className="form-check-label" htmlFor="inlineFormCheck">
                                                            Premium
                                                </label> &nbsp;&nbsp;
                                                <input className="form-check-input" type="checkbox" id={this.state.isCommon}  checked={this.state.isCommon}  onChange={this.handlecommonClick}  />
                                                <label className="form-check-label" htmlFor="inlineFormCheck">
                                                            Common
                                                </label>
                                            </>
                                        :""}

                                        </div>
                                </form>


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
