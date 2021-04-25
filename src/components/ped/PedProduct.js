import React, { Component } from 'react'

import { connect } from "react-redux";
import ReactDatatable from '@ashvin27/react-datatable';
import $ from 'jquery';

export class PedProduct extends Component {

    constructor(props) {
        
        super(props)
          this.columns = [
            {
                key: "productName",
                text: "Name",
                sortable: true
            },{
                key: "productCode",
                text: "Product Code",
                sortable: true
            },{
                key: "orderCode",
                text: "Order Code",
                sortable: true
            },{
                key: "size",
                text: "Size",
                sortable: true
            },{
                key: "colors",
                text: "Colors",
                sortable: true
            },{
                key: "transmission",
                text: "Transmission",
                sortable: true
            } ,{
                key: "category",
                text: "Category",
                sortable: true
            },
            {
                key: "action",
                text: "Action",
                cell: (record, index) => {
                    return (
                            <button
                                className="btn btn-info btn-sm"
                                data-toggle="modal" data-target="#new_product"
                                onClick={this.editRecord.bind(this, record, index)}
                                style={{marginRight: '5px'}}>
                                    <i className="fas fa-pencil-alt" ></i>&nbsp;Edit
                            </button>
                       
                    );
                }
            }
        ];

        this.config = {
            key_column: 'productId',
            page_size: 10,
            length_menu: [10, 20, 50],
            show_filter: true,
            show_pagination: true,
            pagination: 'advance',
            filename: "Product",
            button: {
                excel: true,
                print: true,
                csv: true
            }
        }
        this.state = {
            productId:0,
            productName:"",
            productShortname:"",
            productCode:"",
            isActive:true,

            orderCode:"",
            colors:"",
            size:"",
            varientId:"",
            transmission:"",
            frame:"",
            fork:"",
            shifter:"",
            brakes:"",
            rim:"",
            hub:"",
            tires:"",
            description:"",
            image:"",
     
            showModal:false,
            errormsg:"",
            records:[],
            productVarientList:[],
            isLoaded:false,
            loginUser:this.props.profile
        }
       
    }

     
    componentDidMount() {
        this.getTableValues();
//        console.log('props profile-->:'+this.props.apiurl)
     }  
    getTableValues(){
        fetch(this.props.apiurl+"product/allProducts")
        .then(res => res.json())
        .then( (result) => {
              //  console.log("result-->"+JSON.stringify(result))
                if(result.valid){
                    this.setState({
                        records: result.productList,
                        productVarientList:result.productVarientList,
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
            productId:record.productId,
            productName:record.productName,
            productShortname:record.productShortname,
            productCode:record.productCode,
            category:record.category,
            orderCode:record.orderCode,
            colors:record.colors,
            varientId:record.varientId,
            transmission:record.transmission,
            size:record.size,
            frame:record.frame,
            description:record.description,
            isActive:tempstatus
         });
     }
     resetClick= () => {
         this.setState({ 
            productId:0,
            productName:"",
            productShortname:"",
            productCode:"",
            isActive:true,
            orderCode:"",
            colors:"",
            size:"",
            varientId:"",
            transmission:"",
            frame:"",
            fork:"",
            shifter:"",
            brakes:"",
            rim:"",
            hub:"",
            tires:"",
            description:"",
            category:"",
           // image:"",
            
            errormsg:"",
         });
    }

    saveClick= event =>{
        //  console.log("state-->"+JSON.stringify(this.state))
          if(this.state.productName === ""){
              this.setState({
                  errormsg: "Enter Product Name"
              });
          }
        //   else if(this.state.productShortname === ""){
        //     this.setState({
        //         errormsg: "Enter Product Short Name"
        //     });
        // } 
         else if(!this.state.isActive && this.state.productId===0){
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
         
          
  
              const obj = {
                  'productName':this.state.productName,'productShortname':this.state.productShortname,'productCode':this.state.productCode,
                  "isActive":tempstatus,'productId':this.state.productId,
                  "orderCode":this.state.orderCode,                  "colors":this.state.colors,
                  "size":this.state.size,                  "varientId":this.state.varientId,
                  "transmission":this.state.transmission,                  "frame":this.state.frame,
                //   "fork":this.state.fork,                  "shifter":this.state.shifter,
                //   "brakes":this.state.brakes,                  "rim":this.state.rim,
                //   "hub":this.state.hub,                  "tires":this.state.tires, 
                    "description":this.state.description,"category":this.state.category,
                 
                  "updatedBy":this.state.loginUser.userId,"createdBy":this.state.loginUser.userId};
  
               // POST request using fetch with error handling
                  const requestOptions = {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ "productObj": obj })
                  };
                  fetch(this.props.apiurl+"product/saveProduct", requestOptions)
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
                                  errormsg: "Product Details Saved Successfully",
                                  records: data.productList,
                              },()=>{
                                  this.resetClick();
                                  $("#new_product .close").click();
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

      refreshClick = () => {
        this.resetClick();
        this.componentDidMount();
    }



    render() {

        const mystyle = {
                leftAlign:{
                    justifyContent: "left !important",
                }
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
                                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#new_product">Create New  Product&nbsp;&nbsp;<i class="fas fa-plus"></i></button> &nbsp;&nbsp;&nbsp;
                                            <button type="button" className="btn btn-success " onClick={this.refreshClick}><i class="fas fa-sync"></i>&nbsp;Refresh</button>
                                            </span>
                                        </div>

                                </div>
                              
                                </div>
                                <div className="card-body" style={{height: 500}}>
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

            <div className="modal fade" id="new_product">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">New Product</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                                <div className="container-fluid">
                                    <div className="form-inline">

                                        
                                        <label htmlFor="code"  style={mystyle.leftAlign} className="m-2 col-sm-2 font-weight-normal control-label" >Product Code<span class="text-danger">*</span></label>
                                        <input type="text"   className="form-control form-control-sm m-2 col-sm-3" id="productCode" name="productCode" value={this.state.productCode} onChange={this.handleFormChange} />
                                        <label htmlFor="code"   style={mystyle.leftAlign}className="m-2 col-sm-2 font-weight-normal control-label" >Product Name<span class="text-danger">*</span></label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-3" id="productName" name="productName" value={this.state.productName} onChange={this.handleFormChange} />
                                        
                                        <label htmlFor="name"  style={mystyle.leftAlign} className="m-2 col-sm-2 font-weight-normal control-label" >Order Code</label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-3" id="orderCode" name="orderCode" value={this.state.orderCode} onChange={this.handleFormChange} />
                                        <label htmlFor="name"  style={mystyle.leftAlign} className="m-2 col-sm-2 font-weight-normal control-label" >Colors</label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-3" id="colors" name="colors" value={this.state.colors} onChange={this.handleFormChange}/>
                                        
                                        <label htmlFor="name"   style={mystyle.leftAlign} className="m-2 col-sm-2 font-weight-normal control-label" >Size</label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-3" id="size" name="size" value={this.state.size} onChange={this.handleFormChange} />
                                        <label htmlFor="name"  style={mystyle.leftAlign} className="m-2 col-sm-2 font-weight-normal control-label" >Varient</label>
                                       
                                        <select className="form-control form-control-sm m-2 col-sm-3" id="varientId" name="varientId" value={this.state.varientId} onChange={this.handleFormChange}>
                                                <option value="0">Select</option>
                                                {this.state.productVarientList.map(o => (
                                                    <option value={o.varientId}>{o.name}</option>
                                                ))}
                                            </select>
                                        <label htmlFor="name" className="m-2 col-sm-2 font-weight-normal" >Transmission</label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-3" id="transmission" name="transmission" value={this.state.transmission} onChange={this.handleFormChange} />
                                        <label htmlFor="name" className="m-2 col-sm-2 font-weight-normal" >Frame</label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-3" id="frame" name="frame" value={this.state.frame} onChange={this.handleFormChange} />
                                       
                                        {/* <label htmlFor="name" className="m-2 col-sm-2 font-weight-normal" >Fork</label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-3" id="fork" name="fork" value={this.state.fork} onChange={this.handleFormChange} />
                                        <label htmlFor="name" className="m-2 col-sm-2 font-weight-normal" >Shifter</label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-3" id="shifter" name="shifter" value={this.state.shifter} onChange={this.handleFormChange} />
                                       
                                        <label htmlFor="name" className="m-2 col-sm-2 font-weight-normal" >Brakes</label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-3" id="brakes" name="brakes" value={this.state.brakes} onChange={this.handleFormChange} />
                                        <label htmlFor="name" className="m-2 col-sm-2 font-weight-normal" >Rim</label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-3" id="rim" name="rim" value={this.state.rim} onChange={this.handleFormChange} />
                          
                                        <label htmlFor="name" className="m-2 col-sm-2 font-weight-normal" >Hub</label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-3" id="hub" name="hub" value={this.state.hub} onChange={this.handleFormChange} />
                                        <label htmlFor="name" className="m-2 col-sm-2 font-weight-normal" >Tires</label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-3" id="tires" name="tires" value={this.state.tires} onChange={this.handleFormChange} /> */}

                                        <label htmlFor="name" className="m-2 col-sm-2 font-weight-normal" >Description</label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-3" id="description" name="description" value={this.state.description} onChange={this.handleFormChange} />
                                        {/* <label htmlFor="name" className="m-2 col-sm-2" >image<span class="text-danger">*</span></label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-3" id="image" name="image" value={this.state.image} onChange={this.handleFormChange} /> */}

                                        <label htmlFor="name"  style={mystyle.leftAlign} className="m-2 col-sm-2 font-weight-normal control-label" >Category</label>
                                        <select className="form-control form-control-sm m-2 col-sm-3" id="category" name="category" value={this.state.category} onChange={this.handleFormChange}>
                                               <option value="0">Select</option>
                                               <option value="Basic">Basic</option>
                                               <option value="Premium">Premium</option>
                                        </select>

                                        <label htmlFor="name" className="m-2 col-sm-2 font-weight-normal">Is Active<span class="text-danger">*</span></label>
                                        <input type="checkbox" className="form-check-input m-1" checked={this.state.isActive}  onChange={this.handleCheckClick} />
                                       
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
export default connect(mapStateToProps)(PedProduct);


//export default PedProduct
