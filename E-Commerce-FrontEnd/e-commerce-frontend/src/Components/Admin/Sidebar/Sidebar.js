import React from 'react'
import LogoComponent from './Logo/Logo';
import { BsBasket,BsMap,BsMegaphone,BsCurrencyDollar,BsTruck, BsPerson} from "react-icons/bs";
import '../../../css/admin.css';
import MenuItemComponent from './MenuItemComponent';

function Sidebar(props) {
        return (
            <div className="sidebar-container">
                <LogoComponent />
                <div className="menuItemList">
                    <MenuItemComponent
                        title="Products" 
                        onClick={() => props.onChange('Products')}
                        active={props.selectedItem === 'Products'}
                    ><BsBasket/></MenuItemComponent>
                    <MenuItemComponent
                        title="Category" 
                        onClick={() => props.onChange('Category')}
                        active={props.selectedItem === 'Category'}
                        ><BsMap/></MenuItemComponent>
                    <MenuItemComponent
                        title="Orders"
                        onClick={() => props.onChange('Orders')}
                        active={props.selectedItem === 'Orders'} 
                        ><BsMegaphone/></MenuItemComponent>
                    <MenuItemComponent
                        title="Payments" 
                        onClick={() => props.onChange('Payments')}
                        active={props.selectedItem === 'Payments'}
                        ><BsCurrencyDollar/></MenuItemComponent>
                    <MenuItemComponent
                        title="Shippers" 
                        onClick={() => props.onChange('Shippers')}
                        active={props.selectedItem === 'Shippers'} 
                        ><BsTruck/></MenuItemComponent>
                    <MenuItemComponent
                        title="Customers" 
                        onClick={() => props.onChange('Customers')}
                        active={props.selectedItem === 'Customers'} 
                        ><BsPerson/></MenuItemComponent>
                    <div className="seperator"></div>
                   
                </div>
            </div>
        );
    }


export default Sidebar
