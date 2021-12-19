import { Slider } from '@mui/material'
import React from 'react'
import {    MdPublish } from 'react-icons/md'

import Header from '../../../Components/Admin/Header/Header'
import Sidebar from '../../../Components/Admin/Sidebar/Sidebar'
import './newcategory.css'
function NewCategory() {
    const [formValue, setformValue] = React.useState({
        categoryName: '',
        description: '',
        picture: '',
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
                "categoryId": 0,
                "categoryName": formValue.categoryName,
                "description": formValue.description,
                "picture": formValue.picture,
                "active": formValue.active==="Yes" ? true : false
              })
        };
        fetch('https://localhost:44324/api/Categories', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));
        
      }
    return (
        <div>
        <Header/>
<div className="container">
<Sidebar/>
<div className='newUser'>
<h1 className='newUserTitle'>New Category</h1>
  <form className='newUserForm'  onSubmit={handleSubmit}> 
  <div className='newUserItem'>
        <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e125b578-4173-401a-ab13-f066979c8848/air-force-1-gen%C3%A7-ayakkab%C4%B1s%C4%B1-1hqfHl.png" className='userUpdateImg'/>
       <label htmlFor="file"><MdPublish className='userUpdateIcon'/></label>
        <input type="file" id="file" style={{display:"none"}} />
        </div>
        
    <div className='newUserItem'>
    <label>Category Name</label>
    <input type="text" placeholder='Sport Shoes' name="categoryName" id="categoryName" value={formValue.categoryName} onChange={handleChange}/>
    </div>

    <div className='newUserItem'>
    <label>Description</label>
    <textarea placeholder='desc' name="description" id="description" value={formValue.description} onChange={handleChange}/>
    </div>

   
    <div className='newUserItem'>
<label>Category Available</label>
<select className='newUserSelect'  name="active" id="active"  value={formValue.active} onChange={handleChange}>
    <option value="yes">Yes</option>
    <option value="no">No</option>
</select>
</div>



<button type="submit" className='newUserButton'>Create</button>
</form>

   </div> 
</div>
       
            
        </div>
    )
}

export default NewCategory
