import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import Login from './Login'

import AdminMaster from './admin/AdminMaster';
import AdminTransaction from './admin/AdminTransaction';
import PEDMaster from './ped/PEDMaster';
import ProductionMaster from './production/ProductionMaster';
import productionTransaction from './production/productionTransaction';
import ProductionReport from './production/ProductionReport';
import CommercialAdmin from './commercial/CommercialAdmin';
export class Content extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <Route exact path="/adminMaster" component={AdminMaster} />
                <Route exact path="/adminTransaction" component={AdminTransaction} />

                <Route exact path="/productionMaster" component={ProductionMaster} />
                <Route exact path="/productionTransaction" component={productionTransaction} />
                <Route exact path="/productionReport" component={ProductionReport} />


                <Route exact path="/commercialMaster" component={CommercialAdmin} />
                <Route exact path="/addDealer" component={AdminMaster} />

                <Route exact path="/PEDMaster" component={PEDMaster} />
                
                <Route path="/login" component={Login} />
                

                
            </div>
        )
    }
}

export default Content
