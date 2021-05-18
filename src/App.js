import React, { Component } from 'react'
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import {   BrowserRouter as Router,  Switch,  Route,  Redirect} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { Provider } from 'react-redux';
import configureStore from './redux/store';
const store = configureStore();




export class App extends Component {
  render() {
    return (
      <div>
           <Provider store={store}>
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
            </Provider>
      </div>
    )
  }
}

export default App
