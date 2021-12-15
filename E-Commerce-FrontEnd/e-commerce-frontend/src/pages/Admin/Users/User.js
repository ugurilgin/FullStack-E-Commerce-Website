
import React from 'react'
import { BsCalendar, BsPhone } from 'react-icons/bs'
import {  IoHomeOutline } from 'react-icons/io5'
import {   MdOutlineEmail, MdPermIdentity, MdPublish } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Header from '../../../Components/Admin/Header/Header'
import Sidebar from '../../../Components/Admin/Sidebar/Sidebar'
import './users.css'
function User() {
    return (
        
           <div>
        <Header/>
<div className="container">
<Sidebar/>
<div className="users">
<div className="userTitleContainer">
    <h1 className="userTitle">Edit User</h1>
    <Link to="/admin-newUser">
    <button className="userAddButton">Create New User</button>
    </Link>
    </div>
<div className="userContainer">
    <div className="userShow">
<div className='userShowTop'>
    <img src="https://drive.google.com/uc?export=view&id=1r_gBnfOpUHzmILerFzBeG_l7zY9QzOt4" className='userShowImg'/>
<div className='userShowTopTitle'>
<span className='userShowUsername'>Uğur Ilgın</span>
<span className='userShowJobTitle'>Software Developer</span>
</div>
</div>
<div className='userShowBottom'>
<span className='userShowTitle'>Account Detail</span>
<div className='userShowInfo'>
<MdPermIdentity className='userShowIcon'/>
<span className='userShowInfoTitle'>ugurilgin</span>

</div>
<div className='userShowInfo'>
<BsCalendar className='userShowIcon'/>
<span className='userShowInfoTitle'>01.01.01</span>

</div>
<span className='userShowTitle'>Contact Details</span>

<div className='userShowInfo'>
<BsPhone className='userShowIcon'/>
<span className='userShowInfoTitle'>+9055555555</span>

</div>
<div className='userShowInfo'>
<MdOutlineEmail className='userShowIcon'/>
<span className='userShowInfoTitle'>ugurilgin@aa.com</span>

</div>

<div className='userShowInfo'>
<IoHomeOutline className='userShowIcon'/>
<span className='userShowInfoTitle'>Adress</span>

</div>
    </div>
   
   
   
    </div>
<div className="userUpdate">
<span className='userUpdateTitle'>Edit</span>
<form className='userUpdateForm'>
    <div className='userUpdateLeft'>
        <div className='userUpdateItem'>
            <label>Username:</label>
            <input type="text" placeholder='ugurilgin' className='userUpdateInput'/>
        </div>
        <div className='userUpdateItem'>
            <label>Username:</label>
            <input type="text" placeholder='ugurilgin' className='userUpdateInput'/>
        </div>
        <div className='userUpdateItem'>
            <label>Username:</label>
            <input type="text" placeholder='ugurilgin' className='userUpdateInput'/>
        </div>
        <div className='userUpdateItem'>
            <label>Username:</label>
            <input type="text" placeholder='ugurilgin' className='userUpdateInput'/>
        </div>
        <div className='userUpdateItem'>
            <label>Username:</label>
            <input type="text" placeholder='ugurilgin' className='userUpdateInput'/>
        </div>
        <div className='userUpdateItem'>
            <label>Username:</label>
            <input type="text" placeholder='ugurilgin' className='userUpdateInput'/>
        </div>
    </div>
    <div className='userUpdateRight'>
        <div className='userUpdateUpload'>
        <img src="https://drive.google.com/uc?export=view&id=1r_gBnfOpUHzmILerFzBeG_l7zY9QzOt4" className='userUpdateImg'/>
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

export default User

