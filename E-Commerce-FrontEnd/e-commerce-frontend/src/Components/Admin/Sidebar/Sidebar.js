import React from 'react'
import { BsBasket,BsHouseDoor,BsMegaphone,BsCurrencyDollar,BsTruck, BsPerson,BsReverseLayoutSidebarReverse} from "react-icons/bs";
import { IoAnalytics,  IoGridOutline ,IoListOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


import './sidebar.css';

function Sidebar(props) {
        return (
            <div className="sidebar">
             <div className="sideWrapper">
                 <div className="sidebarMenu">
                     <h3 className="sidebarTitle"> <BsHouseDoor className="sidebarTitleIcon"/> Home</h3>
                     <ul className="sidebarList">
                         <Link to="/admin-home" className='link'>
                        <li className="sidebarListItem"> 
                           
                        <IoAnalytics className="sidebarIcon"/>    Analysis
                          
                        </li>
                        </Link>
                        </ul >
                        <h3 className="sidebarTitle"> <BsBasket className="sidebarTitleIcon"/> Products</h3>
                        <ul className="sidebarList">
                        <li className="sidebarListItem"> 
                           
                      
                          
                        </li>
                        <Link to="/admin-newProduct" className='link'>
                        <li className="sidebarListItem"> 
                            <IoGridOutline className="sidebarIcon"/>
                               Create New Product
                          
                        </li>
                        </Link>
                        <Link to="/admin-products" className='link'>
                            
                        <li className="sidebarListItem"> 
                            <IoListOutline className="sidebarIcon"/>
                                List View
                          
                        </li>
                      </Link>
                        </ul >
                        <h3 className="sidebarTitle"> <BsReverseLayoutSidebarReverse className="sidebarTitleIcon"/> Category</h3>
                        <ul className="sidebarList">
                        <li className="sidebarListItem"> 
                           
                          
                        </li>
                        <Link to="/admin-newCategory" className='link'>
                        <li className="sidebarListItem"> 
                            <IoGridOutline className="sidebarIcon"/>
                            Create New Category
                          
                        </li>
                        </Link>
                        <Link to="/admin-categories" className='link'>
                        <li className="sidebarListItem"> 
                            <IoListOutline className="sidebarIcon"/>
                                List View
                          
                        </li>
                        </Link>
                        </ul >
                        <h3 className="sidebarTitle"> <BsMegaphone className="sidebarTitleIcon"/> Orders</h3>
                        <ul className="sidebarList">
                        <li className="sidebarListItem"> 
                           
                          
                        </li>
                        <Link to="/admin-orders" className='link'>
                        <li className="sidebarListItem"> 
                            <IoListOutline className="sidebarIcon"/>
                                List View
                          
                        </li>
                        </Link>
                        </ul >
                        <h3 className="sidebarTitle"> <BsCurrencyDollar className="sidebarTitleIcon"/> Payments</h3>
                        <ul className="sidebarList">
                        <li className="sidebarListItem"> 
                           
                          
                        </li>
                        <Link to="/admin-newPayment" className='link'>
                        <li className="sidebarListItem"> 
                            <IoGridOutline className="sidebarIcon"/>
                            Create New Payments

                          
                        </li>
                        </Link>
                        <Link to="/admin-payments" className='link'>
                        <li className="sidebarListItem"> 
                            <IoListOutline className="sidebarIcon"/>
                                List View
                          
                        </li>
                       </Link>

                        </ul >
                        <h3 className="sidebarTitle"> <BsTruck className="sidebarTitleIcon"/> Shippers</h3>
                        <ul className="sidebarList">
                        <li className="sidebarListItem"> 
                           
                          
                        </li>
                        <Link to="/admin-newShipper" className='link'>
                        <li className="sidebarListItem"> 
                            <IoGridOutline className="sidebarIcon"/>
                            Create New Shippers

                          
                        </li>
                        </Link>
                        <Link to="/admin-shippers" className='link'>
                        <li className="sidebarListItem"> 
                            <IoListOutline className="sidebarIcon"/>
                                List View
                          
                        </li>
                        </Link>
                        </ul >
                        <h3 className="sidebarTitle"> <BsPerson className="sidebarTitleIcon"/> Users</h3>
                        <ul className="sidebarList">
                        <li className="sidebarListItem"> 
                           
                          
                        </li>
                        <Link to="/admin-newUser" className='link'>
                        <li className="sidebarListItem"> 
                            <IoGridOutline className="sidebarIcon"/>
                            Create New Users

                          
                        </li>
                        </Link>
                        <Link to="/admin-users" className='link'>
                        <li className="sidebarListItem"> 
                            <IoListOutline className="sidebarIcon"/>
                                List View
                          
                        </li>
                        </Link>
                        </ul >
                    
                 </div>
                 </div>   
            </div>
        );
    }


export default Sidebar
