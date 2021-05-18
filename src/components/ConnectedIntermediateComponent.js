import React, { Component } from 'react'
import { connect } from "react-redux";

import Login from "./Login";
import Dashboard from "./Dashboard";
import {   BrowserRouter as Router,  Switch,  Route,  Redirect} from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";
import { Provider } from 'react-redux';
import configureStore from '../redux/store';

export class ConnectedIntermediateComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }

        console.log("props ConnectedIntermediateComponent-->"+JSON.stringify(this.props.profile))
      //  console.log("props-->"+JSON.stringify(this.props.apiurl))
        
    }
    

    render() {
        return (
            <div>
                <Switch>
                  <Route path="/login">
                    <Login />
                  </Route>
                  <ProtectedRoute path="/dashboard">
                    <Dashboard path="/dashboard"/>
                  </ProtectedRoute>
                  <Route exact path="/">
                    <Redirect exact from="/" to="dashboard" />
                  </Route>
                  <Route path="*">
                    <Redirect from="/" to="dashboard" />
                  </Route>
                </Switch>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      profile: state.user.profile,
      apiurl: state.user.apiurl,
      usermenus: state.user.usermenus,
    }
  }

export default connect(mapStateToProps)(ConnectedIntermediateComponent);


//export default ConnectedIntermediateComponent
