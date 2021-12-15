
import React from 'react'
import { BsBasket, BsCalendar, BsCurrencyDollar, BsPhone } from 'react-icons/bs'
import {  IoColorFill, IoHomeOutline } from 'react-icons/io5'
import {   MdDescription, MdOutlineEmail, MdPermIdentity, MdPublish } from 'react-icons/md'
import { RiFontSize, RiTrademarkFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import Header from '../../../Components/Admin/Header/Header'
import Sidebar from '../../../Components/Admin/Sidebar/Sidebar'
import './payment.css'
function Payment() {
    return (
        
           <div>
        <Header/>
<div className="container">
<Sidebar/>
<div className="products">
<div className="productTitleContainer">
    <h1 className="userTitle">Edit Payment</h1>
    <Link to="/admin-newPayment">
    <button className="productAddButton">Create New Payment</button>
    </Link>
    </div>
<div className="productContainer">
    <div className="productShow">
<div className='productShowTop'>
<div className='productShowTopTitle'>
<span className='userShowUsername'>Payment Adı</span>
</div>
</div>
<div className='userShowBottom'>
<span className='userShowTitle'>Info</span>

</div>
<span className='userShowTitle'>Other Details</span>
<br/>
<label>Payment Method</label><br/>
    <span>Yes</span>
    <br/>
    <label>Payment Available</label><br/>
    <span>Yes</span>




   
   
   
   
    </div>
<div className="productUpdate">
<span className='userUpdateTitle'>Edit</span>
<form className='userUpdateForm'>
    <div className='userUpdateLeft'>
      
        <div className='userUpdateItem'>
        <label>Payment Method</label><br/>
<select className='newUserSelect' name="Payment Method" id="Payment Method">
    <option value="cash">Cash</option>
    <option value="credit">Credit Card</option>
    <option value="door">Pay At The Door</option>
</select>
        </div>
        <div className='userUpdateItem'>
        <label>Payment Available</label><br/>
<select className='newUserSelect' name="Payment Available" id="Payment Available">
    <option value="yes">Yes</option>
    <option value="no">No</option>
</select>
        </div>
    </div>
    <div className='userUpdateRight'>
        
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

export default Payment

