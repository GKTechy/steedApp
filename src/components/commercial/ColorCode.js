import React, { Component } from 'react'
import { connect } from "react-redux";
import ReactDatatable from '@ashvin27/react-datatable';



export class ColorCode extends Component {
    
    constructor(props) {
        super(props)
        
        this.columns = [
            {
                key: "orderCode",
                text: "Order Code",
                sortable: true
            },
            {
                key: "colorCode",
                text: "Color Code",
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
                                style={{marginRight: '5px'}}>
                                    <i className="fas fa-pencil-alt"></i>&nbsp;Edit
                            </button>
                       
                    );
                }
            }
        ];

        this.config = {
            key_column: 'orderCodeId',
            page_size: 10,
            length_menu: [10, 20, 50],
            show_filter: true,
            show_pagination: true,
            pagination: 'advance',
            filename: "Order Code",
            button: {
                excel: true,
                print: true,
                csv: true
            }
        }
        this.state = {
            orderCode:"",
            colorCode:"",
            orderCodeId:0,
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
        fetch(this.props.apiurl+"ordercode/allOrderCodes")
        .then(res => res.json())
        .then( (result) => {
              //  console.log("result-->"+JSON.stringify(result))
                if(result.valid){
                    this.setState({
                        records: result.orderCodeList
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
            orderCode:"",
            colorCode:"",
            orderCodeId:0,
            isActive:true,
            errormsg:"",
         });
    }

    saveClick= event =>{
        if(this.state.orderCode === ""){
            this.setState({
                errormsg: "Enter Order Code"
            });
        }else if(this.state.colorCode === ""){
            this.setState({
                errormsg: "Enter Color Code"
            });
        }else if(!this.state.isActive && this.state.orderCodeId===0){
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
            
            const obj = {'orderCode':this.state.orderCode,'colorCode':this.state.colorCode, isActive:tempstatus,'orderCodeId':this.state.orderCodeId,"updatedBy":this.state.loginUser.userId,"createdBy":this.state.loginUser.userId};

             // POST request using fetch with error handling
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ "orderCodeObj": obj })
                };
                fetch(this.props.apiurl+"ordercode/saveOrderCode", requestOptions)
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
                                errormsg: "",
                                records: data.orderCodeList,
                                orderCode:"",colorCode:"",orderCodeId:0,isActive:true
                            },()=>{});
                        }else{
                            this.setState({ errormsg: data.responseMsg});
                            this.setState({
                                errormsg: "",orderCode:"",colorCode:"",orderCodeId:0,isActive:true
                            },()=>{});
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
                                            <label htmlFor="orderCode" className="m-2">Order Code <span class="text-danger">*</span></label>
                                                <input type="text" className="form-control m-2 form-control-sm" id="orderCode" name="orderCode" value= {this.state.orderCode} onChange={this.handleFormChange} />
                                           
                                            <label htmlFor="colorCode" className="m-2">Color Code<span class="text-danger">*</span></label>
                                             <input type="text" className="form-control m-2 form-control-sm" id="colorCode" name="colorCode" value= {this.state.colorCode} onChange={this.handleFormChange} />
                                            
                                             <label htmlFor="a3" className="m-2">is Active<span class="text-danger">*</span></label>
                                            <input className="form-check-input" type="checkbox" checked={this.state.isActive}  onChange={this.handleCheckClick}/>

             

                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <button type="button" className="btn btn-primary btn-sm m-2" onClick={this.saveClick}>Save</button>
                                            {/* <button type="button" className="btn btn-warning btn-sm m-2" onClick={this.resetClick}>Reset</button> */}
                                            <span className="text-danger">{this.state.errormsg}</span>
                                        </div>

                                </div>
                              
                            </div>
                            <div className="card-body" style={{}}>
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

 export default connect(mapStateToProps)(ColorCode);
//export default ColorCode
