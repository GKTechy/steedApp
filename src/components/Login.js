import React, { Component } from "react";

export class Login extends Component {
  render() {
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
                  <form action="#" method="post">
                    <div className="input-group mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
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
                        className="form-control"
                        placeholder="Password"
                      />
                      <div className="input-group-append">
                        <div className="input-group-text">
                          <span className="fas fa-lock" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4">
                        <button type="submit" className="btn btn-primary btn-block">
                          Sign In
                        </button>
                      </div>
                    </div>
                  </form>
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
