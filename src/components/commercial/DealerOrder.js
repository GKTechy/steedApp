import React, { Component } from 'react'


import { connect } from "react-redux";
import ReactDatatable from '@ashvin27/react-datatable';



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
                key: "dealerName",
                text: "Dealer Name",
                sortable: true
            } ,{
                key: "productName",
                text: "Product",
                sortable: true
            },
            {
                key: "colorCode",
                text: "Color",
                sortable: true
            },{
                key: "qty",
                text: "Qty",
                sortable: true
            },
            {
                key: "action",
                text: "Action",
                cell: (record, index) => {
                    return (
                            <button
                                className="btn btn-info btn-sm"
                                data-toggle="modal" data-target="#new_dealer"
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

            address:"",
            city:"",
            state:"",
            pinCode:"",

            showModal:false,
            errormsg:"",
            records:[],
            isLoaded:false,
            loginUser:this.props.profile
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
                                                <button type="button" className="btn btn-primary btn-flat" data-toggle="modal" data-target="#new_order">Create New Order &nbsp;&nbsp;<i class="fas fa-plus"></i></button>
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
