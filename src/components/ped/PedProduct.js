import React, { Component } from 'react'

import { connect } from "react-redux";
import ReactDatatable from '@ashvin27/react-datatable';
export class PedProduct extends Component {

    constructor(props) {
        
        super(props)
          this.columns = [
            {
                key: "productName",
                text: "Name",
                sortable: true
            },{
                key: "productShortname",
                text: "Short Name",
                sortable: true
            }  ,{
                key: "productCode",
                text: "Product Code",
                sortable: true
            } ,
            {
                key: "action",
                text: "Action",
                cell: (record, index) => {
                    return (
                            <button
                                className="btn btn-info btn-sm"
                               // data-toggle="modal" data-target="#uom-new-model"
                                onClick={this.editRecord.bind(this, record, index)}
                                style={{marginRight: '5px'}}>
                                    <i className="fas fa-pencil-alt" ></i>Edit
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
        fetch(this.props.apiurl+"product/allProducts")
        .then(res => res.json())
        .then( (result) => {
              //  console.log("result-->"+JSON.stringify(result))
                if(result.valid){
                    this.setState({
                        records: result.productList
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
            errormsg:"",
         });
    }

    saveClick= event =>{
        //  console.log("state-->"+JSON.stringify(this.state))
          if(this.state.productName === ""){
              this.setState({
                  errormsg: "Enter Product Name"
              });
          }else if(this.state.productShortname === ""){
            this.setState({
                errormsg: "Enter Product Short Name"
            });
        }  else if(!this.state.isActive && this.state.productId===0){
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
                                        <div className="form-inline">
                                            <label htmlFor="inlineFormEmail" className="m-2">Name <span class="text-danger">*</span></label>
                                            <input type="email" className="form-control m-2 form-control-sm" id="productName" name="productName" value= {this.state.productName} onChange={this.handleFormChange} placeholder="Name"  />
                                            
                                            <label htmlFor="inlineFormEmail" className="m-2">Short Name <span class="text-danger">*</span></label>
                                            <input type="email" className="form-control m-2 form-control-sm" id="productShortname" name="productShortname" value= {this.state.productShortname} onChange={this.handleFormChange} placeholder="Short Name"  />
                                            <label htmlFor="inlineFormEmail" className="m-2">Code <span class="text-danger">*</span></label>
                                            <input type="email" className="form-control m-2 form-control-sm" id="productCode" name="productCode" value= {this.state.productCode} onChange={this.handleFormChange} placeholder="Code"  />
                                            <label htmlFor="inlineFormEmail" className="m-2">is Active<span class="text-danger">*</span></label>
                                            <input className="form-check-input" type="checkbox" checked={this.state.isActive}  onChange={this.handleCheckClick}/>
                                            
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <button type="button" className="btn btn-primary btn-sm m-2" onClick={this.saveClick}>Save</button>
                                            <button type="button" className="btn btn-warning btn-sm m-2" onClick={this.resetClick}>Reset</button>
                                            <span className="text-danger">{this.state.errormsg}</span>
                                        </div>

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
export default connect(mapStateToProps)(PedProduct);


//export default PedProduct
