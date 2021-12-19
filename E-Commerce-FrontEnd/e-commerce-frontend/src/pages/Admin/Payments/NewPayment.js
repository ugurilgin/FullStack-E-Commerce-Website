import { Slider } from '@mui/material'
import React from 'react'
import {MdPublish } from 'react-icons/md'

import Header from '../../../Components/Admin/Header/Header'
import Sidebar from '../../../Components/Admin/Sidebar/Sidebar'
import './newpayment.css'
function NewPayment() {
    const [formValue, setformValue] = React.useState({
        newPayment: 'Cash',
        active: 'Yes'
      });

      const handleChange = (event) => {
        setformValue({
          ...formValue,
          [event.target.name]: event.target.value
         
        });
      }

      const handleSubmit = async() => {
        // store the states in the form data
    
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "paymentId": 0,
                "paymentType": formValue.newPayment,
                "allowed": formValue.active==="Yes" ? true : false
              })
        };
        fetch('https://localhost:44324/api/Payments', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));
        
      }
    return (
        <div>
        <Header/>
<div className="container">
<Sidebar/>
<div className='newUser'>
<h1 className='newUserTitle'>New Payment</h1>
  <form className='newUserForm' onSubmit={handleSubmit}>    
    <div className='newUserItem'>
<label>Payment Method </label>
<select className='newUserSelect' name="newPayment" id="active" value={formValue.newPayment} onChange={handleChange}>
    <option  value="Cash">Cash</option>
    <option  value="Credit Card">Credit Card</option>
    <option  value="Pay At The Door">Pay At The Door</option>
</select>
</div>
<div className='newUserItem'>
<label>Payment Available </label>
<select className='newUserSelect' name="active" id="active"  value={formValue.active} onChange={handleChange}>
    <option value="Yes">Yes</option>
    <option value="No" >No</option>
</select>
</div>

<button type="submit" className='newUserButton'>Create</button>
</form>

   </div> 
</div>
             </div>
    )
}

export default NewPayment
