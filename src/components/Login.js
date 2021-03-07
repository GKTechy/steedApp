import React, { Component } from "react";
import { Redirect } from "react-router-dom";
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
    iserrormsg:'',
  }
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
    this.setState({
      iserror: true,
      iserrormsg:"Enter All Values"
    });
  }else{
    this.setState({
      iserror: true,
      iserrormsg:"Invalid Login"
    });
  }
  event.preventDefault();
};



  render() {

    if (localStorage.getItem("steedApptoken")) {
      return <Redirect to="/" />;
    }


    return (
      <div className="login-page">

        <div className="login-box">
            <div className="card card-outline card-primary">
                <div className="card-header text-center">
                  <a href="#" className="h1">
                    <b>SteedApp</b>
                  </a>
                </div>
                <div className="card-body">
                
                  <p className="login-box-msg">Sign in </p>
                  <form onSubmit={this.login} className="form-signin">
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="user_id"
                          onChange={this.handleFormChange}
                          placeholder="User Name"
                        />
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <span className="fas fa-envelope" />
                          </div>
                        </div>
                      </div>
                      <div className="input-group mb-3">
                        <input
                           type="password"
                           name="user_password"
                           className="form-control "
                           onChange={this.handleFormChange}
                           placeholder="Enter Password"
                        />
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <span className="fas fa-lock" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                          
                        <div className="col-6">
                        {
                          this.state.iserror ? <span className="text-danger">{this.state.iserrormsg}</span> :''
                        }
                          <button type="submit" className="btn btn-primary btn-block" >
                            Sign In
                          </button>
                        </div>
                      </div>
                    </form>
                    <p>user Name: admin ,  password : 123</p>
                  </div>
                
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>
      </div>
     
    );
  }
}

export default Login;
