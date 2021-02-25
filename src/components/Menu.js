import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
export class Menu extends Component {
    render() {
        return (
           <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <a href="index3.html" className="brand-link">
                    {/* <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} /> */}
                    <span className="brand-text font-weight-light">Steed App</span>
                </a>
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user panel (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src="dist/img/avatar5.png" className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">
                        <a href="#" className="d-block">User 1</a>
                    </div>
                    </div>
               
                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item"><a href="#" className="nav-link"><i className="nav-icon fas fa-users-cog"/><p>Admin </p></a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link to="/adminMaster"> <a href="#" className="nav-link"><i className="far fa-envelope nav-icon" /><p>Master <i class="right fas fa-angle-left"></i></p></a></Link>
                                            {/* <ul className="nav nav-treeview">
                                                <li className="nav-item"><Link to="/manageusers"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Manage Users</p></a></Link></li>
                                                <li className="nav-item"><Link to="/roles"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Roles</p></a></Link></li>
                                                <li className="nav-item"><Link to="/noteforapproval"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Note for Approval</p></a></Link></li>
                                            </ul> */}
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/adminTransaction"> <a href="#" className="nav-link"><i className="far fa-edit nav-icon" /><p>Transaction <i class="right fas fa-angle-left"></i></p></a></Link>
                                            {/* <ul className="nav nav-treeview">
                                                 <li className="nav-item"><Link to="/userrolemapping"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Employee User Mapping</p></a></Link></li>
                                                <li className="nav-item"><Link to="/roles"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Roles Menu Mapping</p></a></Link></li> 
                                            </ul> */}
                                        </li>
                                    </ul>
                            </li>

  

                            <li className="nav-item"><a href="#" className="nav-link"><i className="nav-icon fas fa-industry" /><p>Production</p></a>
                                <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                        <Link to="/productionMaster"> <a href="#" className="nav-link"><i className="far fa-envelope nav-icon" /><p>Master <i class="right fas fa-angle-left"></i></p></a></Link>
                                            {/* <ul className="nav nav-treeview">
                                                <li className="nav-item"><Link to="/manageusers"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Machine Process Map</p></a></Link></li>
                                                <li className="nav-item"><Link to="/roles"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Machine</p></a></Link></li>
                                            </ul> */}
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/productionTransaction"> <a href="#" className="nav-link"><i className="far fa-edit nav-icon" /><p>Transaction <i class="right fas fa-angle-left"></i></p></a></Link>
                                            {/* <a href="#" className="nav-link"><i className="far fa-edit nav-icon" /><p>Transaction <i class="right fas fa-angle-left"></i></p></a>
                                            <ul className="nav nav-treeview">
                                                <li className="nav-item"><Link to="/manageusers"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Material Issue Voucher (MIV General)</p></a></Link></li>
                                                <li className="nav-item"><Link to="/roles"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Material Issue Voucher (MIV EO)</p></a></Link></li>
                                                <li className="nav-item"><Link to="/roles"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Daily Shift Output Data</p></a></Link></li>
                                                <li className="nav-item"><Link to="/roles"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Inspection Requisition Slip</p></a></Link></li>
                                                <li className="nav-item"><Link to="/roles"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>CS HeatCode Entry</p></a></Link></li>
                                            </ul> */}
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/productionTransaction"> <a href="#" className="nav-link"><i className="far fa-file nav-icon" /><p>Reports <i class="right fas fa-angle-left"></i></p></a></Link>
                                            {/* <a href="#" className="nav-link"><i className="far fa-file nav-icon" /><p>Reports <i class="right fas fa-angle-left"></i></p></a>
                                            <ul className="nav nav-treeview">
                                                <li className="nav-item"><Link to="/manageusers"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Production Dashboard</p></a></Link></li>
                                                <li className="nav-item"><Link to="/roles"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Machine Utilization</p></a></Link></li>
                                                <li className="nav-item"><Link to="/roles"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Machine Breakdown details</p></a></Link></li>
                                                <li className="nav-item"><Link to="/roles"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Daily Shift Output</p></a></Link></li>
                                                <li className="nav-item"><Link to="/roles"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Daily Shift Output (CS)</p></a></Link></li>
                                                <li className="nav-item"><Link to="/roles"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Traceability</p></a></Link></li>
                                                <li className="nav-item"><Link to="/roles"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>DashBoard</p></a></Link></li>
                                                <li className="nav-item"><Link to="/roles"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>CS Pending Process</p></a></Link></li>
                                            </ul> */}
                                        </li>
                                </ul>
                            </li>
                            <li className="nav-item"><a href="#" className="nav-link"><i className="nav-icon fas fa-chart-pie" /><p>Commercial</p></a>
                                <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link to="/commercialMaster"> <a href="#" className="nav-link"><i className="far fa-envelope nav-icon" /><p>Master <i class="right fas fa-angle-left"></i></p></a></Link>
                                            {/* <ul className="nav nav-treeview">
                                                <li className="nav-item"><Link to="/manageusers"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Dealer</p></a></Link></li>
                                                <li className="nav-item"><Link to="/roles"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Dealer Order</p></a></Link></li>
                                                <li className="nav-item"><Link to="/roles"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Colour Code</p></a></Link></li>
                                                
                                            </ul> */}
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link"><i className="far fa-edit nav-icon" /><p>Transaction <i class="right fas fa-angle-left"></i></p></a>
                                            <ul className="nav nav-treeview">
                                                <li className="nav-item"><Link to="/manageusers"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Production Indent</p></a></Link></li>
                                                <li className="nav-item"><Link to="/manageusers"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Execution Order Register</p></a></Link></li>
                                                
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link"><i className="far fa-file nav-icon" /><p>Reports <i class="right fas fa-angle-left"></i></p></a>
                                            <ul className="nav nav-treeview">
                                                <li className="nav-item"><Link to="/manageusers"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Dealer</p></a></Link></li>
                                                <li className="nav-item"><Link to="/manageusers"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Dealer Order</p></a></Link></li>
                                                <li className="nav-item"><Link to="/manageusers"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>EO Register</p></a></Link></li>
                                            </ul>
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
                                            <a href="#" className="nav-link"><i className="far fa-envelope nav-icon" /><p>Master <i class="right fas fa-angle-left"></i></p></a>
                                            <ul className="nav nav-treeview">
                                                <li className="nav-item"><Link to="/manageusers"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>CS Identification Register</p></a></Link></li>
                                                <li className="nav-item"><Link to="/roles"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Instruments/ Gauges</p></a></Link></li>
                                                <li className="nav-item"><Link to="/roles"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Calibaration Schedule</p></a></Link></li>
                                                <li className="nav-item"><Link to="/roles"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>CS(Rejected) Regenerate</p></a></Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link"><i className="far fa-edit nav-icon" /><p>Transaction <i class="right fas fa-angle-left"></i></p></a>
                                            <ul className="nav nav-treeview">
                                                <li className="nav-item"><Link to="/manageusers"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>CS Inspection Detail View</p></a></Link></li>
                                                <li className="nav-item"><Link to="/manageusers"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>CS Closed Detail View</p></a></Link></li>
                                                <li className="nav-item"><Link to="/manageusers"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Inspection Entry</p></a></Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link"><i className="far fa-file nav-icon" /><p>Reports <i class="right fas fa-angle-left"></i></p></a>
                                            <ul className="nav nav-treeview">
                                                <li className="nav-item"><Link to="/manageusers"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Daily Inspection</p></a></Link></li>
                                                <li className="nav-item"><Link to="/manageusers"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Material Consumption</p></a></Link></li>
                                                <li className="nav-item"><Link to="/manageusers"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Rework Rejection</p></a></Link></li>
                                                <li className="nav-item"><Link to="/manageusers"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>EO Rework Rejection</p></a></Link></li>
                                            </ul>
                                        </li>
                                </ul>
                            </li>
                            <li className="nav-item"><a href="#" className="nav-link"><i className="nav-icon fas fa-people-carry" /><p>Materials</p></a>
                                <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="#" className="nav-link"><i className="far fa-envelope nav-icon" /><p>Master <i class="right fas fa-angle-left"></i></p></a>
                                            <ul className="nav nav-treeview">
                                                <li className="nav-item"><Link to="/manageusers"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>UOM</p></a></Link></li>
                                                <li className="nav-item"><Link to="/roles"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Material Type</p></a></Link></li>
                                                <li className="nav-item"><Link to="/roles"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Materials</p></a></Link></li>
                                                <li className="nav-item"><Link to="/roles"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Supplier</p></a></Link></li>
                                                <li className="nav-item"><Link to="/roles"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Payment Terms</p></a></Link></li>

                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link"><i className="far fa-edit nav-icon" /><p>Transaction <i class="right fas fa-angle-left"></i></p></a>
                                            <ul className="nav nav-treeview">
                                                <li className="nav-item"><Link to="/manageusers"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Material Requirement Plan (MRP)</p></a></Link></li>
                                                <li className="nav-item"><Link to="/manageusers"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Purchase Indent</p></a></Link></li>
                                                <li className="nav-item"><Link to="/manageusers"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Purchase Indent Process</p></a></Link></li>
                                                <li className="nav-item"><Link to="/manageusers"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Purchase Order ( PO )</p></a></Link></li>
                                                <li className="nav-item"><Link to="/manageusers"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Material Issue Updation ( MIV General )</p></a></Link></li>
                                                <li className="nav-item"><Link to="/manageusers"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Material Issue Updation ( MIV EO )</p></a></Link></li>
                                                <li className="nav-item"><Link to="/manageusers"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Material Receipt Voucher ( MRV)</p></a></Link></li>
                                                <li className="nav-item"><Link to="/manageusers"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Delivery Challan</p></a></Link></li>
                                                <li className="nav-item"><Link to="/manageusers"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Bar Stock Received Detail</p></a></Link></li>
                                                <li className="nav-item"><Link to="/manageusers"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Forging/Casting Received Detail</p></a></Link></li>
                                                <li className="nav-item"><Link to="/manageusers"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Dispatch Slip (DS)</p></a></Link></li>
                                                <li className="nav-item"><Link to="/manageusers"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>RawMaterial Length / Weight Details</p></a></Link></li>
                                                <li className="nav-item"><Link to="/manageusers"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>RawMaterial Issue Details</p></a></Link></li>
                                                <li className="nav-item"><Link to="/manageusers"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Stores Invoice</p></a></Link></li>
                                                <li className="nav-item"><Link to="/manageusers"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Job Order</p></a></Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link"><i className="far fa-file nav-icon" /><p>Reports <i class="right fas fa-angle-left"></i></p></a>
                                            <ul className="nav nav-treeview">
                                                <li className="nav-item"><Link to="/manageusers"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Current Stock Report</p></a></Link></li>
                                                <li className="nav-item"><Link to="/manageusers"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Bar Stock Received Detail Report</p></a></Link></li>
                                                <li className="nav-item"><Link to="/manageusers"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Forging/Casting Received Detail Report</p></a></Link></li>
                                                <li className="nav-item"><Link to="/manageusers"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>WO Wise Raw Material Issue Report</p></a></Link></li>
                                                <li className="nav-item"><Link to="/manageusers"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Material Consumption Report</p></a></Link></li>
                                            </ul>
                                        </li>
                                </ul>
                            </li>
                            <li className="nav-item"><a href="#" className="nav-link"><i className="nav-icon fas fa-cogs" /><p>PED </p></a>
                                    <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="/PEDMaster"> <a href="#" className="nav-link"><i className="far fa-envelope nav-icon" /><p>Master </p></a></Link>
                                    </li>
                                      
                                        {/* <li className="nav-item"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Processes</p></a></li>
                                        <li className="nav-item"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>ProcessFlow</p></a></li>
                                       <li className="nav-item"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Segments(Parts/Accessories)</p></a></li> 
                                        <li className="nav-item"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Products</p></a></li>
                                        <li className="nav-item"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Product Segment Map</p></a></li>
                                        <li className="nav-item"><a href="#" className="nav-link"><i className="far fa-circle nav-icon" /><p>Bill Of Materials</p></a></li> */}
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
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
        </aside>

        )
    }
}

export default Menu
