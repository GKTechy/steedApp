import React, { Component } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { connect } from "react-redux";
import ReactDatatable from '@ashvin27/react-datatable';

import $ from 'jquery';


export class NoteForApproval extends Component {

    constructor(props) {
        super(props);
        this.columns = [
            {
                key: "nfaDocumentNo",
                text: "Document No",
                sortable: true
            },
            {
                key: "nfaDocumentDate",
                text: "Document Date",
                sortable: true
            },
            {
                key: "nfaTitle",
                text: "Title",
                sortable: true
            },
            //  {
            //      key: "status",
            //      text: "Status",
            //      sortable: true
            //  },
            // {
            //     key: "isActive",
            //     text: "Active",
            //     sortable: true
            // },
            {
                key: "action",
                text: "Action",
                cell: (record, index) => {
                    return (
                            <button
                                className="btn btn-info btn-sm"
                                onClick={this.editRecord.bind(this, record, index)}
                                style={{marginRight: '5px'}} data-toggle="modal" data-target="#note-model">
                                    <i className="fas fa-pencil-alt"></i>&nbsp;Edit
                            </button>
                       
                    );
                }
            }
        ];

        this.config = {
            key_column: 'nfaId',
            page_size: 10,
            length_menu: [10, 20, 50],
            show_filter: true,
            show_pagination: true,
            pagination: 'advance',
            filename: "Note For Approval",
            button: {
                excel: true,
                print: true,
                csv: true
            }
        }

        
        var curr = new Date();
        curr.setDate(curr.getDate());
        var todaydate = curr.toISOString().substr(0, 10);


        this.state = {
            nfaDescription: 'Welcome to Steed Application',
            nfaDocumentNo:"",
            nfaDocumentDate:todaydate,
            nfaTitle:"",
            status:0,
            nfaId:0,
            preparedBy:0,
            active:true,
            showModal:false,
            errormsg:"",
            records:[],
            isLoaded:false,
            loginUser:this.props.profile
        }
    }

    resetClick  = () =>{

        var curr = new Date();
        curr.setDate(curr.getDate());
        var todaydate = curr.toISOString().substr(0, 10);


        this.setState({
            nfaDescription: 'Welcome to Steed Application',
            nfaDocumentNo:"",
            nfaDocumentDate:todaydate,
            nfaTitle:"",
            status:0,
            nfaId:0,
            preparedBy:0,
         });
    }


