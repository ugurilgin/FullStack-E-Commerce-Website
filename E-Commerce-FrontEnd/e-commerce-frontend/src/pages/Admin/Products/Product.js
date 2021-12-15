
import React from 'react'
import { BsBasket, BsCalendar, BsCurrencyDollar, BsPhone } from 'react-icons/bs'
import {  IoColorFill, IoHomeOutline } from 'react-icons/io5'
import {   MdDescription, MdOutlineEmail, MdPermIdentity, MdPublish } from 'react-icons/md'
import { RiFontSize, RiTrademarkFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import Header from '../../../Components/Admin/Header/Header'
import Sidebar from '../../../Components/Admin/Sidebar/Sidebar'
import './product.css'
function Product() {
    return (
        
           <div>
        <Header/>
<div className="container">
<Sidebar/>
<div className="products">
<div className="productTitleContainer">
    <h1 className="userTitle">Edit Product</h1>
    <Link to="/admin-newProduct">
    <button className="productAddButton">Create New Product</button>
    </Link>
    </div>
<div className="productContainer">
    <div className="productShow">
<div className='productShowTop'>
    <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e125b578-4173-401a-ab13-f066979c8848/air-force-1-gen%C3%A7-ayakkab%C4%B1s%C4%B1-1hqfHl.png" className='productShowImg'/>
<div className='productShowTopTitle'>
<span className='userShowUsername'>Sport Shoes</span>
<span className='userShowJobTitle'>Nike</span>
</div>
</div>
<div className='userShowBottom'>
<span className='userShowTitle'>Info</span>
<div className='userShowInfo'>
<MdDescription className='userShowIcon'/>
<span className='userShowInfoTitle'>Descrption</span>

</div>
<div className='userShowInfo'>
<RiTrademarkFill className='userShowIcon'/>
<span className='userShowInfoTitle'>Trademark</span>

</div>
<div className='userShowInfo'>
<BsBasket className='userShowIcon'/>
<span className='userShowInfoTitle'>Quentity</span>

</div>
<div className='userShowInfo'>
<BsCurrencyDollar className='userShowIcon'/>
<span className='userShowInfoTitle'>Price</span>

</div>
<div className='userShowInfo'>
<RiFontSize className='userShowIcon'/>
<span className='userShowInfoTitle'>Available Size</span>

</div>
<div className='userShowInfo'>
<IoColorFill className='userShowIcon'/>
<span className='userShowInfoTitle'>Available Color</span>

</div>
<span className='userShowTitle'>Other Details</span>
<br/>
<label>Product Available</label><br/>
<select className='newUserSelect' name="Product Available" id="Product Available">
    <option value="yes">Yes</option>
    <option value="no">No</option>
</select>
<br/>
<label>Discount Available</label><br/>
<select className='newUserSelect' name="Discount Available" id="Discount Available">
    <option value="yes">Yes</option>
    <option value="no">No</option>
</select>
<br/>
<label>IsBannerShow</label><br/>
<select className='newUserSelect' name="IsBannerShow" id="IsBannerShow">
    <option value="yes">Yes</option>
    <option value="no">No</option>
</select>



    </div>
   
   
   
    </div>
<div className="productUpdate">
<span className='userUpdateTitle'>Edit</span>
<form className='userUpdateForm'>
    <div className='userUpdateLeft'>
        <div className='userUpdateItem'>
            <label>Product Name:</label>
            <input type="text" placeholder='ugurilgin' className='userUpdateInput'/>
        </div>
        <div className='userUpdateItem'>
            <label>TradeMark:</label>
            <input type="text" placeholder='ugurilgin' className='userUpdateInput'/>
        </div>
        <div className='userUpdateItem'>
            <label>Descrption:</label>
            <input type="text" placeholder='ugurilgin' className='userUpdateInput'/>
        </div>
        <div className='userUpdateItem'>
            <label>Quentity:</label>
            <input type="text" placeholder='ugurilgin' className='userUpdateInput'/>
        </div>
        <div className='userUpdateItem'>
            <label>Price:</label>
            <input type="text" placeholder='ugurilgin' className='userUpdateInput'/>
        </div>
        <div className='userUpdateItem'>
            <label>Available Size:</label>
            <input type="text" placeholder='ugurilgin' className='userUpdateInput'/>
        </div>
        <div className='userUpdateItem'>
            <label>Available Color:</label>
            <input type="text" placeholder='ugurilgin' className='userUpdateInput'/>
        </div>
       
        <div className='userUpdateItem'>
        <label>Product Available</label><br/>
<select className='newUserSelect' name="Product Available" id="Product Available">
    <option value="yes">Yes</option>
    <option value="no">No</option>
</select>
        </div>
        <div className='userUpdateItem'>
        <label>Discount Available</label><br/>

        <select className='newUserSelect' name="Discount Available" id="Discount Available">
    <option value="yes">Yes</option>
    <option value="no">No</option>
</select>
        </div>

        <div className='userUpdateItem'>
        <label>IsBannerShow</label><br/>
<select className='newUserSelect' name="IsBannerShow" id="IsBannerShow">
    <option value="yes">Yes</option>
    <option value="no">No</option>
</select>
        </div>
    </div>
    <div className='userUpdateRight'>
        <div className='userUpdateUpload'>
        <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e125b578-4173-401a-ab13-f066979c8848/air-force-1-gen%C3%A7-ayakkab%C4%B1s%C4%B1-1hqfHl.png" className='userUpdateImg'/>
       <label htmlFor="file"><MdPublish className='userUpdateIcon'/></label>
        <input type="file" id="file" style={{display:"none"}} />
        </div>
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

export default Product

