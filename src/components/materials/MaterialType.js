import React, { Component } from 'react'
import { connect } from "react-redux";
import ReactDatatable from '@ashvin27/react-datatable';
import $ from "jquery";

export class MaterialType extends Component {

    

    constructor(props) {
        super(props)
     
          
        this.columns = [
            {
                key: "materialTypeName",
                text: "Item Type",
                sortable: true
            },
            {
                key: "materialTypeDescription",
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
                                style={{marginRight: '5px'}}>
                                    <i className="fas fa-pencil-alt"></i>&nbsp;Edit
                            </button>
                       
                    );
                }
            }
        ];

        this.config = {
            key_column: 'materialTypeId',
            page_size: 10,
            length_menu: [10, 20, 50],
            show_filter: true,
            show_pagination: true,
            pagination: 'advance',
            filename: "Material Type",
            button: {
                excel: true,
                print: true,
                csv: true
            }
        }

        this.state = {
            typeId:0,
            typeName:"",
            typeDesc:"",
            isActive:true,
            errormsg:"",
            records:[],
            loginUser:this.props.profile,

        }
    }
    
    componentDidMount() {
        this.getTableValues();
//        console.log('props profile-->:'+this.props.apiurl)
        $("#as-react-datatable-container").find('select').addClass("form-control-sm");
        $("#as-react-datatable-container").find('input').addClass("form-control-sm");

     }  
    getTableValues(){
        fetch(this.props.apiurl+"mateialtype/allMaterialTypes")
        .then(res => res.json())
        .then( (result) => {
              //  console.log("result-->"+JSON.stringify(result))
                if(result.valid){
                    this.setState({
                        records: result.materialTypeList
                    },()=>{ $("#as-react-datatable td").css({"padding":'0.50rem'});});
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
            typeDesc:record.materialTypeDescription,
            typeName:record.materialTypeName,
            typeId:record.materialTypeId,
            isActive:tempstatus
        });


    }

    resetClick= () => {
        this.setState({ 
            typeDesc: "",
            typeName:"",
            typeId:0,
            isActive:true
        });
    }



    saveClick= event =>{
        if(this.state.typeName === ""){
            this.setState({
                errormsg: "Enter Code"
            });
        }else if(this.state.typeDesc === ""){
            this.setState({
                errormsg: "Enter Description"
            });
        }else if(!this.state.isActive && this.state.typeId===0){
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
            
            const obj = {'materialTypeName':this.state.typeName,'materialTypeDescription':this.state.typeDesc, isActive:tempstatus,'materialTypeId':this.state.typeId,"updatedBy":this.state.loginUser.userId,"createdBy":this.state.loginUser.userId};

             // POST request using fetch with error handling
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ "materialTypeObj": obj })
                };
                fetch(this.props.apiurl+"mateialtype/saveMaterialType", requestOptions)
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
                                records: data.materialTypeList,
                                typeName:"",
                                typeDesc:"",
                               typeId:0,
                                isActive:true
                            },()=>{});
                        }else{
                            this.setState({ errormsg: data.responseMsg});
                            this.setState({
                                errormsg: "",
                                typeName:"",
                                typeDesc:"",
                                typeId:0,
                                isActive:true
                            },()=>{});
                        }
                           
                    })
                    .catch(error => {
                        this.setState({ errormsg: error.toString() });
                      //  console.error('There was an error!', error);
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
                                <div className="container-fluid">
                                    <div className="form-inline" >
                                        <label htmlFor="code" className="m-2 font-weight-normal" >Item Type <span class="text-danger">*</span></label>
                                        <input type="text" className="form-control form-control-sm m-2 col-sm-3" name="typeName" id="typeName" value= {this.state.typeName} onChange={this.handleFormChange}/>
                                        <label htmlFor="name" className="m-2 font-weight-normal" >Description<span class="text-danger">*</span></label>
                                        <input type="text" className="form-control m-2 col-sm-3 form-control-sm" name="typeDesc" id="typeDesc" value= {this.state.typeDesc} onChange={this.handleFormChange}/>
                                        <label htmlFor="code" className="font-weight-normal" >isActive</label>
                                        <input type="checkbox" className="form-check-input m-1" checked={this.state.isActive}  onChange={this.handleCheckClick}/> &nbsp;&nbsp;&nbsp;
                                        <button className="btn btn-primary btn-sm" onClick={this.saveClick}>Save</button>&nbsp;&nbsp;&nbsp;
                                        <button type="button" className="btn btn-primary btn-sm" onClick={this.resetClick}>Reset</button>&nbsp;&nbsp;&nbsp;
                                                <button type="button" className="btn btn-success btn-sm" onClick={this.refreshClick}><i class="fas fa-sync"></i>&nbsp;Refresh</button>

                                        <label htmlFor="code" className="m-2 " ><span class="text-danger">{this.state.errormsg}</span></label>
                                    </div>
                                    
                                </div>

                            </div>
                            <div className="card-body">

                            <ReactDatatable
                                    config={this.config}
                                    records={this.state.records}
                                    columns={this.columns}/>


                            {/*       <table id="materialtype_master_table" className="table table-bordered table-striped">
                                        <thead>
                                        <tr>
                                            <th>Code</th>
                                            <th>Description</th>
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
                                            <th> Code</th>
                                            <th>Description</th>
                                            <th>Action</th>
                                        </tr>
                                        </tfoot>
                                        </table>  */}
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

 export default connect(mapStateToProps)(MaterialType);



//export default MaterialType
