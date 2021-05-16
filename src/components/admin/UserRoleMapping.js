import React, { Component } from 'react'
import { connect } from "react-redux";


export class UserRoleMapping extends Component {


    constructor(props) {
        super(props)
        
        
        this.state = {
            roleid:0,
            active:true,
            showModal:false,
            errormsg:"",
            records:[],
            roleList:[],
            mainMenuList:[],
            isLoaded:false,
            loginUser:this.props.profile
        }
       
    }


    componentDidMount() {
        this.getTableValues();
      
    } 

    getTableValues(){
           console.log('MachineProcessMap props profile-->:'+this.props.apiurl)
            fetch(this.props.apiurl+"role/allRolesModules")
            .then(res => res.json())
            .then( (result) => {
                   // console.log("result-->"+JSON.stringify(result))
                    if(result.valid){
                        this.setState({
                            roleList: result.roleList,
                            mainMenuList: result.mainMenuList,
                        });
                    }else{}
                },(error) => {
                }
            )
    }

    handleChange = (event) =>{
        this.setState({[event.target.name]: event.target.value});
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
                                    <div className="form-inline">
                                             <label htmlFor="inlineFormEmail" className="m-2">User Role </label>
                                             <select className="custom-select"  id="roleId" name="roleId" value={this.state.roleId} onChange={this.handleChange} >
                                                <option value="0">Select Roles</option>
                                                {this.state.roleList.map(o => (
                                                    <option value={o.roleId}>{o.roleName}</option>
                                                ))}
                                            </select>
                                            
                                        </div>
                            </div>
                            
                            <div className="card-body">
                                <div id="accordion" className="col-md-6">

                                {this.state.mainMenuList.map((obj,index) => (
                                    <div className="card card-primary" id={obj.mainMenuId}>
                                        <div className="card-header">
                                            <h4 className="card-title ">
                                                <a className="d-block  collapsed" data-toggle="collapse" href={"#"+obj.mainMenuName+"_"+obj.mainMenuId} aria-expanded="false">
                                                    {obj.mainMenuName}
                                                </a>
                                            </h4>
                                        </div>

                                        
                                            <div id={obj.mainMenuName+"_"+obj.mainMenuId} class="collapse" data-parent="#accordion" >
                                                <div class="card-body">
                                                {obj.subMenuList.map(sobj => (
                                                    <p>{sobj.subMenuName}</p>   
                                                ))}
                                                </div>
                                            </div>
                                         
                                    </div>
                                ))}

                                    
                                        {/* <div id="collapseOne" className="collapse" data-parent="#accordion" >
                                            <div className="card-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                                3
                                                wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                                                laborum
                                                eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee
                                                nulla
                                                assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                                                nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                                                beer
                                                farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                                                labore sustainable VHS.
                                            </div>
                                        </div> */}
                                    
                                </div>
               

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

 export default connect(mapStateToProps)(UserRoleMapping);



//export default UserRoleMapping
