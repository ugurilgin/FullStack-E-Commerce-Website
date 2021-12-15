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
                        <li className="sidebarListItem"> 
                            <IoGridOutline className="sidebarIcon"/>
                               Create New Product
                          
                        </li>
                        <Link to="/admin-home" className='link'>
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
                        <li className="sidebarListItem"> 
                            <IoGridOutline className="sidebarIcon"/>
                            Create New Category
                          
                        </li>
                        <li className="sidebarListItem"> 
                            <IoListOutline className="sidebarIcon"/>
                                List View
                          
                        </li>
                        </ul >
                        <h3 className="sidebarTitle"> <BsMegaphone className="sidebarTitleIcon"/> Orders</h3>
                        <ul className="sidebarList">
                        <li className="sidebarListItem"> 
                           
                          
                        </li>
                      
                        <li className="sidebarListItem"> 
                            <IoListOutline className="sidebarIcon"/>
                                List View
                          
                        </li>
                        </ul >
                        <h3 className="sidebarTitle"> <BsCurrencyDollar className="sidebarTitleIcon"/> Payments</h3>
                        <ul className="sidebarList">
                        <li className="sidebarListItem"> 
                           
                          
                        </li>
                        <li className="sidebarListItem"> 
                            <IoGridOutline className="sidebarIcon"/>
                            Create New Payments

                          
                        </li>
                        <li className="sidebarListItem"> 
                            <IoListOutline className="sidebarIcon"/>
                                List View
                          
                        </li>
                        </ul >
                        <h3 className="sidebarTitle"> <BsTruck className="sidebarTitleIcon"/> Shippers</h3>
                        <ul className="sidebarList">
                        <li className="sidebarListItem"> 
                           
                          
                        </li>
                        <li className="sidebarListItem"> 
                            <IoGridOutline className="sidebarIcon"/>
                            Create New Shippers

                          
                        </li>
                        <li className="sidebarListItem"> 
                            <IoListOutline className="sidebarIcon"/>
                                List View
                          
                        </li>
                        </ul >
                        <h3 className="sidebarTitle"> <BsPerson className="sidebarTitleIcon"/> Users</h3>
                        <ul className="sidebarList">
                        <li className="sidebarListItem"> 
                           
                          
                        </li>
                        <li className="sidebarListItem"> 
                            <IoGridOutline className="sidebarIcon"/>
                            Create New Users

                          
                        </li>
                        <li className="sidebarListItem"> 
                            <IoListOutline className="sidebarIcon"/>
                                List View
                          
                        </li>
                        </ul >
                    
                 </div>
                 </div>   
            </div>
        );
    }


export default Sidebar
