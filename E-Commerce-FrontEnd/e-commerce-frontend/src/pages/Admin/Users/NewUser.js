import { Slider } from '@mui/material'
import React from 'react'
import Header from '../../../Components/Admin/Header/Header'
import Sidebar from '../../../Components/Admin/Sidebar/Sidebar'
import './newuser.css'
function NewUser() {
    const [formValue, setformValue] = React.useState({
        name: '',
        surname: '',
        birthDate: '',
        email:'',
        userName:'',
        password:'',
        isAdmin:'Yes',
        readOrders:'Yes',
        writeOrders:'Yes',
        readProducts:'Yes',
        writeProducts:'Yes',
        readCategories:'Yes',
        writeCategories:'Yes',
        readUsers:'Yes',
        writeUsers:'Yes',
        cookies: ''
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
                "id": 0,
                    "createDate": "2021-12-18T14:46:41.278Z",
                    "updateDate": "2021-12-18T14:46:41.278Z",
                    "name": formValue.name,
                    "surname": formValue.surname,
                    "birthDate": formValue.birthDate,
                    "email": formValue.email,
                    "userName":formValue.userName,
                    "password": formValue.password,
                    "isAdmin":  formValue.isAdmin==='Yes'?true:false,
                    "readOrders":  formValue.readOrders==='Yes'?true:false,
                    "writeOrders":  formValue.writeOrders==='Yes'?true:false,
                    "readProducts":  formValue.readProducts==='Yes'?true:false,
                    "writeProducts":  formValue.writeProducts==='Yes'?true:false,
                    "readCategories":  formValue.readCategories==='Yes'?true:false,
                    "writeCategories":  formValue.writeCategories==='Yes'?true:false,
                    "readUsers":  formValue.readUsers==='Yes'?true:false,
                    "writeUsers":  formValue.writeUsers==='Yes'?true:false,
                    "cookies": formValue.cookies
              })
        };
        fetch('https://localhost:44324/api/Users/', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));
        
      }
    return (
        <div>
        <Header/>
<div className="container">
<Sidebar/>
<div className='newUser'>
<h1 className='newUserTitle'>New User</h1>
<form className='newUserForm'  onSubmit={handleSubmit} >
<div className='newUserItem'>
    <label>Name</label>
    <input name='name' type="text" placeholder='Name' value={formValue.name}
        onChange={handleChange}/>
    </div>
    <div className='newUserItem'>
    <label>Surname</label>
    <input name='surname' type="text" placeholder='Surname' value={formValue.surname}
        onChange={handleChange}/>
    </div>
    <div className='newUserItem'>
    <label>BirthDate</label>
    <input name='birthDate' type="text" placeholder='01/01/2022' value={formValue.birthDate}
        onChange={handleChange}/>
    </div>
    <div className='newUserItem'>
    <label>E-Mail</label>
    <input name='email' type="text" placeholder='Email' value={formValue.email}
        onChange={handleChange}/>
    </div>
    <div className='newUserItem'>
    <label>UserName</label>
    <input name='userName' type="text" placeholder='Username' value={formValue.userName}
        onChange={handleChange}/>
    </div>
    <div className='newUserItem'>
    <label>Password</label>
    <input name='password' type="text" placeholder='password' value={formValue.password}
        onChange={handleChange}/>
    </div>


    <div className='newUserItem'>
<label>Is Admin</label>
<select className='newUserSelect' name="isAdmin" id="isAdmin" value={formValue.isAdmin}
        onChange={handleChange}>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
</select>
</div>

<div className='newUserItem'>
<label>Read Orders</label>
<select className='newUserSelect' name="readOrders" id="readOrders" value={formValue.readOrders}
        onChange={handleChange}>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
</select>
</div>

<div className='newUserItem'>
<label>Write Orders</label>
<select className='newUserSelect' name="writeOrders" id="writeOrders" value={formValue.writeOrders}
        onChange={handleChange}>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
</select>
</div>

<div className='newUserItem'>
<label>Read Products</label>
<select className='newUserSelect' name="readProducts" id="readProducts" value={formValue.readProducts}
        onChange={handleChange}>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
</select>
</div>

<div className='newUserItem'>
<label>Write Products</label>
<select className='newUserSelect' name="writeProducts" id="writeProducts" value={formValue.writeProducts}
        onChange={handleChange}>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
</select>
</div>

<div className='newUserItem'>
<label>Read  Categories</label>
<select className='newUserSelect' name="readCategories" id="readCategories" value={formValue.readCategories}
        onChange={handleChange}>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
</select>
</div>

<div className='newUserItem'>
<label>Write Categories</label>
<select className='newUserSelect' name="writeCategories" id="writeCategories" value={formValue.writeCategories}
        onChange={handleChange}>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
</select>
</div>


<div className='newUserItem'>
<label>Read Users</label>
<select className='newUserSelect' name="readUsers" id="readUsers" value={formValue.readUsers}
        onChange={handleChange}>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
</select>
</div>

<div className='newUserItem'>
<label>Write Users</label>
<select className='newUserSelect' name="writeUsers" id="writeUsers" value={formValue.writeUsers}
        onChange={handleChange}>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
</select>
</div>

<div className='newUserItem'>
    <label>Auth Cookies</label>
    <input name='cookies' type="text" placeholder='cookies' value={formValue.cookies}
        onChange={handleChange}/>
    </div>
<button type="submit" className='newUserButton'>Create</button>
</form>

   </div> 
</div>
       
            
        </div>
    )
}

export default NewUser
