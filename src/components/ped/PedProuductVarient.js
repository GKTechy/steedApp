import React, { Component } from 'react'
import { connect } from "react-redux";
import ReactDatatable from '@ashvin27/react-datatable';
import $ from "jquery";

export class PedProuductVarient extends Component {

    
    constructor(props) {
        super(props)
        
        this.columns = [
            {
                key: "name",
                text: "Name",
                sortable: true
            },{
                key: "shortName",
                text: "Short Name",
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
            key_column: 'varient_id',
            page_size: 10,
            length_menu: [10, 20, 50],
            show_filter: true,
            show_pagination: true,
            pagination: 'advance',
            filename: "Product Varient",
            button: {
                excel: true,
                print: true,
                csv: true
            }
        }
        this.state = {
            name:"",
            shortName:"",
            varientId:0,
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
        $("#as-react-datatable-container").find('select').addClass("form-control-sm");
        $("#as-react-datatable-container").find('input').addClass("form-control-sm");

     }  
    getTableValues(){
        fetch(this.props.apiurl+"product/allProductVarients")
        .then(res => res.json())
        .then( (result) => {
               // console.log("result-->"+JSON.stringify(result))
                if(result.valid){
                    this.setState({
                        records: result.productVarientList
                    },()=>{ $("#as-react-datatable td").css({"padding":'0.50rem'});});
                }else{}
            },(error) => {
            }
        )
    }

    saveClick= event =>{
        if(this.state.name === ""){
            this.setState({
                errormsg: "Enter Name"
            });
        }else  if(this.state.shortName === ""){
            this.setState({
                errormsg: "Enter Short Name"
            });
        }else if(!this.state.isActive && this.state.varientId===0){
            this.setState({
                errormsg: "Select Active"
            });
        }else{
            var tempstatus=""
            if(this.state.isActive){
                tempstatus="Active"
            }else{
                tempstatus="InActive"
            }
            
            const obj = {'name':this.state.name,'shortName':this.state.shortName, isActive:tempstatus,'varientId':this.state.varientId,"updatedBy":this.state.loginUser.userId,"createdBy":this.state.loginUser.userId};

             // POST request using fetch with error handling
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ "productVarientObj": obj })
                };
                fetch(this.props.apiurl+"product/saveProductVarient", requestOptions)
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
                                records: data.productVarientList,
                                
                            },()=>{});
                            this.resetClick();
                        }else{
                            this.setState({ errormsg: data.responseMsg});
                           
                        }
                           
                    })
                    .catch(error => {
                        this.setState({ errormsg: error.toString() });
                        console.error('There was an error!', error);
                    });
                    
          
        }
     }

    
    resetClick= () => {
        this.setState({ 
            name:"",
            shortName:"",
            varientId:0,
            isActive:true,
            showModal:false,
            errormsg:"",
        });
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
            shortName:record.shortName,
            name:record.name,
            varientId:record.varientId,
            isActive:tempstatus
            
        });


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
                                            <div className="form-inline"> 
                                                <label htmlFor="inlineFormEmail" className="m-2 font-weight-normal">Name <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control m-2 form-control-sm" name="name" id="name" value= {this.state.name} onChange={this.handleFormChange} />
                                            
                                                <label htmlFor="inlineFormEmail" className="m-2 font-weight-normal">Short Name <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control m-2 form-control-sm" name="shortName" id="shortName" value= {this.state.shortName} onChange={this.handleFormChange} />
                                            
                                                <label htmlFor="inlineFormEmail" className="m-2 font-weight-normal">is Active<span className="text-danger">*</span></label>
                                                <input className="form-check-input" type="checkbox" checked={this.state.isActive}  onChange={this.handleCheckClick}/>
                                                
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <button type="button" className="btn btn-primary btn-sm m-2" onClick={this.saveClick}>Save</button> &nbsp;&nbsp;&nbsp;
                                            <button type="button" className="btn btn-success btn-sm" onClick={this.refreshClick}><i className="fas fa-sync"></i>&nbsp;Refresh</button>
                                                
                                                {/* <button type="button" className="btn btn-warning btn-sm m-2">Reset</button> */}
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
                            <div className="card-footer clearfix">
                               
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

export default connect(mapStateToProps)(PedProuductVarient);


//export default PedProuductVarient
