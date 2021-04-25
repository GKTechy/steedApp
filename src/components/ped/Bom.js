import React, { Component } from 'react'
import { connect } from "react-redux";
import ReactDatatable from '@ashvin27/react-datatable';

export class Bom extends Component {

    constructor(props) {
        super(props)
        
        this.columns = [
            {
                key: "rowSelected",
                text: "#",
                align: "left",
                sortable: false,
                width: 10,
                cell: (record, index) => {
                    return (
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="rowSelected" id="rowSelected" onClick={ (e)=>this.selectRecord(e,index)} />
                        </div>
                       
                    );
                }
            },
            {
                key: "productCode",
                text: "Code",
                sortable: true,
                width: 100,
            },
            {
                key: "productName",
                text: "Material Name",
                sortable: true,
                width: 300,
            },{
                key: "measurementType",
                text: "Measurement Type",
                sortable: true,
                width: 100,
            },{
                key: "measurementName",
                text: "Measurement Name",
                sortable: true,
                width: 100,
            },{
                key: "uomType",
                text: "UOM Type",
                sortable: true,
                width: 100,
            },
            {
                key: "qty",
                text: "Qty",
                width: 50,
                cell: (record, index) => {
                    return (
                        <>
                            <input type="text" className="form-control form-control-sm" name="qty" id="qty" value={record.qty} onChange={ (e)=>this.editRecord(e,index)} />
                        </>
                       
                    );
                }
            },
            {
                key: "action",
                text: "Action",
                width: 100,
                cell: (record, index) => {
                    return (
                            <button
                                className="btn btn-warning btn-sm"
                                style={{marginRight: '5px'}}
                                onClick={ (e)=>this.clearRecord(e,index)}>
                                    <i className="fas fa-times" ></i>&nbsp;Clear
                            </button>
                       
                    );
                }
            }
        ];

        this.state = {
            name:"",
            shortName:"",
            varientId:0,
            isActive:true,
            showModal:false,
            errormsg:"",
            productList:[],
            records:[],
            productId:0,
            isLoaded:false,
            loginUser:this.props.profile
        }
    }

    componentDidMount() {
        this.getTableValues();
//        console.log('props profile-->:'+this.props.apiurl)
     }  
    getTableValues(){
        fetch(this.props.apiurl+"billOfMaterial/allBillOfMaterials")
        .then(res => res.json())
        .then( (result) => {
               // console.log("result-->"+JSON.stringify(result))
                if(result.valid){
                    this.setState({
                        productList: result.productList
                    });
                }else{}
            },(error) => {
            }
        )
    }
    handleProductChange = event => {
        this.setState({[event.target.name]: event.target.value},()=>{

            if(this.state.productId === 0 || this.state.productId ==="0"){
                this.setState({
                    records: []
                });
            }else{
                fetch(this.props.apiurl+"billOfMaterial/productBoms?productId="+this.state.productId)
                .then(res => res.json())
                .then( (result) => {
                       // console.log("result-->"+JSON.stringify(result))
                        if(result.valid){
                            this.setState({
                                records: result.bomProductList,
                                errormsg: ""
                            });
                        }else{}
                    },(error) => {
                    }
                )
            }
            

        });
    };
    
    editRecord = (e,index) => {
        const { records } = this.state;
        records[index].qty = e.target.value;
      this.setState({ records: records },()=>{ 
        });
 
     }

     clearRecord = (e,index) => {
         
        const { records } = this.state;
      //  console.log("-->"+JSON.stringify(records[index]))
        records[index].qty = '';
      //  this.state.qty=''
        this.setState({ records: records },()=>{ 
          //  console.log("AFTER-->"+JSON.stringify(records[index]))
        });
 
     }

     
     selectRecord = (e,index) => {
           const { records } = this.state;
         
           
         //  console.log("check-->"+e.target.checked)
           records[index].rowSelected = !e.target.value;
                this.setState({ records: records },()=>{ 
             });
    
    }


    saveClick= event =>{

        const { records } = this.state;
        let result = records.filter(el => el.qty === '' ||el.qty === '0');
        console.log('varlen--'+result.length)
        
        if(records.length === 0){
            this.setState({
                errormsg: "Select Product and Enter Any one Values"
            });
        } else  if(records.length === result.length){
            this.setState({
                errormsg: "Enter Any one Qty Values"
            });
        } else{
            this.setState({
                errormsg: ""
            });

            var obj = {
                "bomProductList":this.state.records,
                "updatedBy":this.state.loginUser.userId,"createdBy":this.state.loginUser.userId};
            }

            
               // POST request using fetch with error handling
               const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({  "bomProductList":this.state.records,"updatedBy":this.state.loginUser.userId,"createdBy":this.state.loginUser.userId,"productId":this.state.productId})
            };
            fetch(this.props.apiurl+"billOfMaterial/saveBillOfMaterial", requestOptions)
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
                            errormsg: data.responseMsg,
                            records: result.bomProductList,
                        },()=>{
                            //this.resetClick();
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

    resetClick= () => {
        this.setState({ 
            name:"",
            shortName:"",
            varientId:0,
            isActive:true,
            showModal:false,
            errormsg:"",
            productList:[],
            records:[],
            productId:0,
            isLoaded:false,
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
                            <div className="card card-success card-outline">
                                <div className="card-header">
                                    <form className="form-inline">
                                        <div className="form-group">
                                            <label htmlFor="inlineFormEmail " className="font-weight-normal">Product </label>&nbsp;&nbsp;
                                            <select className="custom-select" id="productId" name="productId" value={this.state.productId} onChange={this.handleProductChange}>
                                            <option value="0">Select Product</option>
                                            {this.state.productList.map(o => (
                                                <option value={o.productId}>{o.orderCode+"_"+o.productName }</option>
                                            ))}
                                        </select>

                                      
                                        </div>
                                    </form>
                                </div>
                            
                                <div className="card-body">
                                    <ReactDatatable
                                        config={this.config}
                                        records={this.state.records}
                                        columns={this.columns}/>
                                </div>
                                <div className="card-footer justify-content-between ">
                                    <button type="button" className="btn btn-default float-left" >Clear</button>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <button type="button" className="btn btn-success  " onClick={this.refreshClick}><i class="fas fa-sync"></i>&nbsp;Refresh</button>
                                    <span className="text-danger float-center">{this.state.errormsg}</span>
                                    <button type="button" className="btn btn-primary float-right" onClick={this.saveClick}>Save</button>  &nbsp;&nbsp;&nbsp;
                                         
                                            
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

export default connect(mapStateToProps)(Bom);

//export default Bom

