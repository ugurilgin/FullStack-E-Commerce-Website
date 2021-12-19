import {React,useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import Header from '../Header/Header'
import './checkout.css'
function CheckOut() {
    const{items,cartTotal,emptyCart, productID,picture,productName,quantity,price,totalUniqueItems,totalitems,updateItemQuantity,removeItem}=useCart();
const [isclick,setClick]=useState(false);
    const [formValue, setformValue] = useState(
        {
            customerFullName: '',
            customerEmail: '',
            adress: '',
            city: '',
            state: '',
            zip: '',
            customerID: '',
            products: [],
            shipperID: '',
            products: '',
            paymentID: '',
            paymentName: '',
            billDate: '',
            shipDate: '',
            total: ''
          
          }

    );

    const handleChange = (event) => {
        setformValue({
          ...formValue,
          [event.target.name]: event.target.value
         
        });
      }

      const handleSubmit = async(event) => {
        // store the states in the form data
        localStorage.setItem('customerFullName', formValue.customerFullName);
        localStorage.setItem('customerEmail',formValue.customerEmail);
        localStorage.setItem('adress', formValue.adress);
        localStorage.setItem('city', formValue.city);
        localStorage.setItem('state', formValue.state);
        localStorage.setItem('zip', formValue.zip);
        localStorage.setItem('billDate', formValue.billDate);
        localStorage.setItem('shipDate', formValue.shipDate);
        localStorage.setItem('total', cartTotal);
        setClick(true);
        event.preventDefault();
     
        
      }
    return (
        <>
        <Header/>
            <div className="checkout-row">
                <div className='checkout-row-left'>
  <div className="checkout-col-75">
    <div className="checkout-container">
      <form onSubmit={handleSubmit}>
      
        <div className="checkout-row">
          <div className="checkout-col-50">
            <h3>Billing Address</h3>
            <label for="fname"><i className="fa fa-user"></i> Full Name</label>
            <input  className="checkout-input" type="text" placeholder='Uğur Ilgın' name="customerFullName" id="customerFullName" value={formValue.customerFullName} onChange={handleChange} required/>
            <label for="email"><i className="fa fa-envelope"></i> Email</label>
            <input className="checkout-input" type="text" id="email" name="email" placeholder="ugur@example.com" name="customerEmail" id="customerEmail" value={formValue.customerEmail} onChange={handleChange} required/>
            <label for="adr"><i className="fa fa-address-card-o"></i> Address</label>
            <input className="checkout-input" type="text" id="adr" name="address" placeholder="542 W. 15th Street" name="adress" id="adress" value={formValue.adress} onChange={handleChange} required/>
            <label for="city"><i className="fa fa-institution"></i> City</label>
            <input className="checkout-input" type="text" id="city" name="city" placeholder="New York" name="city" id="city" value={formValue.city} onChange={handleChange} required/>

            <div className="checkout-row">
              <div className="checkout-col-50">
                <label for="state">State</label>
                <input className="checkout-input" type="text" id="state" name="state" placeholder="NY" name="state" id="state" value={formValue.state} onChange={handleChange} required/>
              </div>
              <div className="checkout-col-50">
                <label for="zip">Zip</label>
                <input className="checkout-input" type="text" id="zip" name="zip" placeholder="10001"  name="zip" id="zip" value={formValue.zip} onChange={handleChange} required/>
              </div>
              <div className="checkout-col-50">
               
              
              </div>
             
            </div>
          </div>

          
          
        </div>
      
      
        <input type="submit" value="Save" className="checkout-btn"/>
      
      </form>
    </div>
  </div>
 
  </div>
  <div className='checkout-row-right'>
  <div className="checkout-col-25">
    <div className="checkout-container">
    <h4>Cart ({totalUniqueItems}) total items: ({totalitems})</h4>
      <table className='table'>
<tbody>
  {items.map((item,index)=>{
   return(
    <tr key={index}>
     <td> <img src={item.picture} style={{height:'6rem'}} /></td>
     <td>{item.productName} </td>
     <td>${item.price} </td>
     <td>Quantity {item.quantity} </td>
    
    </tr>
    )
  })}
</tbody>
</table>
      <hr/>
      <p>Total <span className="checkout-price" ><b>${cartTotal}</b></span></p>
    </div>
  </div>
  

<div>
   {(isclick)? <Link to="/checkout-review" >
  <input  value="Continue to checkout" className="checkout-btn"/>
  </Link>:""
  }
  </div>
      </div>

</div>
        </>
    )
}

export default CheckOut
    