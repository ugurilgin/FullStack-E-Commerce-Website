
import {React,useEffect,useState} from 'react'
import { useParams } from "react-router-dom";

import { BsBasket, BsCalendar, BsCurrencyDollar, BsPhone } from 'react-icons/bs'
import {  IoColorFill, IoHomeOutline } from 'react-icons/io5'
import {   MdDescription, MdOutlineEmail, MdPermIdentity, MdPublish } from 'react-icons/md'
import { RiFontSize, RiTrademarkFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import Header from '../../../Components/Admin/Header/Header'
import Sidebar from '../../../Components/Admin/Sidebar/Sidebar'
import './category.css'
function Category() {
   
    const params = useParams();
    const [data,setData] = useState()
    const [formValue, setformValue] = useState(
        {
            categoryName: '',
            description: '',
            picture: '',
            active: ''
          }
    );

  useEffect(() => {
    fetchMyPosts();
  }, []);
  const fetchMyPosts = async () => {
    const response = await fetch("https://localhost:44324/api/Categories/"+params.categoryId);
    const json = await response.json();

    setData(json);
    setformValue({
        categoryName: json.categoryName,
        description: json.description,
        picture: json.picture,
        active: json.active === true ? "Yes": "No"
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
                "categoryId": params.categoryId,
                "categoryName": formValue.categoryName,
                "description": formValue.description,
                "picture": formValue.picture,
                "active": formValue.active==="Yes" ? true : false
              })
        };
        fetch('https://localhost:44324/api/Categories/' + params.categoryId, requestOptions)
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
    <h1 className="userTitle">Edit Category</h1>
    <Link to="/admin-newCategory">
    <button className="productAddButton">Create New Category</button>
    </Link>
    </div>
<div className="productContainer">
    <div className="productShow">
<div className='productShowTop'>
    <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e125b578-4173-401a-ab13-f066979c8848/air-force-1-gen%C3%A7-ayakkab%C4%B1s%C4%B1-1hqfHl.png" className='productShowImg'/>
<div className='productShowTopTitle'>
<span className='userShowUsername'>{data.categoryName}</span>

</div>
</div>
<div className='userShowBottom'>
<span className='userShowTitle'>Info</span>
<div className='userShowInfo'>
<MdDescription className='userShowIcon'/>
<span className='userShowInfoTitle'>{data.description}</span>

</div>

<span className='userShowTitle'>Other Details</span>
<br/>
<label>Category Available</label><br/><br/>
<select className='newUserSelect' name="Product Available" id="Product Available" value={data.active}>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
</select>




    </div>
   
   
   
    </div>
<div className="productUpdate">
<span className='userUpdateTitle'>Edit</span>
<form className='userUpdateForm'  onSubmit={handleSubmit}>
    <div className='userUpdateLeft'>
        <div className='userUpdateItem'>
            <label>Category Name:</label>
            <input type="text" placeholder='Category Name' className='userUpdateInput' name="categoryName" id="categoryName" value={formValue.categoryName} onChange={handleChange}/>
        </div>
        <div className='userUpdateItem'>
            <label>Descrption:</label>
            <input type="text" placeholder='description' className='userUpdateInput' name="description" id="description" value={formValue.description} onChange={handleChange}/>
        </div>
        
       
        <div className='userUpdateItem'>
        <label>Is Category Active</label><br/>
<select className='newUserSelect' name="active" id="active" name="active" id="active" value={formValue.active} onChange={handleChange}>
    <option value="Yes" >Yes</option>
    <option value="No" >No</option>
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

export default Category

