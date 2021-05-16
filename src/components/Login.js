import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export class Login extends Component {


constructor(props) {
  super(props)

  this.state = {
     
    islogged: false,
      loginParams: {
        user_id: "",
        user_password: ""
    },
    iserror:false,
    pwdvisible:false,
    iserrormsg:'',
  }
}

componentDidMount() {
  localStorage.clear();
}

handleFormChange = event => {
  let loginParamsNew = { ...this.state.loginParams };
  let val = event.target.value;
  loginParamsNew[event.target.name] = val;
  this.setState({
    loginParams: loginParamsNew
  });
};


login = event => {
  let user_id = this.state.loginParams.user_id;
  let user_password = this.state.loginParams.user_password;
  if (user_id === "admin" && user_password === "123") {
    localStorage.setItem("steedApptoken", "SAt");
    this.setState({
      islogged: true,
      iserror: false
    });
  }else if (user_id === "" || user_password === "") {
      toast.error("Enter User Name & Password")

    this.setState({
      iserror: true,
      iserrormsg:"Enter All Values"
    });
  }else{
    toast.error("Invalid Login")
    this.setState({
      iserror: true,
      iserrormsg:"Invalid Login"
    });
  }
  event.preventDefault();
};

changeIcon =()=>{

  this.setState({
    pwdvisible:! this.state.pwdvisible
  });
 
}

  render() {

    if (localStorage.getItem("steedApptoken")) {
      return <Redirect to="/" />;
    }


    return (
      <div className="login-page">
        <ToastContainer />
        <div className="login-box">
            <div className="card card-outline card-primary">
                <div className="card-header text-center">
                  <a href="#" className="h1">
                   
                    <img src="logo.png" className="img-fluid "/>
                  </a>
                </div>
                <div className="card-body">
                
                
                  <form onSubmit={this.login} className="form-signin">
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="user_id"
                          onChange={this.handleFormChange}
                          placeholder="User Name"
                        />
                        <div className="input-group-append ">
                          <div className="input-group-text bg-green">
                            <span className="fas fa-user " />
                          </div>
                        </div>
                      </div>
                      <div className="input-group mb-3">
                        <input
                           type={this.state.pwdvisible ? "text" : "password"}
                           name="user_password"
                           className="form-control "
                           onChange={this.handleFormChange}
                           placeholder="Enter Password"
                        />
                        <div className="input-group-append" onClick={this.changeIcon} style={{cursor: 'pointer'}}>
                          <div className="input-group-text bg-maroon">
                              <span className={this.state.pwdvisible ? "fas fa-eye" : "fas fa-eye-slash"}  />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                          
                        <div className="col-6">
                       
                          <button type="submit" className="btn btn-primary btn-block" >
                            Sign In
                          </button>
                        </div>
                      </div>
                    </form>
                    <p>user Name: admin ,  password : 123</p>
                  </div>
                
                
              </div>
             
            </div>
      </div>
     
    );
  }
}

export default Login;
