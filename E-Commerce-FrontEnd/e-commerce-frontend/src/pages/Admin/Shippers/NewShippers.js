import { Slider } from '@mui/material'
import React from 'react'
import {    MdPublish } from 'react-icons/md'

import Header from '../../../Components/Admin/Header/Header'
import Sidebar from '../../../Components/Admin/Sidebar/Sidebar'
import './newshippers.css'
function NewShipper() {
    return (
        <div>
        <Header/>
<div className="container">
<Sidebar/>
<div className='newUser'>
<h1 className='newUserTitle'>New Payment</h1>
  <form className='newUserForm'>
 
  <div className='newUserItem'>
    <label>CompanyName</label>
    <input type="text" placeholder='Company'/>
    </div>
    <div className='newUserItem'>
    <label>Phone</label>
    <input type="tel" placeholder='05555'/>
    </div>
    
    



<button className='newUserButton'>Create</button>
</form>

   </div> 
</div>
       
            
        </div>
    )
}

export default NewShipper
