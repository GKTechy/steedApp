import React, { Component } from 'react'


import { connect } from "react-redux";
import ReactDatatable from '@ashvin27/react-datatable';
import Select from 'react-select';

export class DealerOrder extends Component {

    constructor(props) {
        
        super(props)
        
     

        this.columns = [
            {
                key: "orderNo",
                text: "Order No",
                sortable: true
            },{
                key: "orderDate",
                text: "Date",
                sortable: true
            },{
                key: "reference",
                text: "Reference",
                sortable: true
            } ,{
                key: "orderFor",
                text: "Order For",
                sortable: true
            },{
                key: "dealerName",
                text: "Dealer Name",
                sortable: true
            },{
                key: "dealerContactPerson",
                text: "Contact Person",
                sortable: true
            }  ,
            
            {
                key: "action",
                text: "Action",
                cell: (record, index) => {
                    return (
                            <button
                                className="btn btn-info btn-sm"
                                data-toggle="modal" data-target="#new_order"
                                onClick={this.editRecord.bind(this, record, index)}
                                style={{marginRight: '5px'}}>
                                    <i className="fas fa-pencil-alt" ></i>&nbsp;Edit
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
            orderDate:"",
            orderNo:"",
            dealerId:"",
            reference:"",
            dealerContactPerson:"",
            orderFor:"Dealer",
            dealerOrderId:0,

            subtotal:"",
			taxTotal:"",
			total:"",

            showModal:false,
            errormsg:"",
            records:[],
            dealerList:[],
            productList:[],
            orderDetailsList:[],
            productsearch:[],
            isLoaded:false,
            loginUser:this.props.profile
        }
       
    }

    componentDidMount() {
        this.getTableValues();
//        console.log('props profile-->:'+this.props.apiurl)
     }  
    getTableValues(){
        fetch(this.props.apiurl+"dealerOrder/allDealerOrders")
        .then(res => res.json())
        .then( (result) => {
              //  console.log("result-->"+JSON.stringify(result))
                if(result.valid){
                    this.setState({
                        records: result.dealerOrderList,
                        dealerList: result.dealerList,
                        productList:result.productList
                    },()=>{
                            for (const [index, value] of this.state.productList.entries()) {
                                this.state.productsearch.push({
                                    label: value.orderCode,
                                    value: value.productId
                                });
                            }
                    });

                  //  console.log("nextDealerCode-->"+result.sObj.currentNext)
                }else{}
            },(error) => {
            }
        )
    }

    handleFormChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };
    handleFormChange1 = event => {
        this.setState({[event.target.name]: event.target.value});
        if(event.target.value === 0 || event.target.value === "0"){
            this.setState({dealerContactPerson: ""});
        }else{
         var contactPerson=this.state.dealerList.filter( (d)=> d.dealerId == event.target.value)
       // console.log("-->"+JSON.stringify(contactPerson[0].dealerContactPerson))
        this.setState({dealerContactPerson: contactPerson[0].dealerContactPerson});
        }
       

    };


    newOrderClick = () => {
      
        var emptyobj={
            dealerOrderId:0,
            productId:0,
            orderCode:"",
            productName:"",
            size:"",
            colors:"",
            qty:"",
            price:"",
            amount:"",
            gst:"GST_0",
            gstAmt:""
        }

        let orderDetailsListtemp = this.state.orderDetailsList
        orderDetailsListtemp.push(emptyobj)
        
        this.setState({ orderDetailsList:orderDetailsListtemp },()=>{
            
        })
       
    }
    
    handleProductChange = (ind,event) => {      
       // console.log("target value-->"+event.target.value) 

        const { orderDetailsList } = this.state;
        //console.log("current-->"+JSON.stringify(orderDetailsList[ind]))
        orderDetailsList[ind].productId = event.target.value
        
        var product=this.state.productList.filter( (d)=> d.productId == event.target.value)
       // console.log("product-->"+JSON.stringify(product[0].productCode))

         orderDetailsList[ind].productName = product[0].productCode
         orderDetailsList[ind].size = product[0].size
         orderDetailsList[ind].colors = product[0].colors
         orderDetailsList[ind].qty = 
         
         
        this.setState({ orderDetailsList:orderDetailsList },()=>{
         });
        
    }

    handleProductQtyChange= (ind,event) => {      
         const { orderDetailsList } = this.state;
         orderDetailsList[ind].qty = event.target.value
         this.setState({ orderDetailsList:orderDetailsList },()=>{
            this.priceCalculation(orderDetailsList[ind],ind);
          });
     }

    handleProductPriceChange= (ind,event) => {      
        const { orderDetailsList } = this.state;
        orderDetailsList[ind].price = event.target.value
        this.setState({ orderDetailsList:orderDetailsList },()=>{
            this.priceCalculation(orderDetailsList[ind],ind);
         });
    }

    handleProductGSTChange= (ind,event) => {      
        const { orderDetailsList } = this.state;
        orderDetailsList[ind].gst = event.target.value
        this.setState({ orderDetailsList:orderDetailsList },()=>{
            this.priceCalculation(orderDetailsList[ind],ind);
         });
    }

    priceCalculation(currentRow,ind){

        var qty=currentRow.qty;
        var price=currentRow.price;
        var gst=currentRow.gst;
      //  console.log("gst-->"+gst)
        var temp=gst.split("_");
        //console.log('gst %'+temp[1])

        if(qty !== undefined && price !== undefined){
            var amt=qty*price;
            const { orderDetailsList } = this.state;
            

            var gstAmt = amt * temp[1] /100;
            orderDetailsList[ind].gstAmt = gstAmt
            orderDetailsList[ind].amount = amt +gstAmt


          //  console.log('amt--'+amt)
            this.setState({ orderDetailsList:orderDetailsList },()=>{

                var subtotal = this.state.orderDetailsList.reduce((total, currentValue) => total = total + currentValue.amount,0);
                var taxamt = this.state.orderDetailsList.reduce((total, currentValue) => total = total + currentValue.gstAmt,0);
               // console.log("subtotal-->"+subtotal)
               // console.log("taxamt-->"+taxamt)
                this.setState({ subtotal:subtotal,taxTotal:taxamt,total:taxamt+subtotal });
            });
        }
     


    }
    
    handleChange = (ind,event) => {
        const { orderDetailsList } = this.state;

       var isDuplicate= orderDetailsList.some(function(e) {return e.orderCode === event.value});
//        console.log("isDuplicate-->"+isDuplicate)
        if(isDuplicate){
             orderDetailsList[ind].orderCode = ''
             orderDetailsList[ind].productId = ''
             orderDetailsList[ind].productName = ''
             orderDetailsList[ind].size = ''
             orderDetailsList[ind].colors = ''
             orderDetailsList[ind].qty = 

            this.setState({orderDetailsList:orderDetailsList, errormsg: event.label+" Order code Already Added " },()=>{});
        }else{
            
            orderDetailsList[ind].orderCode = event.value
            var product=this.state.productList.filter( (d)=> d.productId == event.value)
         //   console.log("product-->"+JSON.stringify(product[0]))
          //  console.log("product-->"+JSON.stringify(event.value))
             orderDetailsList[ind].productId = product[0].productId
             orderDetailsList[ind].productName = product[0].productCode
             orderDetailsList[ind].size = product[0].size
             orderDetailsList[ind].colors = product[0].colors
             orderDetailsList[ind].qty = 
             
            this.setState({ orderDetailsList:orderDetailsList,errormsg: "" },()=>{});
        }
    
    };

    removeProductRow = (ind) => {
        const { orderDetailsList } = this.state;
        orderDetailsList.splice(ind,1);
          
         this.setState({ orderDetailsList:orderDetailsList,errormsg: "" },()=>{});
    };


    saveClick= event =>{
        
        if(this.state.orderDate === ""){
            this.setState({
                errormsg: "Enter Date"
            });
        }else if(this.state.dealerId === ""){
            this.setState({
                errormsg: "Select Dealer"
            });
        }else if(this.state.orderDetailsList.length === 0){
            this.setState({
                errormsg: "Enter Products"
            });
        }else{
           
        

            var headerobj={
                "dealerOrderId":this.state.dealerOrderId,
                'orderNo':this.state.orderNo,'orderDate':this.state.orderDate,
                'reference':this.state.reference, 'orderFor':this.state.orderFor,'dealerId':this.state.dealerId, 
                'subtotal':this.state.subtotal, 'taxTotal':this.state.taxTotal, 'total':this.state.total, 
            }
            const obj = {
                "dealerOrderObj":headerobj,
                 "dealerOrderProductsList":this.state.orderDetailsList,
                "updatedBy":this.state.loginUser.userId,"createdBy":this.state.loginUser.userId};

             // POST request using fetch with error handling
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify( obj)
                };
              
                console.log("save obj-->"+JSON.stringify( obj))
                
                fetch(this.props.apiurl+"dealerOrder/saveDealerOrder", requestOptions)
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
                        this.setState({ errormsg: "Successfully Added the New Order"});
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


     editRecord = (record, index) => {

        this.setState({
            orderDate:record.orderDate,
            orderNo:record.orderNo,
            dealerId:record.dealerId,
            reference:record.reference,
            dealerContactPerson:record.dealerContactPerson,
            orderFor:record.orderFor,
            dealerOrderId:record.dealerOrderId,

            subtotal:record.subtotal,
            taxTotal:record.taxTotal,
            total:record.total,
        });

        fetch(this.props.apiurl+"dealerOrder/getProductDetails?id="+record.dealerOrderId)
        .then(res => res.json())
        .then( (result) => {
              //  console.log("result-->"+JSON.stringify(result))
                if(result.valid){
                    this.setState({
                        orderDetailsList: result.dealerOrderProductsList,
                       // dealerList: result.dealerList,
                      //  productList:result.productList
                    },()=>{
                        
                      
                        const { orderDetailsList } = this.state;


                        orderDetailsList.map((ord,i)=>{
                            orderDetailsList[i].orderCode = ord.productId
                            var product=this.state.productList.filter( (d)=> d.productId == ord.productId)
                            orderDetailsList[i].productName = product[0].productCode
                            orderDetailsList[i].size = product[0].size
                            orderDetailsList[i].colors = product[0].colors
                        })
                        this.setState({ orderDetailsList:orderDetailsList,errormsg: "" },()=>{
                            
                            console.log("orderDetailsList-->"+JSON.stringify(this.state.orderDetailsList))
                            console.log("productList-->"+JSON.stringify(this.state.productsearch))
                        });


                    });

                  //  console.log("nextDealerCode-->"+result.sObj.currentNext)
                }else{}
            },(error) => {
            }
        )


     }

    render() {

        //const productsearch=[];



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
                                                <button type="button" className="btn btn-primary btn-flat" data-toggle="modal" data-target="#new_order">Create New Order &nbsp;&nbsp;<i class="fas fa-plus"></i></button>&nbsp;&nbsp;&nbsp;
                                                <button type="button" className="btn btn-success" onClick={this.refreshClick}><i class="fas fa-sync"></i>&nbsp;Refresh</button>
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

                <div className="modal fade" id="new_order">
                    <div className="modal-dialog mw-100 w-80">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title font-weight-normal">New Order</h4>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <div class="ml-5">
                                 <button type="button" className="btn btn-primary" onClick={this.saveClick}>Save</button>
                            </div>
                            
                            
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                                <div className="container-fluid">
                                    <div className="form-inline">
                                        <label htmlFor="name" className="m-2 col-sm-2 font-weight-normal">Date<span class="text-danger">*</span></label>
                                        <input type="date" className="form-control form-control-sm m-2 col-sm-3" id="orderDate" name="orderDate" value= {this.state.orderDate}   onChange={this.handleFormChange} />
                                        <label htmlFor="name" className="m-2 col-sm-2 font-weight-normal">Order No<span class="text-danger">*</span></label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-3" id="orderNo" name="orderNo" value= {this.state.orderNo} onChange={this.handleFormChange} placeholder="Order No" readOnly />
                                        <label htmlFor="name" className="m-2 col-sm-2 font-weight-normal" >Reference</label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-3" id="reference" name="reference" value= {this.state.reference} onChange={this.handleFormChange} placeholder="Order Reference" />
                                        <label htmlFor="name" className="m-2 col-sm-2 font-weight-normal" >Order For</label>
                                        <select className="form-control m-2 col-sm-3" id="orderFor" name="orderFor" value={this.state.orderFor} onChange={this.handleFormChange} >
                                            <option value="Dealer">Dealer</option>
                                            <option value="Customer">Customer</option>
                                        </select>
                                        <label htmlFor="name" className="m-2 col-sm-2 font-weight-normal" >Dealer</label>
                                        <select className="form-control m-2 col-sm-3" id="dealerId" name="dealerId" value={this.state.dealerId} onChange={this.handleFormChange1} >
                                                <option value="0">Select Dealer</option>
                                                {this.state.dealerList.map(o => (
                                                    <option value={o.dealerId}>{o.dealerName}</option>
                                                ))}

                                        </select>
                                        <label htmlFor="name" className="m-2 col-sm-2 font-weight-normal" >Contact Person</label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-3" id="dealerContactPerson" name="dealerContactPerson" value= {this.state.dealerContactPerson} onChange={this.handleFormChange} placeholder="Contact Person" />

                                    </div>
                                        
                                        <div className="row">
                                        &nbsp;&nbsp;<button type="button" className="btn btn-primary btn-sm" onClick={this.newOrderClick}>Add &nbsp;&nbsp;<i className="fas fa-plus"></i></button>&nbsp;&nbsp;&nbsp;
                                        </div>

                                    <div>
                                    <div className="card-body table-responsive p-0" style={{height: 250}}>
                                        <table className="table table-head-fixed text-nowrap table-bordered">
                                            <thead>
                                                <tr>
                                                <th>#</th>
                                                <th >Order Code <span className="text-danger">*</span></th>
                                                <th>Product </th>
                                                <th>Color</th>
                                                <th>Frame </th>
                                                <th>Qty <span className="text-danger">*</span></th>
                                                <th>Price <span className="text-danger">*</span></th>
                                                <th>GST <span className="text-danger">*</span></th>
                                                <th>GST Amt </th>
                                                <th>Amt</th>
                                                <th></th>
                                                </tr>
                                            </thead>
                                                <tbody>
                                                    {
                                                         this.state.orderDetailsList.map( (ord,i) =>(
                                                            <tr key={i}>
                                                                <td className="" style={{width: 50}}>{i+1}</td>
                                                                <td className="" style={{width: 200}}>
                                                                    {/* <select className="form-control" id="dealerId" name="dealerId" value={ord.productId} onChange={ (e)=>this.handleProductChange(i,e)} >
                                                                        <option value="0">Select Product</option>
                                                                        {this.state.productList.map(o => (
                                                                            <option value={o.productId}>{o.orderCode}</option>
                                                                        ))} 
                                                                     </select> */}

                                                                    <Select
                                                                            value={this.state.productsearch.filter(({ value }) => value === ord.orderCode)}
                                                                            onChange={(e)=>this.handleChange(i,e)}
                                                                            options={this.state.productsearch}
                                                                        />
                                                                        
                                                                </td>
                                                                <td className="" style={{width: 250}}>{ord.productName}</td>
                                                                <td className="" style={{width: 150}}>{ord.colors}</td>
                                                                <td className="" style={{width: 50}}>{ord.size}</td>
                                                                <td className="" style={{width: 100}}><input type="text" className="form-control form-control-sm" id="qty" name="qty" value= {ord.qty} onChange={(e)=>this.handleProductQtyChange(i,e)} placeholder="Enter Qty" /></td>
                                                                <td className="" style={{width: 150}}><input type="text" className="form-control form-control-sm " id="price" name="price" value= {ord.price} onChange={(e)=>this.handleProductPriceChange(i,e)} placeholder="Enter Price" /></td>
                                                                <td className="" style={{width: 150}}>
                                                                    <select className="form-control" id="gst" name="gst" value={ord.gst} onChange={(e)=>this.handleProductGSTChange(i,e)} >
                                                                        <option value="GST_0">GST 0% </option>
                                                                        <option value="GST_1">GST 1% </option>
                                                                        <option value="GST_5">GST 5% </option>
                                                                        <option value="GST_12">GST 12% </option>
                                                                        <option value="GST_18">GST 18% </option>
                                                                        <option value="GST_28">GST 28% </option>
                                                                        <option value="IGST_0">IGST 0%</option>
                                                                        <option value="IGST_1">IGST 1%</option>
                                                                        <option value="IGST_5">IGST 5%</option>
                                                                        <option value="IGST_12">IGST 12%</option>
                                                                        <option value="IGST_18">IGST 18%</option>
                                                                        <option value="IGST_28">IGST 28%</option> 
                                                                    </select>
                                                                </td>
                                                                <td className="" style={{width: 100}}>{ord.gstAmt}</td>
                                                                <td className="" style={{width: 100}}>{ord.amount}</td>
                                                                <td style={{width: 5}}>
                                                                    <button className="btn btn-danger btn-sm" onClick={(e)=>this.removeProductRow(i)}> <i class="far fa-trash-alt"></i></button>
                                                                </td>
                                                            </tr>
                                                         ))
                                                    }
                                                </tbody>
                                            </table>
                                                 
                                    </div>
                                   </div>
                                </div>
                         </div>
                        <div className="modal-footer justify-content-between">
                            <span className=""> No of Lines  : {this.state.orderDetailsList.length} </span> 
                            <span className="text-danger">{this.state.errormsg}</span><br></br>
                                                    
                            <form>
                                <div className="row">
                                    <label for="staticEmail" className="col-sm-4 col-form-label">Sub Total</label>
                                    <div className="col-sm-6">
                                        <input type="text"  className="form-control" id="subtotal" name="subtotal" value={this.state.subtotal} placeholder="Sub Total" disabled/>
                                    </div>
                                </div>
                                <div className="row">
                                    <label for="inputPassword" className="col-sm-4 col-form-label">Tax Total</label>
                                    <div className="col-sm-6">
                                    <input type="text" className="form-control" id="taxTotal" name="taxTotal" value={this.state.taxTotal} placeholder="Tax Total" disabled/>
                                    </div>
                                </div>
                                <div className="row">
                                    <label for="inputPassword" className="col-sm-4 col-form-label">Total</label>
                                    <div className="col-sm-6">
                                    <input type="text" className="form-control" id="total" name="total"  value={this.state.total} placeholder="Total" disabled/>
                                    </div>
                                </div>
                            </form>

                           
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

 export default connect(mapStateToProps)(DealerOrder);

// export default DealerOrder
