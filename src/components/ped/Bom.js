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
                align: "right",
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
                key: "productName",
                text: "Material Name",
                sortable: true,
                width: 300,
            },{
                key: "measurementType",
                text: "Measurement Type",
                sortable: true,
                width: 300,
            },
            {
                key: "qty",
                text: "Qty",
                width: 100,
                cell: (record, index) => {
                    return (
                        <>
                            <input type="text" className="form-control m-2 form-control-sm" name="qty" id="qty" value= {this.state.qty} onChange={ (e)=>this.editRecord(e,index)} />
                        </>
                       
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

            if(this.state.productId == 0 || this.state.productId =="0"){
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
                                records: result.bomProductList
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
     selectRecord = (e,index) => {
           const { records } = this.state;
        //   console.log("check-->"+e.target.checked)
           records[index].rowSelected = !e.target.value;
           this.setState({ records: records },()=>{ 
             });
    
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
                                                <option value={o.productId}>{o.productCode+"_"+o.productName }</option>
                                            ))}
                                        </select>
                                        </div>
                                    </form>
                                </div>
                            
                                <div className="card-body" style={{height: 500}}>
                                    <ReactDatatable
                                        config={this.config}
                                        records={this.state.records}
                                        columns={this.columns}/>
                                </div>
                                <div className="card-footer justify-content-between ">
                                    <button type="button" className="btn btn-default" >Clear</button>
                                    <span className="text-danger">{this.state.errormsg}</span>
                                    <button type="button" className="btn btn-primary" onClick={this.saveClick}>Save</button>
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

