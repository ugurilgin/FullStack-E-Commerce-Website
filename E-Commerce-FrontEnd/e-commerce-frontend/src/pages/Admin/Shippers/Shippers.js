
import React from 'react'
import { BsBasket, BsCalendar, BsCurrencyDollar, BsNewspaper, BsPhone } from 'react-icons/bs'
import {  IoColorFill, IoHomeOutline } from 'react-icons/io5'
import {   MdDescription, MdOutlineEmail, MdPermIdentity, MdPublish } from 'react-icons/md'
import { RiFontSize, RiTrademarkFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import Header from '../../../Components/Admin/Header/Header'
import Sidebar from '../../../Components/Admin/Sidebar/Sidebar'
import './shippers.css'
function Shipper() {
    return (
        
           <div>
        <Header/>
<div className="container">
<Sidebar/>
<div className="products">
<div className="productTitleContainer">
    <h1 className="userTitle">Edit Shipper</h1>
    <Link to="/admin-newShipper">
    <button className="productAddButton">Create New Shipper</button>
    </Link>
    </div>
<div className="productContainer">
    <div className="productShow">
<div className='productShowTop'>
<div className='productShowTopTitle'>
<span className='userShowUsername'>Shipper Adı</span>
</div>
</div>
<div className='userShowBottom'>
<span className='userShowTitle'>Info</span>

</div>
<br/>
<div className='userShowInfo'>
<BsNewspaper className='userShowIcon'/>
<span className='userShowInfoTitle'>Name</span>

</div>
<div className='userShowInfo'>
<BsPhone className='userShowIcon'/>
<span className='userShowInfoTitle'>+9055555555</span>

</div>




   
   
   
   
    </div>
<div className="productUpdate">
<span className='userUpdateTitle'>Edit</span>
<form className='userUpdateForm'>
    <div className='userUpdateLeft'>
      
    <div className='userUpdateItem'>
    <label>CompanyName</label>
    <input type="text" placeholder='Company'/>
    </div>
    <div className='userUpdateItem'>
    <label>Phone</label>
    <input type="tel" placeholder='05555'/>
    </div>
    <br/>
        <button className='userUpdateButton'>Update</button>
    </div>
</form>




</div>
</div>
        </div>

</div>
</div>  
       
    )
}

export default Shipper

