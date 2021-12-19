import { Slider } from '@mui/material'
import React from 'react'
import {    MdPublish } from 'react-icons/md'

import Header from '../../../Components/Admin/Header/Header'
import Sidebar from '../../../Components/Admin/Sidebar/Sidebar'
import './newproduct.css'
function NewProduct() {
    const [formValue, setformValue] = React.useState({
        productName: '',
        categoryID: 0,
        productDescription: '',
        tradeMark:'',
        model:'',
        quantity:0,
        price:0,
        availableSize:'',
        availableColor:'',
        size:'',
        color:'',
        discount:'',
        ranking:'',
        picture:'',
        note:'',
        unitinstock:'',
        productAvailable:'Yes',
        discountAvailable:'Yes',
        isBannerShow: 'Yes'
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
                "productID": 0,
                "categoryID":formValue.categoryID,
                "productName":formValue.productName,
                "productDescription":formValue.productDescription,
                "tradeMark":formValue.tradeMark,
                "model":formValue.model,
                "quantity":formValue.quantity,
                "price":formValue.price,
                "availableSize":formValue.availableSize,
                "availableColor":formValue.availableColor,
                "size":formValue.size,
                "color":formValue.color,
                "discount":formValue.discount,
                "productAvailable":formValue.productAvailable ==="Yes" ? true : false,
                "discountAvailable":formValue.discountAvailable ==="Yes" ? true : false,
                "unitInStock":formValue.unitinstock,
                "ranking":formValue.ranking,
                "picture":formValue.picture,
                "note":formValue.note,
                "isBannerShow":formValue.isBannerShow ==="Yes" ? true : false
              })
        };
        fetch('https://localhost:44324/api/Products/', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));
        
      }
    return (
        <div>
        <Header/>
<div className="container">
<Sidebar/>
<div className='newUser'>
<h1 className='newUserTitle'>New Product</h1>
  <form className='newUserForm' onSubmit={handleSubmit}> 
  <div className='newUserItem'>
<img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e125b578-4173-401a-ab13-f066979c8848/air-force-1-gen%C3%A7-ayakkab%C4%B1s%C4%B1-1hqfHl.png" className='userUpdateImg'/>
       <label htmlFor="file"><MdPublish className='userUpdateIcon'/></label>
        <input type="file" id="file" style={{display:"none"}} />
        </div>
    <div className='newUserItem'>
    <label>Product Name</label>
    <input type="text" name="productName" placeholder='Sport Shoes' value={formValue.productName} onChange={handleChange}/>
    </div>
    <div className='newUserItem'>
    <label>Category ID</label>
    <input type="text"  name="categoryID" placeholder='2' value={formValue.categoryID} onChange={handleChange}/>
    </div>
    <div className='newUserItem'>
    <label>Descryption</label>
    <textarea placeholder='desc' name="productDescription" value={formValue.productDescription} onChange={handleChange}/>
    </div>

    <div className='newUserItem'>
    <label>TradeMark</label>
    <input type="text" name="tradeMark" placeholder='Nike' value={formValue.tradeMark} onChange={handleChange}/>
    </div>
    <div className='newUserItem'>
    <label>Model</label>
    <input type="text" name="model" placeholder='2021 First' value={formValue.model} onChange={handleChange}/>
    </div>
    <div className='newUserItem'>
    <label>Quentity</label>
    <input type="number" name="quantity" placeholder='10' value={formValue.quantity} onChange={handleChange}/>
    </div>

    <div className='newUserItem'>
    <label>Available Size</label>
    <input type="text" name="availableSize"  placeholder='L' value={formValue.availableSize} onChange={handleChange}/>
    </div>
    
    <div className='newUserItem'>
    <label>Available Color</label>
    <input type="text" name="availableColor" placeholder='Blue ' value={formValue.availableColor} onChange={handleChange}/>
    </div>
    <div className='newUserItem'>
    <label> Size</label>
    <input type="text" name="size" placeholder='L' value={formValue.size} onChange={handleChange}/>
    </div>
    
    <div className='newUserItem'>
    <label> Color</label>
    <input type="text" name="color" placeholder='Blue' value={formValue.color} onChange={handleChange}/>
    </div>

    <div className='newUserItem'>
    <label>Discount</label>
    <input type="number"  name="discount" placeholder='12,12' value={formValue.discount} onChange={handleChange}/>
    </div>
    
    <div className='newUserItem'>
<label>Product Available</label>
<select className='newUserSelect' name="productAvailable" id="productAvailable" value={formValue.productAvailable} onChange={handleChange}>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
</select>
</div>

<div className='newUserItem'>
<label>Discount Available</label>
<select className='newUserSelect' name="discountAvailable" id="discountAvailable" value={formValue.discountAvailable} onChange={handleChange}>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
</select>
</div>
<div className='newUserItem'>
    <label>Unit In Stock</label>
    <input type="text" name="unitinstock" placeholder='5' value={formValue.unitinstock} onChange={handleChange}/>
    </div>
<div className='newUserItem'>
    <label>Price</label>
    <input type="number" name="price" step="0.01" placeholder='12,12' value={formValue.price} onChange={handleChange}/>
    </div>
<div className='newUserItem'>
    <label>Ranking</label>
    <input type="text" name="ranking" placeholder='3.04' value={formValue.ranking} onChange={handleChange}/>
    </div>
   
    <div className='newUserItem'>
    <label>Note</label>
    <textarea placeholder='Note' name="note" value={formValue.note} onChange={handleChange}/>
    </div>
<div className='newUserItem'>
<label>Is Banner</label>
<select className='newUserSelect' name="isBannerShow" id="isBannerShow" value={formValue.isBannerShow} onChange={handleChange}>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
</select>
</div>
<button type="submit" className='newUserButton'>Create</button>
</form>

   </div> 
</div>
       
            
        </div>
    )
}

export default NewProduct
