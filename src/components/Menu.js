import React, { Component } from 'react'
import {Link} from "react-router-dom";
export class Menu extends Component {
    
    render() {

        const { match } = this.props;

        return (
           <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <a href="#" className="brand-link">
                    <span className="brand-text font-weight-light">Steed App</span>
                    
                </a>
               
                <div className="sidebar">
                  
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                       
                            <div className="image">
                                <img src="dist/img/avatar5.png" className="img-circle elevation-2" alt="User Image" />
                            </div>
                            <div className="info">
                                    <a href="#" className="d-block">User 1</a>
                            </div>
                        
                    </div>
               
                    
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="true">
                            <li className="nav-item"><a href="#" className="nav-link"><i className="nav-icon fas fa-users-cog"/><p>Admin </p></a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link to={`${match.path}/adminMaster`}> <a href="#" className="nav-link"><i className="far fa-envelope nav-icon" /><p>Master <i class="right fas fa-angle-left"></i></p></a></Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={`${match.path}/adminTransaction`} > <a href="#" className="nav-link"><i className="far fa-edit nav-icon" /><p>Transaction <i class="right fas fa-angle-left"></i></p></a></Link>
                                        </li>
                                    </ul>
                            </li>

  

                            <li className="nav-item"><a href="#" className="nav-link"><i className="nav-icon fas fa-industry" /><p>Production</p></a>
                                <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                        <Link to="/productionMaster"> <a href="#" className="nav-link"><i className="far fa-envelope nav-icon" /><p>Master <i class="right fas fa-angle-left"></i></p></a></Link>
                                           
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/productionTransaction"> <a href="#" className="nav-link"><i className="far fa-edit nav-icon" /><p>Transaction <i class="right fas fa-angle-left"></i></p></a></Link>
                                            
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/productionReport"> <a href="#" className="nav-link"><i className="far fa-file nav-icon" /><p>Reports <i class="right fas fa-angle-left"></i></p></a></Link>
                                           
                                        </li>
                                </ul>
                            </li>
                            <li className="nav-item"><a href="#" className="nav-link"><i className="nav-icon fas fa-chart-pie" /><p>Commercial</p></a>
                                <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link to="/commercialMaster"> <a href="#" className="nav-link"><i className="far fa-envelope nav-icon" /><p>Master <i class="right fas fa-angle-left"></i></p></a></Link>
                                        </li>
                                        <li className="nav-item">
                                             <Link to="/commercialTransaction"> <a href="#" className="nav-link"><i className="far fa-edit nav-icon" /><p>Transaction <i class="right fas fa-angle-left"></i></p></a></Link>
                                        </li> 
                                        <li className="nav-item">
                                            <Link to="/commercialReports"> <a href="#" className="nav-link"><i className="far fa-file nav-icon" /><p>Reports <i class="right fas fa-angle-left"></i></p></a></Link>
                                       </li>
                                    </ul>
                            </li>
                            <li className="nav-item"><a href="#" className="nav-link"><i className="nav-icon fas fa-balance-scale" /><p>Accounts</p></a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Accounts 1</p></a></li>
                                        <li className="nav-item"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Accounts 2</p></a></li>
                                        <li className="nav-item"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Accounts 3</p></a></li>
                                    </ul>
                            </li>
                            <li className="nav-item"><a href="#" className="nav-link"><i className="nav-icon fas fa-search-dollar" /><p>Quality</p></a>
                                <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link to="/qualityMaster"> <a href="#" className="nav-link"><i className="far fa-envelope nav-icon" /><p>Master <i class="right fas fa-angle-left"></i></p></a></Link>
                                           
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/qualityTransaction"> <a href="#" className="nav-link"><i className="far fa-edit nav-icon" /><p>Transaction <i class="right fas fa-angle-left"></i></p></a></Link>
                                           
                                        </li>
                                        <li className="nav-item">
                                         <Link to="/qualityReport"> <a href="#" className="nav-link"><i className="far fa-file nav-icon" /><p>Reports <i class="right fas fa-angle-left"></i></p></a></Link>
                                            
                                        </li>
                                </ul>
                            </li>
                            <li className="nav-item"><a href="#" className="nav-link"><i className="nav-icon fas fa-people-carry" /><p>Materials</p></a>
                                <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link to="/materialMaster"> <a href="#" className="nav-link"><i className="far fa-envelope nav-icon" /><p>Master <i class="right fas fa-angle-left"></i></p></a></Link>
                                            
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/materialTransaction"> <a href="#" className="nav-link"><i className="far fa-edit nav-icon" /><p>Transaction <i class="right fas fa-angle-left"></i></p></a></Link>
                                            
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/materialReport"> <a href="#" className="nav-link"><i className="far fa-file nav-icon" /><p>Reports <i class="right fas fa-angle-left"></i></p></a></Link>
                                            
                                        </li>
                                </ul>
                            </li>
                            <li className="nav-item"><a href="#" className="nav-link"><i className="nav-icon fas fa-cogs" /><p>PED </p></a>
                                    <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="/PEDMaster"> <a href="#" className="nav-link"><i className="far fa-envelope nav-icon" /><p>Master </p></a></Link>
                                    </li>
                                      
                                       
                                    </ul>
                            </li>

                        

                            <li className="nav-item"><a href="#" className="nav-link"><i className="nav-icon fas fa-tools" /><p>Maintenance</p></a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>ChartJS</p></a></li>
                                        <li className="nav-item"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>ChartJS</p></a></li>
                                        <li className="nav-item"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>ChartJS</p></a></li>
                                    </ul>
                            </li>
                        </ul>
                    </nav>
           
                </div>
          
        </aside>

        )
    }
}

export default Menu
