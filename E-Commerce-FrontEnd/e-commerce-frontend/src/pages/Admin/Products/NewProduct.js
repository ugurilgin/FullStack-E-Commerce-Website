import { Slider } from '@mui/material'
import React from 'react'
import {    MdPublish } from 'react-icons/md'

import Header from '../../../Components/Admin/Header/Header'
import Sidebar from '../../../Components/Admin/Sidebar/Sidebar'
import './newproduct.css'
function NewProduct() {
    return (
        <div>
        <Header/>
<div className="container">
<Sidebar/>
<div className='newUser'>
<h1 className='newUserTitle'>New Product</h1>
  <form className='newUserForm'>
  <div className='newUserItem'>
<img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e125b578-4173-401a-ab13-f066979c8848/air-force-1-gen%C3%A7-ayakkab%C4%B1s%C4%B1-1hqfHl.png" className='userUpdateImg'/>
       <label htmlFor="file"><MdPublish className='userUpdateIcon'/></label>
        <input type="file" id="file" style={{display:"none"}} />
        </div>
    <div className='newUserItem'>
    <label>ProductName</label>
    <input type="text" placeholder='Sport Shoes'/>
    </div>

    <div className='newUserItem'>
    <label>Descryption</label>
    <textarea placeholder='desc'/>
    </div>

    <div className='newUserItem'>
    <label>TradeMark</label>
    <input type="text" placeholder='Nike'/>
    </div>

    <div className='newUserItem'>
    <label>Quentity</label>
    <input type="number" placeholder='10'/>
    </div>

    <div className='newUserItem'>
    <label>Available Size</label>
    <input type="text" placeholder='L'/>
    </div>
    
    <div className='newUserItem'>
    <label>Available Color</label>
    <input type="text" placeholder='Blue'/>
    </div>
    <div className='newUserItem'>
    <label> Size</label>
    <input type="text" placeholder='L'/>
    </div>
    
    <div className='newUserItem'>
    <label> Color</label>
    <input type="text" placeholder='Blue'/>
    </div>
<div className='newUserItem'>
    <label>Available Size</label>
    <input type="text" placeholder='L'/>
    </div>
    
    <div className='newUserItem'>
    <label>Available Color</label>
    <input type="text" placeholder='Blue'/>
    </div>
    <div className='newUserItem'>
    <label>Discount</label>
    <input type="number"  placeholder='12,12'/>
    </div>
    
    <div className='newUserItem'>
<label>Product Available</label>
<select className='newUserSelect' name="active" id="active">
    <option value="yes">Yes</option>
    <option value="no">No</option>
</select>
</div>

<div className='newUserItem'>
<label>Discount Available</label>
<select className='newUserSelect' name="active" id="active">
    <option value="yes">Yes</option>
    <option value="no">No</option>
</select>
</div>
<div className='newUserItem'>
<label>Unit In Stock</label>
<select className='newUserSelect' name="active" id="active">
    <option value="yes">Yes</option>
    <option value="no">No</option>
</select>
</div>
<div className='newUserItem'>
    <label>Price</label>
    <input type="number" step="0.01" placeholder='12,12'/>
    </div>
<div className='newUserItem'>
    <label>Ranking</label>
    <input type="text" placeholder='3.04'/>
    </div>
   
    <div className='newUserItem'>
    <label>Note</label>
    <textarea placeholder='Note'/>
    </div>
<div className='newUserItem'>
<label>Is Banner</label>
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

export default NewProduct
