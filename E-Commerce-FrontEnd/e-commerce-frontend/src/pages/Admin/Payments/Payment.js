
import {React,useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { BsBasket, BsCalendar, BsCurrencyDollar, BsPhone } from 'react-icons/bs'
import {  IoColorFill, IoHomeOutline } from 'react-icons/io5'
import {   MdDescription, MdOutlineEmail, MdPermIdentity, MdPublish } from 'react-icons/md'
import { RiFontSize, RiTrademarkFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import Header from '../../../Components/Admin/Header/Header'
import Sidebar from '../../../Components/Admin/Sidebar/Sidebar'
import './payment.css'
function Payment() {
    const params = useParams();
    const [data,setData] = useState()
    const [formValue, setformValue] = useState(
        {
            paymentType: 'Cash',
            allowed: 'Yes'
          }
    );

  useEffect(() => {
    fetchMyPosts();
  }, []);
  const fetchMyPosts = async () => {
    const response = await fetch("https://localhost:44324/api/Payments/"+params.paymentId);
    const json = await response.json();

    setData(json);
    setformValue({
        paymentType: json.paymentType,
        allowed: json.allowed === true ? "Yes": "No"
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
                "paymentId": params.paymentId,
                "paymentType": formValue.paymentType,
                "allowed": formValue.allowed === "Yes" ? true : false
              })
        };
        fetch('https://localhost:44324/api/Payments/' + params.paymentId, requestOptions)
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
    <h1 className="userTitle">Edit Payment</h1>
    <Link to="/admin-newPayment">
    <button className="productAddButton">Create New Payment</button>
    </Link>
    </div>
<div className="productContainer">
    <div className="productShow">
<div className='productShowTop'>
<div className='productShowTopTitle'>
<span className='userShowUsername'>Payment Adı</span>
</div>
</div>
<div className='userShowBottom'>
<span className='userShowTitle'>Info</span>

</div>
<span className='userShowTitle'>Other Details</span>
<br/>
<label>Payment Method</label><br/>
    <span>{data.paymentType}</span>
    <br/>
    <label>Payment Available</label><br/>
    <span>{data.allowed === true ? "Yes": "No"}</span>




   
   
   
   
    </div>
<div className="productUpdate">
<span className='userUpdateTitle'>Edit</span>
<form className='userUpdateForm' onSubmit={handleSubmit}> 
    <div className='userUpdateLeft'>
      
        <div className='userUpdateItem'>
        <label>Payment Method</label><br/>
<select className='newUserSelect' name="paymentType" id="paymentType" value={formValue.paymentType} onChange={handleChange}>
    <option value="Cash">Cash</option>
    <option value="Credit Card">Credit Card</option>
    <option value="Pay At The Door">Pay At The Door</option>
</select>
        </div>
        <div className='userUpdateItem'>
        <label>Payment Available</label><br/>
<select className='newUserSelect' name="allowed" id="allowed" value={formValue.allowed} onChange={handleChange}>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
</select>
<br/>
<button type="submit" className='userUpdateButton'>Update</button>
        </div>
    </div>
   
</form>




</div>
</div>
        </div>

</div>
</div>  
       
    )
}

export default Payment

