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
import CommercialTransaction from './commercial/CommercialTransaction';
import CommercialReport from './commercial/CommercialReport';
import QualityMaster from './quality/QualityMaster';
import QualityTransaction from './quality/QualityTransaction';
import QualityReport from './quality/QualityReport';
import MaterialMaster from './materials/MaterialMaster';
import MaterialTransaction from './materials/MaterialTransaction';
import MaterialReport from './materials/MaterialReport';
import IndexDashboard from './IndexDashboard';

import { withRouter } from "react-router";

export class Content extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {

        const { match } = this.props;
        return (
            <div className="content-wrapper">
                <Route exact path={`${match.path}`}><IndexDashboard/></Route>
                <Route exact path={`${match.path}/adminMaster`}  component={AdminMaster} />
                <Route exact path={`${match.path}/adminTransaction`} component={AdminTransaction} />

                <Route exact path={`${match.path}/productionMaster`}  component={ProductionMaster} />
                <Route exact path={`${match.path}/productionTransaction`}  component={productionTransaction} />
                <Route exact path={`${match.path}/productionReport`}  component={ProductionReport} />


                <Route exact path={`${match.path}/commercialMaster`}  component={CommercialAdmin} />
                <Route exact path={`${match.path}/commercialTransaction`}  component={CommercialTransaction} />
                <Route exact path={`${match.path}/commercialReports`}  component={CommercialReport} />

                <Route exact path={`${match.path}/qualityMaster`}  component={QualityMaster} />
                <Route exact path={`${match.path}/qualityTransaction`}  component={QualityTransaction} />
                <Route exact path={`${match.path}/qualityReport`}  component={QualityReport} />
                
                
                <Route exact path={`${match.path}/materialMaster`}  component={MaterialMaster} />
                <Route exact path={`${match.path}/materialTransaction`}  component={MaterialTransaction} />
                <Route exact path={`${match.path}/materialReport`}  component={MaterialReport} />

                <Route exact path={`${match.path}/addDealer`}  component={AdminMaster} />

                <Route exact path={`${match.path}/PEDMaster`}  component={PEDMaster} />
                
                
                

                
            </div>
        )
    }
}


export default withRouter(Content);