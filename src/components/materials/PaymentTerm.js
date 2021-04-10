import React, { Component } from 'react'
import { connect } from "react-redux";
import ReactDatatable from '@ashvin27/react-datatable';
import $ from 'jquery';

export class PaymentTerm extends Component {
    constructor(props) {
        super(props)
    
              this.columns = [
            {
                key: "content",
                text: "Content",
                sortable: true
            },
            {
                key: "description",
                text: "Description",
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
                                style={{marginRight: '5px'}} data-toggle="modal" data-target="#new-paymentterm-model">
                                    <i className="fas fa-pencil-alt"></i>&nbsp;Edit
                            </button>
                       
                    );
                }
            }
        ];

        this.config = {
            key_column: 'paymentTermsId',
            page_size: 10,
            length_menu: [10, 20, 50],
            show_filter: true,
            show_pagination: true,
            pagination: 'advance',
            filename: "Payment Terms",
            button: {
                excel: true,
                print: true,
                csv: true
            }
        }

        this.state = {
            paymentTermsId:0,
            content:"",
            description:"",
            isActive:true,
            errormsg:"",
            records:[],
            loginUser:this.props.profile,

        }
    }
 
    componentDidMount() {
        this.getTableValues();
//        console.log('props profile-->:'+this.props.apiurl)
     }  
    getTableValues(){
        fetch(this.props.apiurl+"paymentTerm/allPaymentTerms")
        .then(res => res.json())
        .then( (result) => {
                console.log("result-->"+JSON.stringify(result))
                if(result.valid){
                    this.setState({
                        records: result.paymentTermList
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
            description:record.description,
            content:record.content,
            paymentTermsId:record.paymentTermsId,
            isActive:tempstatus
        });
    }
    
    resetClick = ()=>{
        this.state = {
            paymentTermsId:0,
            content:"",
            description:"",
            isActive:true,
            errormsg:"",
            records:[],
            loginUser:this.props.profile,

        }
    }
    saveClick= event =>{
        if(this.state.content === ""){
            this.setState({
                errormsg: "Enter Content"
            });
        }else if(this.state.description === ""){
            this.setState({
                errormsg: "Enter Description"
            });
        }else if(!this.state.isActive && this.state.paymentTermsId===0){
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
            
            const obj = {'content':this.state.content,'description':this.state.description, isActive:tempstatus,'paymentTermsId':this.state.paymentTermsId,"updatedBy":this.state.loginUser.userId,"createdBy":this.state.loginUser.userId};

             // POST request using fetch with error handling
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ "paymentTermObj": obj })
                };
                fetch(this.props.apiurl+"paymentTerm/savePaymentTerm", requestOptions)
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
                             
                             this.setState({ records: data.paymentTermList});
                             $("#new-paymentterm-model .close").click();
                             this.resetClick();
                        }else{
                            this.setState({ errormsg: data.responseMsg});
                            
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
                                                <button type="button" className="btn btn-primary btn-flat" data-toggle="modal" data-target="#new-paymentterm-model">New Payment Term&nbsp;&nbsp;<i class="fas fa-plus"></i></button>
                                            </span>
                                        </div>

                                </div>

                            </div>
                            <div className="card-body">


                            <ReactDatatable
                                    config={this.config}
                                    records={this.state.records}
                                    columns={this.columns}/>



                           {/*   <table id="paymentterm_master_table" className="table table-bordered table-striped">
                                <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>Content</th>
                                    <th>Active</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                               {
                                    this.state.uomList.map((item) =>
                                    
                                    <tr key={item.id}>
                                        
                                        <td>{item.code}</td>
                                        <td><span className="tag tag-success">{item.desc}</span></td>
                                        <td className="project-actions ">
                                            <a className="btn btn-info btn-sm" href="#"><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-default"><i className="fas fa-trash"></i>Delete</a>
                                        </td>
                                    </tr>
                                )} 
                                </tbody>
                                <tfoot>
                                <tr>
                                    <th>Description</th>
                                    <th>Content</th>
                                    <th>Active</th>
                                    <th>Action</th>
                                </tr>
                                </tfoot>
                            </table>*/}
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>

                <div className="modal fade" id="new-paymentterm-model">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title font-weight-normal">New Payment Term</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                                <div className="container-fluid">
                                    <div className="form-inline">
                                      
                                        <label htmlFor="name" className="m-2 col-sm-2 font-weight-normal" >Description<span class="text-danger">*</span></label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-8" name="description" id="description" value= {this.state.description} onChange={this.handleFormChange}/>
                                        <label htmlFor="code" className="m-2 col-sm-2 font-weight-normal" >Content<span class="text-danger">*</span></label>
                                        &nbsp;&nbsp;
                                        <textarea class="col-sm-8 form-control" placeholder="Content" required data-error="Please enter Content" id="content" name="content" id="content" value= {this.state.content} onChange={this.handleFormChange}></textarea>

                                        <label htmlFor="name" className="m-2 col-sm-2 font-weight-normal">Active<span class="text-danger">*</span></label>
                                        <input type="checkbox" className="form-check-input m-1" id="isactive" checked={this.state.isActive}  onChange={this.handleCheckClick}/><br/><br/>

                                        <label htmlFor="name" className="m-6 col-sm-6"><span class="text-danger">{this.state.errormsg}</span></label>
                                    </div>
                            </div>
                         </div>
                        <div className="modal-footer justify-content-between">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
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

 export default connect(mapStateToProps)(PaymentTerm);




//export default PaymentTerm
