
import {React, useState,useEffect } from 'react'
import { BsBasket, BsCalendar, BsCurrencyDollar, BsPhone } from 'react-icons/bs'
import {  IoColorFill, IoHomeOutline } from 'react-icons/io5'
import {   MdDescription, MdOutlineEmail, MdPermIdentity, MdPublish } from 'react-icons/md'
import { RiFontSize, RiTrademarkFill } from 'react-icons/ri'
import { Link, useParams } from 'react-router-dom'
import Header from '../../../Components/Admin/Header/Header'
import Sidebar from '../../../Components/Admin/Sidebar/Sidebar'
import './product.css'
function Product() {
    const params = useParams();
    const [data,setData] = useState()
    const [formValue, setformValue] = useState(
        {
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
          }
    );

  useEffect(() => {
    fetchMyPosts();
  }, []);
  const fetchMyPosts = async () => {
    const response = await fetch("https://localhost:44324/api/Products/"+params.productId);
    const json = await response.json();

    setData(json);
    setformValue({
        productName: json.productName,
        categoryID: json.categoryID,
        productDescription: json.productDescription,
        tradeMark:json.tradeMark,
        model:json.model,
        quantity:json.quantity,
        price:json.price,
        availableSize:json.availableSize,
        availableColor:json.availableColor,
        size:json.size,
        color:json.color,
        discount:json.discount,
        ranking:json.ranking,
        picture:json.picture,
        note:json.note,
        unitinstock:json.unitInStock,
        productAvailable:json.productAvailable === true ? 'Yes' : 'No',
        discountAvailable:json.discountAvailable === true ? 'Yes' : 'No',
        isBannerShow: json.isBannerShow === true ? 'Yes' : 'No'
      });
  };
  if (!data) return <h3>...Loading</h3>;


  


      const handleChange = (event) => {
        setformValue({
          ...formValue,
          [event.target.name]: event.target.value
         
        });
      }

      const handleSubmit = async() => {
        // store the states in the form data
    
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "productId": params.productId,
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
        fetch('https://localhost:44324/api/Products/' + params.productId, requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));
        
      }
    return (
        
           <div>
        <Header/>
<div className="container">
<Sidebar/>
<div className="products">
<div className="productTitleContainer">
    <h1 className="userTitle">Edit Product</h1>
    <Link to="/admin-newProduct">
    <button className="productAddButton">Create New Product</button>
    </Link>
    </div>
<div className="productContainer">
    <div className="productShow">
<div className='productShowTop'>
    <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e125b578-4173-401a-ab13-f066979c8848/air-force-1-gen%C3%A7-ayakkab%C4%B1s%C4%B1-1hqfHl.png" className='productShowImg'/>
<div className='productShowTopTitle'>
<span className='userShowUsername'>{data.productName}</span>
<span className='userShowJobTitle'>{data.tradeMark}</span>
</div>
</div>
<div className='userShowBottom'>
<span className='userShowTitle'>Info</span>
<div className='userShowInfo'>
<MdDescription className='userShowIcon'/>
<span className='userShowInfoTitle'>{data.productDescription}</span>

</div>
<div className='userShowInfo'>
<RiTrademarkFill className='userShowIcon'/>
<span className='userShowInfoTitle'>{data.tradeMark}</span>

</div>
<div className='userShowInfo'>
<BsBasket className='userShowIcon'/>
<span className='userShowInfoTitle'>{data.quantity}</span>

</div>
<div className='userShowInfo'>
<BsCurrencyDollar className='userShowIcon'/>
<span className='userShowInfoTitle'>{data.price}</span>

</div>
<div className='userShowInfo'>
<RiFontSize className='userShowIcon'/>
<span className='userShowInfoTitle'>{data.availableSize}</span>

</div>
<div className='userShowInfo'>
<IoColorFill className='userShowIcon'/>
<span className='userShowInfoTitle'>{data.availableColor}</span>

</div>
<span className='userShowTitle'>Other Details</span>
<br/>
<label>Product Available</label><br/>
<select className='newUserSelect' name="Product Available" id="Product Available" value={data.productAvailable===true? 'Yes':'No'}>
    <option value="yes">Yes</option>
    <option value="no">No</option>
</select>
<br/>
<label>Discount Available</label><br/>
<select className='newUserSelect' name="Discount Available" id="Discount Available" value={data.discountAvailable===true? 'Yes':'No'}>
    <option value="yes">Yes</option>
    <option value="no">No</option>
</select>
<br/>
<label>IsBannerShow</label><br/>
<select className='newUserSelect' name="IsBannerShow" id="IsBannerShow" value={data.isBannerShow===true? 'Yes':'No'}>
    <option value="yes">Yes</option>
    <option value="no">No</option>
</select>



    </div>
   
   
   
    </div>
<div className="productUpdate">
<span className='userUpdateTitle'>Edit</span>
<form className='userUpdateForm' onSubmit={handleSubmit}> 
    <div className='userUpdateLeft'>
        <div className='userUpdateItem'>
            <label>Product Name:</label>
            <input type="text"  className='userUpdateInput'name="productName" placeholder='Sport Shoes' value={formValue.productName} onChange={handleChange}/>
        </div>
        <div className='userUpdateItem'>
            <label>TradeMark:</label>
            <input type="text"  className='userUpdateInput' name="tradeMark" placeholder='Sport Shoes' value={formValue.tradeMark} onChange={handleChange}/>
        </div>
        <div className='userUpdateItem'>
            <label>Descrption:</label>
            <input type="text"  className='userUpdateInput' name="productDescription" placeholder='productDescription' value={formValue.productDescription} onChange={handleChange}/>
        </div>
        <div className='userUpdateItem'>
            <label>Quentity:</label>
            <input type="text" className='userUpdateInput' name="quantity" placeholder='Quantity' value={formValue.quantity} onChange={handleChange}/>
        </div>
        <div className='userUpdateItem'>
            <label>Price:</label>
            <input type="text" className='userUpdateInput' name="price" placeholder='price' value={formValue.price} onChange={handleChange}/>
        </div>
        <div className='userUpdateItem'>
            <label>Available Size:</label>
            <input type="text" className='userUpdateInput' name="availableSize" placeholder='availableSize' value={formValue.availableSize} onChange={handleChange}/>
        </div>
        <div className='userUpdateItem'>
            <label>Available Color:</label>
            <input type="text" className='userUpdateInput' name="availableColor" placeholder='availableColor' value={formValue.availableColor} onChange={handleChange}/>
        </div>
       
        <div className='userUpdateItem'>
        <label>Product Available</label><br/>
<select className='newUserSelect'  name="productAvailable"  value={formValue.productAvailable} onChange={handleChange}>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
</select>
        </div>
        <div className='userUpdateItem'>
        <label>Discount Available</label><br/>

        <select className='newUserSelect' name="discountAvailable"  value={formValue.discountAvailable} onChange={handleChange}>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
</select>
        </div>

        <div className='userUpdateItem'>
        <label>IsBannerShow</label><br/>
<select className='newUserSelect' name="isBannerShow"  value={formValue.isBannerShow} onChange={handleChange}>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
</select>
        </div>
    </div>
    <div className='userUpdateRight'>
        <div className='userUpdateUpload'>
        <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e125b578-4173-401a-ab13-f066979c8848/air-force-1-gen%C3%A7-ayakkab%C4%B1s%C4%B1-1hqfHl.png" className='userUpdateImg'/>
       <label htmlFor="file"><MdPublish className='userUpdateIcon'/></label>
        <input type="file" id="file" style={{display:"none"}} />
        </div>
        <button type="submit" className='userUpdateButton'>Update</button>
    </div>
</form>




</div>
</div>
        </div>

</div>
</div>  
       
    )
}

export default Product

