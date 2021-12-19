import {React,useState,useEffect} from 'react'
import { useCart } from 'react-use-cart';
import Header from '../Header/Header'
import './checkoutreview.css'
function CheckOutReview() {
  const{items,cartTotal,emptyCart, productID,picture,productName,quantity,price,totalUniqueItems,totalitems,updateItemQuantity,removeItem}=useCart();
  const [payments, setPayments] = useState();
 
  const [shippers, setShippers] = useState();
  const [paymentsID, setPaymentsID] = useState();
  const [shippersID, setShippersID] = useState();
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
 
  useEffect(() => {
    fetchMyPosts();
    fetchMyShippers();
   
  }, []);
  const fetchMyPosts = async () => {
    const response = await fetch("https://localhost:44324/api/Payments/");
    const json = await response.json();

    setPayments(json);
  };
  const fetchMyShippers = async () => {
    const response = await fetch("https://localhost:44324/api/Shippers/");
    const json = await response.json();

    setShippers(json);
  };

 
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
             "id":0,
             "orderId":0,
              "customerFullName": localStorage.getItem('customerFullName'),
              "customerEmail": localStorage.getItem('customerEmail'),
              "adress": localStorage.getItem('adress'),
              "city": localStorage.getItem('city'),
              "state": localStorage.getItem('state'),
              "zip": localStorage.getItem('zip'),
              "customerID": 0,
              "products": [items],
              "shipperID": formValue.shipperID,
              "shipperName": formValue.shipperName,
              "paymentID": formValue.paymentID,
              "paymentName": formValue.paymentName,
              "billDate": localStorage.getItem('billDate'),
              "shipDate": localStorage.getItem('shipDate'),
              "total": localStorage.getItem('total'),
              "createDate":"",
              "updateDate":""
            })
      };
     
      fetch('https://localhost:44324/api/Orders/' , requestOptions)
      .then(response => response.json())
      .then(data => this.setState({ postId: data.id }));
  
    }
    if ( !payments)  return <h3>...Loading</h3>;
    if ( !shippers)  return <h3>...Loading</h3>;
    return (
        <>
        <Header/>
            <div className="checkout-row">
                <div className='checkout-row-left'>
  <div className="checkout-col-75">
    <div className="checkout-container">
     
      
        <div className="checkout-row">
          <div className="checkout-col-50">
            <h3>Billing Address</h3>
            <div> Full Name {localStorage.getItem('customerFullName')}</div>
            <div> Email {localStorage.getItem('customerEmail')}</div>
            <div> Address {localStorage.getItem('adress')}</div>
            <div> City {localStorage.getItem('city')}</div>
            <div> State {localStorage.getItem('state')}</div>
            <div> Zip {localStorage.getItem('zip')}</div>
          

            <div className="checkout-row">
              
              <div className="checkout-col-50">
               
              
              </div>
             
            </div>
          </div>

          
          
        </div>
      
      
     
    </div>
  </div>
 
  </div>
  <div className='checkout-row-right'>
    <form onSubmit={handleSubmit}>
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
  <div className="checkout-col-25">
    <div className="checkout-container">
    
    <div className='newUserItem'>
<label>Payments</label>
<select className='newUserSelect'  name="paymentName" id={formValue.paymentID}  value={formValue.paymentName} onChange={handleChange}>
   
      {payments.map((payment) => (
          
                 
            <option id={formValue.paymentID} value={payment.paymentType}>{payment.paymentType}</option>
             
             ))}
   
  
</select>
</div>
  </div>
  
  </div>
  <div className="checkout-col-25">
    <div className="checkout-container">
    <div className='newUserItem'>
<label>Shippers</label>
<select className='newUserSelect'  name="shipperName" id={formValue.shipperID}  value={formValue.shipperName} onChange={handleChange}>
   
      {shippers.map((shipper) => (
            
                 
            <option id={formValue.shipperID} value={shipper.companyName}>{shipper.companyName}</option>
             
             ))}
   
  
</select>
</div>
  </div>
  </div>
  <input type="submit" value="Complete Checkout" className="checkout-btn"/>
     </form>
      </div>

</div>
        </>
    )
}

export default CheckOutReview
    