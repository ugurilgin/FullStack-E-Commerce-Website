import { Slider } from '@mui/material'
import React from 'react'
import {    MdPublish } from 'react-icons/md'

import Header from '../../../Components/Admin/Header/Header'
import Sidebar from '../../../Components/Admin/Sidebar/Sidebar'
import './newcategory.css'
function NewCategory() {
    return (
        <div>
        <Header/>
<div className="container">
<Sidebar/>
<div className='newUser'>
<h1 className='newUserTitle'>New Category</h1>
  <form className='newUserForm'>
  <div className='newUserItem'>
        <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e125b578-4173-401a-ab13-f066979c8848/air-force-1-gen%C3%A7-ayakkab%C4%B1s%C4%B1-1hqfHl.png" className='userUpdateImg'/>
       <label htmlFor="file"><MdPublish className='userUpdateIcon'/></label>
        <input type="file" id="file" style={{display:"none"}} />
        </div>
        
    <div className='newUserItem'>
    <label>Category Name</label>
    <input type="text" placeholder='Sport Shoes'/>
    </div>

    <div className='newUserItem'>
    <label>Description</label>
    <textarea placeholder='desc'/>
    </div>

   
    <div className='newUserItem'>
<label>Category Available</label>
<select className='newUserSelect' name="active" id="active">
    <option value="yes">Yes</option>
    <option value="no">No</option>
</select>
</div>



<button className='newUserButton'>Create</button>
</form>

   </div> 
</div>
       
            
        </div>
    )
}

export default NewCategory
