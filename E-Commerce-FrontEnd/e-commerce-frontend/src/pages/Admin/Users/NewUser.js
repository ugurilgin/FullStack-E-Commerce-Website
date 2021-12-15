import { Slider } from '@mui/material'
import React from 'react'
import Header from '../../../Components/Admin/Header/Header'
import Sidebar from '../../../Components/Admin/Sidebar/Sidebar'
import './newuser.css'
function NewUser() {
    return (
        <div>
        <Header/>
<div className="container">
<Sidebar/>
<div className='newUser'>
<h1 className='newUserTitle'>New User</h1>
<form className='newUserForm'>
    <div className='newUserItem'>
    <label>UserName</label>
    <input type="text" placeholder='Uğur'/>
    </div>

    <div className='newUserItem'>
    <label>Full Name</label>
    <input type="text" placeholder='Uğur Ilgın'/>
    </div>

    <div className='newUserItem'>
    <label>E-Mail</label>
    <input type="email" placeholder='me@ugurilgin.com'/>
    </div>

    <div className='newUserItem'>
    <label>Password</label>
    <input type="password" placeholder='Password'/>
    </div>

    <div className='newUserItem'>
    <label>Phone</label>
    <input type="text" placeholder='+90 555555555555'/>
    </div>
    
    <div className='newUserItem'>
    <label>Adress</label>
    <input type="text" placeholder='NY'/>
    </div>

    <div className='newUserItem'>
    <label>Gender</label>
    <div className='newUserGender'>
    <input type="radio" name="gender" id="male" value="male" />
    <label for="Male">Male</label>
    <input type="radio" name="gender" id="female" value="female" />
    <label for="Female">Female</label>
    </div>
    </div>
    <div className='newUserItem'>
<label>Active</label>
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

export default NewUser
