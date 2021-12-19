
import {React,useState,useEffect} from 'react'
import { BsBasket, BsCalendar, BsCurrencyDollar, BsNewspaper, BsPhone } from 'react-icons/bs'
import {  IoColorFill, IoHomeOutline } from 'react-icons/io5'
import {   MdDescription, MdOutlineEmail, MdPermIdentity, MdPublish } from 'react-icons/md'
import { RiFontSize, RiTrademarkFill } from 'react-icons/ri'
import { Link, useParams } from 'react-router-dom'
import Header from '../../../Components/Admin/Header/Header'
import Sidebar from '../../../Components/Admin/Sidebar/Sidebar'
import './shippers.css'
function Shipper() {
    const params = useParams();
    const [data,setData] = useState()
    const [formValue, setformValue] = useState(
        {
            companyName: '',
            phone: ''
          }
    );

  useEffect(() => {
    fetchMyPosts();
  }, []);
  const fetchMyPosts = async () => {
    const response = await fetch("https://localhost:44324/api/Shippers/"+params.shipperId);
    const json = await response.json();

    setData(json);
    setformValue({
        companyName: json.companyName,
        phone: json.phone
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
                "shipperId": params.shipperId,
                "companyName": formValue.companyName,
                "phone": formValue.phone
              })
        };
        fetch('https://localhost:44324/api/Shippers/' + params.shipperId, requestOptions)
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
    <h1 className="userTitle">Edit Shipper</h1>
    <Link to="/admin-newShipper">
    <button className="productAddButton">Create New Shipper</button>
    </Link>
    </div>
<div className="productContainer">
    <div className="productShow">
<div className='productShowTop'>
<div className='productShowTopTitle'>
<span className='userShowUsername'>Shipper Adı</span>
</div>
</div>
<div className='userShowBottom'>
<span className='userShowTitle'>Info</span>

</div>
<br/>
<div className='userShowInfo'>
<BsNewspaper className='userShowIcon'/>
<span className='userShowInfoTitle'>{data.companyName}</span>

</div>
<div className='userShowInfo'>
<BsPhone className='userShowIcon'/>
<span className='userShowInfoTitle'>{data.phone}</span>

</div>




   
   
   
   
    </div>
<div className="productUpdate">
<span className='userUpdateTitle'>Edit</span>
<form className='userUpdateForm' onSubmit={handleSubmit}>
    <div className='userUpdateLeft'>
      
    <div className='userUpdateItem'>
    <label>CompanyName</label>
    <input type="text" placeholder='Company' name='companyName'  value={formValue.companyName}
        onChange={handleChange}/>
    </div>
    <div className='userUpdateItem'>
    <label>Phone</label>
    <input type="tel" placeholder='05555' name="phone" value={formValue.phone}
        onChange={handleChange}/>
    </div>
    <br/>
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

export default Shipper

