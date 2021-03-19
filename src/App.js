import React, { Component } from 'react'
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import {   BrowserRouter as Router,  Switch,  Route,  Redirect} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

export class App extends Component {
  render() {
    return (
      <div>
          
            <Router>
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
            </Router>
        
      </div>
    )
  }
}

export default App
