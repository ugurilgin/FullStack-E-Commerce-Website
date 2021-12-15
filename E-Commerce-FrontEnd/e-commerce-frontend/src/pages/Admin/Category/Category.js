
import React from 'react'
import { BsBasket, BsCalendar, BsCurrencyDollar, BsPhone } from 'react-icons/bs'
import {  IoColorFill, IoHomeOutline } from 'react-icons/io5'
import {   MdDescription, MdOutlineEmail, MdPermIdentity, MdPublish } from 'react-icons/md'
import { RiFontSize, RiTrademarkFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import Header from '../../../Components/Admin/Header/Header'
import Sidebar from '../../../Components/Admin/Sidebar/Sidebar'
import './category.css'
function Category() {
    return (
        
           <div>
        <Header/>
<div className="container">
<Sidebar/>
<div className="products">
<div className="productTitleContainer">
    <h1 className="userTitle">Edit Category</h1>
    <Link to="/admin-newCategory">
    <button className="productAddButton">Create New Category</button>
    </Link>
    </div>
<div className="productContainer">
    <div className="productShow">
<div className='productShowTop'>
    <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e125b578-4173-401a-ab13-f066979c8848/air-force-1-gen%C3%A7-ayakkab%C4%B1s%C4%B1-1hqfHl.png" className='productShowImg'/>
<div className='productShowTopTitle'>
<span className='userShowUsername'>CatgoryName</span>

</div>
</div>
<div className='userShowBottom'>
<span className='userShowTitle'>Info</span>
<div className='userShowInfo'>
<MdDescription className='userShowIcon'/>
<span className='userShowInfoTitle'>Descrption</span>

</div>

<span className='userShowTitle'>Other Details</span>
<br/>
<label>Category Available</label><br/><br/>
<select className='newUserSelect' name="Product Available" id="Product Available">
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
            <label>Descrption:</label>
            <input type="text" placeholder='ugurilgin' className='userUpdateInput'/>
        </div>
        
       
        <div className='userUpdateItem'>
        <label>Product Available</label><br/>
<select className='newUserSelect' name="Product Available" id="Product Available">
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

export default Category

