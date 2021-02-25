import React, { Component } from 'react'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'
import Menu from './components/Menu'

import {BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
          <Router>
            <Header/>
            <Menu/>
            <Content/>
            {/* <Footer/> */}
          </Router>
      </div>
    )
  }
}

export default App
