import feather from "feather-icons";
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './SideBarAdmin.scss';

const SideBarAdmin = () => {
    
    useEffect(() => {
        feather.replace(); 
      }, []);

    const { logout } = useContext(AuthContext)

    const handleLogout = () => {
        logout();
    }

    return (
        <nav class="navbar navbar-vertical navbar-expand-lg">
            <div class="collapse navbar-collapse" id="navbarVerticalCollapse">
                <div class="navbar-vertical-content">
                    <ul class="navbar-nav flex-column" id="navbarVerticalNav">
                        <li class="nav-item">
                            <div class="nav-item-wrapper">
                                <a class="nav-link dropdown-indicator label-1" href="#nv-dashboard" role="button" data-bs-toggle="collapse" aria-expanded="true" aria-controls="nv-dashboard">
                                    <div class="d-flex align-items-center">
                                        <span class="nav-link-icon">
                                            <span data-feather="layout" style={{ width: "14px", height: "14px" }}></span>
                                        </span>
                                        <span class="nav-link-text ms-2">Dashboard</span>
                                        <div className="dropdown-indicator-icon-wrapper ms-auto ps-2">
                                            <span class="fas fa-caret-right dropdown-indicator-icon"></span>
                                        </div>
                                    </div>
                                </a>
                                <div class="parent-wrapper label-1">
                                    <ul class="nav collapse parent show" data-bs-parent="#navbarVerticalCollapse" id="nv-dashboard">
                                        <li class="collapsed-nav-item-title d-none">Dashboard</li>
                                        <li class="nav-item">
                                            <a class="nav-link active" href="index.html">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">Overview</span></div>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="index.html">
                                                <div class="d-flex align-items-center"><span class="nav-link-text ">Sales Statistics</span></div>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="index.html">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">Inventory Status</span></div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item">
                            <div class="nav-item-wrapper">
                                <a class="nav-link dropdown-indicator label-1" href="#nv-order" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-order">
                                    <div class="d-flex align-items-center">
                                        <span class="nav-link-icon">
                                            <span data-feather="shopping-bag" style={{ width: "14px", height: "14px" }}></span>
                                        </span>
                                        <span class="nav-link-text ms-2">Orders</span>
                                        <div className="dropdown-indicator-icon-wrapper ms-auto ps-2">
                                            <span class="fas fa-caret-right dropdown-indicator-icon"></span>
                                        </div>
                                    </div>
                                </a>
                                <div class="parent-wrapper label-1">
                                    <ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-order">
                                        <li class="collapsed-nav-item-title d-none">Orders</li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="index.html">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">New Orders</span></div>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="index.html">
                                                <div class="d-flex align-items-center"><span class="nav-link-text ">Orders in Processing</span></div>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="index.html">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">Shipped Orders</span></div>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="index.html">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">Canceled Orders</span></div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item">
                            <div class="nav-item-wrapper">
                                <a class="nav-link dropdown-indicator label-1" href="#nv-customer" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-customer">
                                    <div class="d-flex align-items-center">
                                        <span class="nav-link-icon">
                                            <span data-feather="users" style={{ width: "14px", height: "14px" }}></span>
                                        </span>
                                        <span class="nav-link-text ms-2">Customer</span>
                                        <div className="dropdown-indicator-icon-wrapper ms-auto ps-2">
                                            <span class="fas fa-caret-right dropdown-indicator-icon"></span>
                                        </div>
                                    </div>
                                </a>
                                <div class="parent-wrapper label-1">
                                    <ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-customer">
                                        <li class="collapsed-nav-item-title d-none">Customer</li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="index.html">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">New Customers</span></div>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="index.html">
                                                <div class="d-flex align-items-center"><span class="nav-link-text ">Customer Status</span></div>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="index.html">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">Customer Segmentation</span></div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item">
                            <div class="nav-item-wrapper">
                                <a class="nav-link dropdown-indicator label-1" href="#nv-product" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-product">
                                    <div class="d-flex align-items-center">
                                        <span class="nav-link-icon">
                                            <span data-feather="package" style={{ width: "14px", height: "14px" }}></span>
                                        </span>
                                        <span class="nav-link-text ms-2">Products</span>
                                        <div className="dropdown-indicator-icon-wrapper ms-auto ps-2">
                                            <span class="fas fa-caret-right dropdown-indicator-icon"></span>
                                        </div>
                                    </div>
                                </a>
                                <div class="parent-wrapper label-1">
                                    <ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-product">
                                        <li class="collapsed-nav-item-title d-none">Products</li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="index.html">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">Best-Selling Products</span></div>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="index.html">
                                                <div class="d-flex align-items-center"><span class="nav-link-text ">Out-of-Stock Products</span></div>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="index.html">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">Inventory Management</span></div>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="index.html">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">Add New Product</span></div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item">
                            <div class="nav-item-wrapper">
                                <a class="nav-link dropdown-indicator label-1" href="#nv-sale" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-sale">
                                    <div class="d-flex align-items-center">
                                        <span class="nav-link-icon">
                                            <span data-feather="trending-up" style={{ width: "14px", height: "14px" }}></span>
                                        </span>
                                        <span class="nav-link-text ms-2">Sales & Revenue</span>
                                        <div className="dropdown-indicator-icon-wrapper ms-auto ps-2">
                                            <span class="fas fa-caret-right dropdown-indicator-icon"></span>
                                        </div>
                                    </div>
                                </a>
                                <div class="parent-wrapper label-1">
                                    <ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-sale">
                                        <li class="collapsed-nav-item-title d-none">Sales & Revenue</li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="index.html">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">Daily Revenue</span></div>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="index.html">
                                                <div class="d-flex align-items-center"><span class="nav-link-text ">Weekly Revenue</span></div>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="index.html">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">Monthly Revenue</span></div>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="index.html">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">Revenue Targets</span></div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item">
                            <div class="nav-item-wrapper">
                                <a class="nav-link dropdown-indicator label-1" href="#nv-marketing" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-marketing">
                                    <div class="d-flex align-items-center">
                                        <span class="nav-link-icon">
                                            <span data-feather="tag" style={{ width: "14px", height: "14px" }}></span>
                                        </span>
                                        <span class="nav-link-text ms-2">Marketing</span>
                                        <div className="dropdown-indicator-icon-wrapper ms-auto ps-2">
                                            <span class="fas fa-caret-right dropdown-indicator-icon"></span>
                                        </div>
                                    </div>
                                </a>
                                <div class="parent-wrapper label-1">
                                    <ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-marketing">
                                        <li class="collapsed-nav-item-title d-none">Marketing</li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="index.html">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">Advertising Campaigns</span></div>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="index.html">
                                                <div class="d-flex align-items-center"><span class="nav-link-text ">Discount Codes</span></div>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="index.html">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">Current Promotions</span></div>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="index.html">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">Conversion Rate</span></div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item">
                            <div class="nav-item">
                                <a class="nav-link dropdown-indicator label-1" href="#nv-support" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-support">
                                    <div class="d-flex align-items-center">
                                        <span class="nav-link-icon">
                                            <span data-feather="life-buoy" style={{ width: "14px", height: "14px" }}></span>
                                        </span>
                                        <span class="nav-link-text ms-2">Support & Feedback</span>
                                        <div className="dropdown-indicator-icon-wrapper ms-5 ps-2">
                                            <span class="fas fa-caret-right dropdown-indicator-icon"></span>
                                        </div>
                                    </div>
                                </a>
                                <div class="parent-wrapper label-1">
                                    <ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-support">
                                        <li class="collapsed-nav-item-title d-none">Support & Feedback</li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="index.html">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">Support Tickets</span></div>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="index.html">
                                                <div class="d-flex align-items-center"><span class="nav-link-text ">Customer Feedback</span></div>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="index.html">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">Product Ratings</span></div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item">
                            <div class="nav-item-wrapper">
                                <a class="nav-link dropdown-indicator label-1" href="#nv-report" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-report">
                                    <div class="d-flex align-items-center">
                                        <span class="nav-link-icon">
                                            <span data-feather="bar-chart" style={{ width: "14px", height: "14px" }}></span>
                                        </span>
                                        <span class="nav-link-text ms-2">Reports</span>
                                        <div className="dropdown-indicator-icon-wrapper ms-auto ps-2">
                                            <span class="fas fa-caret-right dropdown-indicator-icon"></span>
                                        </div>
                                    </div>
                                </a>
                                <div class="parent-wrapper label-1">
                                    <ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-report">
                                        <li class="collapsed-nav-item-title d-none">Reports</li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="index.html">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">Order Reports</span></div>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="index.html">
                                                <div class="d-flex align-items-center"><span class="nav-link-text ">Customer Reports</span></div>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="index.html">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">Product Reports</span></div>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="index.html">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">Revenue Reports</span></div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item">
                            <div class="nav-item-wrapper">
                                <a class="nav-link dropdown-indicator label-1" href="#nv-user" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-user">
                                    <div class="d-flex align-items-center">
                                        <span class="nav-link-icon">
                                            <span data-feather="user-check" style={{ width: "14px", height: "14px" }}></span>
                                        </span>
                                        <span class="nav-link-text ms-2">User Management</span>
                                        <div className="dropdown-indicator-icon-wrapper ms-auto ps-2">
                                            <span class="fas fa-caret-right dropdown-indicator-icon"></span>
                                        </div>
                                    </div>
                                </a>
                                <div class="parent-wrapper label-1">
                                    <ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-user">
                                        <li class="collapsed-nav-item-title d-none">User Management</li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="index.html">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">User Management</span></div>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="index.html">
                                                <div class="d-flex align-items-center"><span class="nav-link-text ">User Permissions</span></div>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="index.html">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">User Activity History</span></div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item">
                            <div class="nav-item-wrapper">
                                <a class="nav-link dropdown-indicator label-1" href="#nv-setting" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-setting">
                                    <div class="d-flex align-items-center">
                                        <span class="nav-link-icon">
                                            <span data-feather="settings" style={{ width: "14px", height: "14px" }}></span>
                                        </span>
                                        <span class="nav-link-text ms-2">Settings</span>
                                        <div className="dropdown-indicator-icon-wrapper ms-auto ps-2">
                                            <span class="fas fa-caret-right dropdown-indicator-icon"></span>
                                        </div>
                                    </div>
                                </a>
                                <div class="parent-wrapper label-1">
                                    <ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-setting">
                                        <li class="collapsed-nav-item-title d-none">Settings</li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="index.html">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">System Settings</span></div>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="index.html">
                                                <div class="d-flex align-items-center"><span class="nav-link-text ">Notification Settings</span></div>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="index.html">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">Email Marketing Settings</span></div>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="index.html">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">Payment Settings</span></div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item">
                            <div class="nav-item-wrapper">
                                <a class="nav-link dropdown-indicator label-1" href="#nv-logout" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-logout">
                                    <div class="d-flex align-items-center">
                                        <span class="nav-link-icon">
                                            <span data-feather="log-out" style={{ width: "14px", height: "14px" }}></span>
                                        </span>
                                        <span class="nav-link-text ms-2">Logout</span>
                                        <div className="dropdown-indicator-icon-wrapper ms-auto ps-2">
                                            <span class="fas fa-caret-right dropdown-indicator-icon"></span>
                                        </div>
                                    </div>
                                </a>
                                <div class="parent-wrapper label-1">
                                    <ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-logout">
                                        <li class="collapsed-nav-item-title d-none">Logout</li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="index.html">
                                                <div class="d-flex align-items-center"><span class="nav-link-text">Logout</span></div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default SideBarAdmin;
