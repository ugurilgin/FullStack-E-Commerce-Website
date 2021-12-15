import { Slider } from '@mui/material'
import React from 'react'
import {    MdPublish } from 'react-icons/md'

import Header from '../../../Components/Admin/Header/Header'
import Sidebar from '../../../Components/Admin/Sidebar/Sidebar'
import './newpayment.css'
function NewPayment() {
    return (
        <div>
        <Header/>
<div className="container">
<Sidebar/>
<div className='newUser'>
<h1 className='newUserTitle'>New Payment</h1>
  <form className='newUserForm'>
 
   

    
    
    <div className='newUserItem'>
<label>Payment Method </label>
<select className='newUserSelect' name="active" id="active">
    <option value="cash">Cash</option>
    <option value="credit">Credit Card</option>
    <option value="door">Pay At The Door</option>
</select>
</div>
<div className='newUserItem'>
<label>Payment Available </label>
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

export default NewPayment
