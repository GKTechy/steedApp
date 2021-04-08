import React, { Component } from 'react'
import { connect } from "react-redux";
import ReactDatatable from '@ashvin27/react-datatable';

export class Bom extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name:"",
            shortName:"",
            varientId:0,
            isActive:true,
            showModal:false,
            errormsg:"",
            productList:[],
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
        this.setState({[event.target.name]: event.target.value});
        const params={
            productId:this.state.productId
        }
        fetch(this.props.apiurl+"billOfMaterial/productBoms",{params})
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
    };
    
    render() {
        return (
            <div>
                 <section className="content">
                    <div className="container-fluid">
                   
                        <div className="row">
                        <div className="col-12">
                            <div className="card">
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

