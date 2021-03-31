import React, { Component } from 'react'

import { connect } from "react-redux";
import ReactDatatable from '@ashvin27/react-datatable';



export class Dealer extends Component {

    constructor(props) {
        
        super(props)
        
     

        this.columns = [
            {
                key: "dealerCode",
                text: "Dealer Code",
                sortable: true
            },{
                key: "dealerName",
                text: "Dealer Name",
                sortable: true
            }  ,{
                key: "dealer_contact_person",
                text: "Contact Person",
                sortable: true
            }           ,{
                key: "dealer_phone",
                text: "Phone",
                sortable: true
            },
            {
                key: "email",
                text: "Email",
                sortable: true
            },{
                key: "address_1",
                text: "Address",
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
            key_column: 'dealerId',
            page_size: 10,
            length_menu: [10, 20, 50],
            show_filter: true,
            show_pagination: true,
            pagination: 'advance',
            filename: "Dealer",
            button: {
                excel: true,
                print: true,
                csv: true
            }
        }
        this.state = {
            dealerId:0,
            dealerName:"",
            dealerCode:"",
            dealerPhone:"",
            dealerContactPerson:"",
            mobile:"",
            email:"",
            fax:"",
            gst:"",
            pan:"",
            remarks:"",
            isActive:true,



            showModal:false,
            errormsg:"this is errrorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
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
        fetch(this.props.apiurl+"dealer/allDealers")
        .then(res => res.json())
        .then( (result) => {
              //  console.log("result-->"+JSON.stringify(result))
                if(result.valid){
                    this.setState({
                        records: result.dealerList
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
            orderCode:record.orderCode,
            colorCode:record.colorCode,
            orderCodeId:record.orderCodeId,
            isActive:tempstatus
         });
     }
     resetClick= () => {
         this.setState({ 
            dealerId:0,
            dealerName:"",
            dealerCode:"",
            dealerPhone:"",
            dealerContactPerson:"",
            mobile:"",
            email:"",
            fax:"",
            gst:"",
            pan:"",
            remarks:"",
            isActive:true,
            errormsg:"",
         });
    }

    saveClick= event =>{
        
        if(this.state.dealerName === ""){
            this.setState({
                errormsg: "Enter Dealer Name"
            });
        }else if(!this.state.isActive && this.state.dealerId===0){
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
                'dealerCode':this.state.dealerCode,'dealerName':this.state.dealerName, 
                'dealerContactPerson':this.state.dealerContactPerson,'mobile':this.state.mobile, 
                'email':this.state.email,'fax':this.state.fax, 
                'gst':this.state.gst,'pan':this.state.pan, 
                'remarks':this.state.remarks,
                isActive:tempstatus,'dealerId':this.state.dealerId,
               
                "updatedBy":this.state.loginUser.userId,"createdBy":this.state.loginUser.userId};

             // POST request using fetch with error handling
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ "dealerObj": obj })
                };
                fetch(this.props.apiurl+"dealer/saveDealer", requestOptions)
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
                                errormsg: "Dealer Details Saved Successfully",
                                records: data.dealerList,
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
                                        <div className="input-group input-group-sm">
                                            <span className="input-group-append">
                                            {/* <Link to="/addDealer"><button type="button" className="btn btn-primary btn-flat" >Create New Dealer &nbsp;&nbsp;<i class="fas fa-plus"></i></button></Link> */}
                                            <button type="button" className="btn btn-primary btn-flat" data-toggle="modal" data-target="#new_dealer">Create New Dealer &nbsp;&nbsp;<i class="fas fa-plus"></i></button>
                                            </span>
                                        </div>

                                </div>
                                <div className="card-tools">
                                    <div className="input-group input-group-sm" style={{width: 350}}>
                                    
                                        <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />
                                        <div className="input-group-append">
                                        <button type="submit" className="btn btn-default">
                                            <i className="fas fa-search" />
                                        </button>
                                        </div>
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

                
                <div className="modal fade" id="new_dealer">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">New Dealer</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">


                       <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    
                                <div className="card card-primary card-outline ">
                                        <div className="card-header">
                                            <h3 className="card-title">Personal</h3>
                                            <div className="card-tools">
                                            
                                            
                                            </div>
                                        </div>
                                        <div className="card-body" >

                                            <form>
                                                    <div className="form-row m-2">
                                                     
                                                        <div className="form-group col-md-4">
                                                            <label htmlFor="dealerCode">Dealer Code <span class="text-danger">*</span></label>
                                                            <input type="text" className="form-control form-control-sm" id="dealerCode" name="dealerCode" value= {this.state.dealerCode} onChange={this.handleFormChange} placeholder="Dealer Code " readOnly/>
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                        <label htmlFor="dealerName">Name <span class="text-danger">*</span></label>
                                                        <input type="text" className="form-control form-control-sm" id="dealerName" name="dealerName" value= {this.state.dealerName} onChange={this.handleFormChange} placeholder="Name" />
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="form-row m-2">
                                                        <div className="form-group col-md-4">
                                                        <label htmlFor="dealerContactPerson">Contact Person</label>
                                                        <input type="text" className="form-control form-control-sm" id="dealerContactPerson" name="dealerContactPerson" value= {this.state.dealerContactPerson} onChange={this.handleFormChange} placeholder="Contact Person " />
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                        <label htmlFor="mobile">Mobile</label>
                                                        <input type="text" className="form-control form-control-sm" id="mobile" name="mobile" value= {this.state.mobile} onChange={this.handleFormChange} placeholder="Mobile" />
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                        <label htmlFor="email">Email</label>
                                                        <input type="text" className="form-control form-control-sm" id="email" name="email" value= {this.state.email} onChange={this.handleFormChange} placeholder="Email" />
                                                        </div>
                                                    </div>




                                                    
                                                    <div className="form-row m-2">
                                                        <div className="form-group col-md-4">
                                                        <label htmlFor="fax">Fax</label>
                                                        <input type="text" className="form-control form-control-sm" id="fax" name="fax" value= {this.state.fax} onChange={this.handleFormChange} placeholder="Fax" />
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                        <label htmlFor="gst">GST</label>
                                                        <input type="text" className="form-control form-control-sm" id="gst" name="gst" value= {this.state.gst} onChange={this.handleFormChange} placeholder="GST" />
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                        <label htmlFor="pan">PAN</label>
                                                        <input type="text" className="form-control form-control-sm" id="pan" name="pan" value= {this.state.pan} onChange={this.handleFormChange} placeholder="PAN" />
                                                        </div>
                                                    </div>
                                                    <div className="form-row m-2">
                                                        <div className="form-group col-md-4">
                                                        <label htmlFor="address1">Address</label>
                                                        <input type="text" className="form-control form-control-sm" id="address1" name="address1" value= {this.state.address1} onChange={this.handleFormChange} placeholder="address" />
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                        <label htmlFor="city">City</label>
                                                        <input type="text" className="form-control form-control-sm" id="city" name="city" value= {this.state.city} onChange={this.handleFormChange} placeholder="city" />
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                        <label htmlFor="state">State</label>
                                                        <input type="text" className="form-control form-control-sm" id="state" name="state" value= {this.state.state} onChange={this.handleFormChange} placeholder="state" />
                                                        </div>
                                                    </div>
                                                   
                                                    <div className="form-row m-2">
                                                        <div className="form-group col-md-4">
                                                        <label htmlFor="inputEmail4">Pin Code</label>
                                                        <input type="text" className="form-control form-control-sm" id="remarks" name="remarks" value= {this.state.remarks} onChange={this.handleFormChange} placeholder="Remarks" />
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                        <label htmlFor="inputEmail4">Remarks</label>
                                                        <input type="text" className="form-control form-control-sm" id="remarks" name="remarks" value= {this.state.remarks} onChange={this.handleFormChange} placeholder="Remarks" />
                                                        </div>
                                                       
                                                        <div className="col-md-4 form-inline">
                                                        <label htmlFor="inputPassword4">Is Active</label>&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <input type="checkbox" className="form-control form-control-sm" checked={this.state.isActive}  onChange={this.handleCheckClick} />
                                                        </div>
                                                    </div>
                                                 </form>

                                        </div>
                                    
                                    </div>

                                    {/* <div className="card card-success card-outline direct-chat direct-chat-primary collapsed-card">
                                        <div className="card-header">
                                            <h3 className="card-title">Address</h3>
                                            <div className="card-tools">
                                            
                                            <button type="button" className="btn btn-tool bg-primary" data-card-widget="collapse">
                                                <i className="fas fa-plus" />
                                            </button>
                                        
                                            </div>
                                        </div>
                                        <div className="card-body" style={{display: 'none'}}>
                                            <form>

                                                    <div className="form-row m-2">
                                                        <div className="form-group col-md-6">
                                                        <label htmlFor="inputEmail4">Address Name</label>
                                                        <input type="text" className="form-control form-control-sm" id="orderCode" name="orderCode" value= {this.state.orderCode} onChange={this.handleFormChange} placeholder="Address Name" />
                                                        </div>
                                                        <div className="col-md-6 form-inline">
                                                        <label htmlFor="inputPassword4">Is Default Address</label>&nbsp;&nbsp;&nbsp;
                                                        <input type="checkbox" className="form-control form-control-sm" id="orderCode" name="orderCode" value= {this.state.orderCode} onChange={this.handleFormChange} placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div className="form-row m-2">
                                                        <div className="form-group col-md-6">
                                                        <label htmlFor="inputEmail4">Address 1</label>
                                                        <input type="text" className="form-control form-control-sm" id="orderCode" name="orderCode" value= {this.state.orderCode} onChange={this.handleFormChange} placeholder="Address 1" />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                        <label htmlFor="inputPassword4">Phone</label>
                                                        <input type="text" className="form-control form-control-sm" id="orderCode" name="orderCode" value= {this.state.orderCode} onChange={this.handleFormChange} placeholder="Phone" />
                                                        </div>
                                                    </div>
                                                    <div className="form-row m-2">
                                                        <div className="form-group col-md-6">
                                                        <label htmlFor="inputEmail4">Address 2</label>
                                                        <input type="text" className="form-control form-control-sm" id="orderCode" name="orderCode" value= {this.state.orderCode} onChange={this.handleFormChange} placeholder="Address 2" />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                        <label htmlFor="inputPassword4">Phone 2</label>
                                                        <input type="text" className="form-control form-control-sm" id="orderCode" name="orderCode" value= {this.state.orderCode} onChange={this.handleFormChange} placeholder="Mobile" />
                                                        </div>
                                                    </div>
                                                    <div className="form-row m-2">
                                                        <div className="form-group col-md-6">
                                                        <label htmlFor="inputEmail4">Address 3</label>
                                                        <input type="text" className="form-control form-control-sm" id="orderCode" name="orderCode" value= {this.state.orderCode} onChange={this.handleFormChange} placeholder="Address 3" />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                        <label htmlFor="inputPassword4">Phone 3</label>
                                                        <input type="text" className="form-control form-control-sm" id="orderCode" name="orderCode" value= {this.state.orderCode} onChange={this.handleFormChange} placeholder="Fax" />
                                                        </div>
                                                    </div>
                                                    <div className="form-row m-2">
                                                        <div className="form-group col-md-6">
                                                        <label htmlFor="inputEmail4">City</label>
                                                        <input type="text" className="form-control form-control-sm" id="orderCode" name="orderCode" value= {this.state.orderCode} onChange={this.handleFormChange} placeholder="City" />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                        <label htmlFor="inputEmail4">Pin Code</label>
                                                        <input type="text" className="form-control form-control-sm" id="orderCode" name="orderCode" value= {this.state.orderCode} onChange={this.handleFormChange} placeholder="Pin Code" />
                                                        </div>
                                                    </div>
                                                    <div className="form-row m-2">
                                                        <div className="form-group col-md-6">
                                                        <label htmlFor="inputEmail4">State</label>
                                                        <input type="text" className="form-control form-control-sm" id="orderCode" name="orderCode" value= {this.state.orderCode} onChange={this.handleFormChange} placeholder="State" />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                        <label htmlFor="inputPassword4">Country</label>
                                                        <input type="text" className="form-control form-control-sm" id="orderCode" name="orderCode" value= {this.state.orderCode} onChange={this.handleFormChange} placeholder="Country" />
                                                        </div>
                                                    </div>
                                                   
                                            </form>
                                        </div>
                                    </div> */}

                                  
                                    
                                    

                                </div>
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

 export default connect(mapStateToProps)(Dealer);
//export default ColorCode


//export default Dealer