    componentDidMount() {
        this.getTableValues();
//        console.log('props profile-->:'+this.props.apiurl)
    $("#as-react-datatable-container").find('select').addClass("form-control-sm");
    $("#as-react-datatable-container").find('input').addClass("form-control-sm");

     }  
    getTableValues(){
        fetch(this.props.apiurl+"noteforapproval/allNoteForApprovals")
        .then(res => res.json())
        .then( (result) => {
               // console.log("result-->"+JSON.stringify(result))
                if(result.valid){
                    this.setState({
                        records: result.noteForApprovalList
                    },()=>{
                        $("#as-react-datatable td").css({"padding":'0.50rem'});
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
        if(record.status === "Active"){
             tempstatus=true;
         }else{
             tempstatus=false;
         }
         this.setState({
            nfaDescription:record.nfaDescription,
            nfaDocumentNo:record.nfaDocumentNo,
            nfaDocumentDate:record.nfaDocumentDate,
            nfaTitle:record.nfaTitle,
            nfaId:record.nfaId,
            preparedBy:record.preparedBy,
            status:record.status,
             active:tempstatus
         });
 
     }

     saveClick= event =>{
        if(this.state.nfaDocumentNo === ""){
            this.setState({
                errormsg: "Enter Document"
            });
        }else if(this.state.nfaDocumentDate === ""){
            this.setState({
                errormsg: "Select Document Date"
            });
        }else if(this.state.nfaTitle === ""){
            this.setState({
                errormsg: "Enter Title"
            });
        }else if(this.state.nfaDescription === ""){
            this.setState({
                errormsg: "Enter Description"
            });
        }else if(this.state.preparedBy === "0" || this.state.preparedBy === 0){
            this.setState({
                errormsg: "Select Request By"
            });
        }
        
        // else if(!this.state.active && this.state.nfaId===0){
        //     this.setState({
        //         errormsg: "Select Active"
        //     });
        // }
        else{
            var tempstatus=""
            if(this.state.active){
                tempstatus="Active"
            }else{
                tempstatus="InActive"
            }
            
            const obj = {
                'nfaDocumentNo':this.state.nfaDocumentNo,'nfaDocumentDate':this.state.nfaDocumentDate, 
                'nfaTitle':this.state.nfaTitle, 'nfaDescription':this.state.nfaDescription,  
                 "isActive":tempstatus,'nfaId':this.state.nfaId,'status':this.state.status,
                 "preparedBy":this.state.preparedBy,
                 "updatedBy":this.state.loginUser.userId,"createdBy":this.state.loginUser.userId};

                 ///console.log("--obj--"+JSON.stringify(obj))

             // POST request using fetch with error handling
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ "noteForApprovalObj": obj })
                };
                fetch(this.props.apiurl+"noteforapproval/saveNoteForApproval", requestOptions)
                    .then(async response => {
                        const data = await response.json();
                       // console.log("--data--"+JSON.stringify(data))
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
                                records: data.noteForApprovalList,
                                nfaDescription:"",
                                nfaDocumentNo:"",
                                nfaDocumentDate:"",
                                nfaTitle:"",
                                nfaId:0,
                                active:true
                                
                            },()=>{
                               $("#note-model .close").click();
                            });
                        }else{
                            this.setState({ errormsg: data.responseMsg});
                           
                        }
                           
                    })
                    .catch(error => {
                        this.setState({ errormsg: error.toString() });
                       // console.error('There was an error!', error);
                    });
                    
          
        }
     }

     refreshClick = () => {
        this.resetClick();
        this.componentDidMount();
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
                                                {/* <input type="text" className="form-control" placeholder="Enter Role..." /> */}
                                                <span className="input-group-append">
                                                    <button type="button" className="btn btn-primary btn-flat" data-toggle="modal" data-target="#note-model" onClick={this.resetClick}>Create New Note &nbsp;&nbsp;<i className="fas fa-plus"></i></button>&nbsp;&nbsp;&nbsp;
                                                    <button type="button" className="btn btn-success" onClick={this.refreshClick}><i className="fas fa-sync"></i>&nbsp;Refresh</button>
                                                </span>
                                            </div>
                                    </div>
                                  
                                </div>
                            
                            <div className="card-body" >
                                <ReactDatatable
                                    config={this.config}
                                    records={this.state.records}
                                    columns={this.columns}/>

                            </div>
                            <div className="card-footer clearfix">
                               
                            </div>
                            </div>
                            
                        </div>
                        </div>
                   
                       
                    </div>
                </section>

                    <div className="modal fade" id="note-model">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">New Note</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">

            
                       <div className="container-fluid">
                            <form className="form-inline">
                                <div className="form-group">
                                    <label htmlFor="nfaDocumentNo" className="m-2 font-weight-normal">Document No <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control m-2 form-control-sm" name="nfaDocumentNo" id="nfaDocumentNo" value= {this.state.nfaDocumentNo} onChange={this.handleFormChange} />
                                    <label htmlFor="nfaDocumentDate" className="m-2 font-weight-normal">Document Date <span className="text-danger">*</span></label>
                                    <input type="date" className="form-control m-2 form-control-sm" name="nfaDocumentDate" id="nfaDocumentDate" value= {this.state.nfaDocumentDate} onChange={this.handleFormChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nfaTitle" className="m-2 font-weight-normal">Title <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control m-2 form-control-sm" name="nfaTitle" id="nfaTitle" value= {this.state.nfaTitle} onChange={this.handleFormChange}/>
                                    <label htmlFor="exampleSelectRounded" className="m-2 font-weight-normal">Request By</label>
                                    <select className="custom-select "  id="preparedBy" name="preparedBy" value={this.state.preparedBy} onChange={this.handleFormChange} >
                                        <option value="0">Select</option>
                                        <option value="1">User 1</option>
                                        <option value="2">User 2</option>   
                                    </select>
                                </div>
                                
                                
                                
                            </form>
                                <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title"></h3>
                                        <div className="card-tools">

                                        </div>
                                    </div>
                                    <div className="card-body table-responsive p-0" style={{height:300}}>
                                        <CKEditor
                                                editor={ ClassicEditor }
                                                style={{
                                                    'height': '300px'                                                    
                                                }}
                                                activeClass="p10"
                                                data={this.state.nfaDescription}
                                                onReady={ editor => {
                                                    // You can store the "editor" and use when it is needed.
                                                    //console.log( 'Editor is ready to use!', editor );
                                                } }
                                                onChange={ ( event, editor ) => {
                                                    const data = editor.getData();
                                                   // console.log( { event, editor, data } );
                                                    this.setState({
                                                        nfaDescription: data
                                                    });
                                                } }
                                                onBlur={ ( event, editor ) => {
                                                   // console.log( 'Blur.', editor );
                                                } }
                                                onFocus={ ( event, editor ) => {
                                                   // console.log( 'Focus.', editor );
                                                } }
                                            />
                                    </div>
                                    </div>
                                    
                                </div>
                                </div>


                        </div>


                        
                            </div>
                            <div className="modal-footer justify-content-between">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                 <span className="text-danger">{this.state.errormsg}</span>
                                <button type="button" className="btn btn-primary"  onClick={this.saveClick}>Save</button>
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

export default connect(mapStateToProps)(NoteForApproval);


//export default NoteForApproval
