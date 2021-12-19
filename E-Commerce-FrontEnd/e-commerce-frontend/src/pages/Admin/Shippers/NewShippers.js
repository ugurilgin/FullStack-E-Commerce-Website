import { Slider } from '@mui/material'
import React from 'react'
import {    MdPublish } from 'react-icons/md'
import axios from 'axios';
import Header from '../../../Components/Admin/Header/Header'
import Sidebar from '../../../Components/Admin/Sidebar/Sidebar'
import './newshippers.css'
function NewShipper() {
    const [formValue, setformValue] = React.useState({
        companyName: '',
        phone: ''
      });

      const handleChange = (event) => {
        setformValue({
          ...formValue,
          [event.target.name]: event.target.value
        });
      }

      const handleSubmit = async() => {
        // store the states in the form data
        const Data = new FormData();
        Data.append("shipperID", '0')
        Data.append("companyName", formValue.companyName)
        Data.append("phone", formValue.phone)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "shipperID": 0,
                "companyName": formValue.companyName,
                "phone": formValue.phone
                
              })
        };
        fetch('https://localhost:44324/api/Shippers', requestOptions)
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
    <label>CompanyName</label>
    <input name="companyName" type="text" placeholder='Company' value={formValue.companyName}
        onChange={handleChange}/>
    </div>
    <div className='newUserItem'>
    <label>Phone</label>
    <input name="phone" type="tel" placeholder='05555'value={formValue.phone}
        onChange={handleChange}/>
    </div>
    
    



<button type="submit" className='newUserButton'>Create</button>
</form>

   </div> 
</div>
       
            
        </div>
    )
}

export default NewShipper
