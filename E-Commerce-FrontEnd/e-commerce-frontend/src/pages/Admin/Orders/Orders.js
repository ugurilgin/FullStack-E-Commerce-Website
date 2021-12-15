
import React from 'react'
import { BsBasket, BsCalendar, BsCurrencyDollar, BsMap, BsPerson, BsPhone } from 'react-icons/bs'
import {  IoColorFill, IoHomeOutline, IoLocation } from 'react-icons/io5'
import {   MdDescription, MdOutlineEmail, MdPermIdentity, MdPublish } from 'react-icons/md'
import { RiFontSize, RiOrderPlayFill, RiTrademarkFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import Header from '../../../Components/Admin/Header/Header'
import Sidebar from '../../../Components/Admin/Sidebar/Sidebar'
import './orders.css'
function Orders() {
    return (
        
           <div>
        <Header/>
<div className="container">
<Sidebar/>
<div className="products">
<div className="productTitleContainer">
    <h1 className="userTitle">Review Orders</h1>
    
    </div>
<div className="productContainer">
    <div className="productShow">
<div className='productShowTop'>
<div className='productShowTopTitle'>
    <div>
<span className='userShowUsername'><BsPerson className='iconbox'/>Customer</span>
<span className='userShowJobTitle'>
<span className='customerName'>John Alexander</span>
<span className='customerEmail'>alex@example.com</span>
<span className='customerPhone'>+998 99 22123456</span></span>
</div>

<div>
<span className='userShowUsername'><BsBasket className='iconbox'/>Order info</span>
<span className='userShowJobTitle'>
<span className='customerName'>Shipping: Fargo express</span>
<span className='customerEmail'>Pay method: card</span>
<span className='customerPhone'>Status: new</span></span>
</div>
<div>
<span className='userShowUsername'><IoLocation className='iconbox'/>Deliver to</span>
<span className='userShowJobTitle'>
<span className='customerName'>City: Tashkent, Uzbekistan</span>
<span className='customerEmail'>Block A, House 123, Floor 2</span>
<span className='customerPhone'>Po Box 10000</span></span>
</div>
</div>
</div>
<div className='userShowBottom'>
<span className='userShowTitle'>Products</span>
<div className='userShowInfo'>

<img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e125b578-4173-401a-ab13-f066979c8848/air-force-1-gen%C3%A7-ayakkab%C4%B1s%C4%B1-1hqfHl.png" className='userUpdateImg'/>
<span className='userShowInfoTitle'>T-shirt blue, XXL size</span>
<span className='userShowInfoTitle'> Price: $10</span>
<span className='userShowInfoTitle'>  Quentity: 2</span>
</div>




    </div>
   
   
   
    </div>
<div className="productUpdate">
<span className='userUpdateTitle'>Payment</span>
<form className='userUpdateForm'>
    <div className='userUpdateLeft'>
        <div className='userUpdateItem'>
            <span className='boldtitles'>Sub Total <span className='thintitle'>1000</span></span>
            <span className='boldtitles'>Shipping Cost <span className='thintitle'>1000</span></span>
            <span className='boldtitles'>Grand Total </span>
            <span className='totalCost'>$1000</span>
            
        </div>
        
       
      
       
       
       
   

       
    </div>
   
</form>




</div>
</div>
        </div>

</div>
</div>  
       
    )
}

export default Orders

