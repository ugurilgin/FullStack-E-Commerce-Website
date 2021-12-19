import React from 'react'
import { BsBasket, BsFileMinus, BsPlusCircle, BsTrash } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import {useCart} from "react-use-cart"
import './cart.css'
function Cart() {
  const{items,cartTotal,emptyCart, productID,picture,productName,quantity,price,totalUniqueItems,totalitems,updateItemQuantity,removeItem}=useCart();
  return (
    <>
  <div className='cart-container'>
    <h1><BsBasket/> Cart Area</h1>
<div className="inside">
<div className='cart-column'>
<h5>Cart ({totalUniqueItems}) total items: ({totalitems})</h5>
<table className='table'>
<tbody>
  {items.map((item,index)=>{
   return(
    <tr key={index}>
     <td> <img src={item.picture} style={{height:'6rem'}} /></td>
     <td>{item.productName} </td>
     <td>${item.price} </td>
     <td>Quantity {item.quantity} </td>
     <td>
       <button className="minus-cart" onClick={()=>updateItemQuantity(item.id,item.quantity-1)}> < BsFileMinus className="minus-cart-icon"/> </button>
       <button className="plus-cart"  onClick={()=>updateItemQuantity(item.id,item.quantity+1)}> <BsPlusCircle className="plus-cart-icon"/> </button>
       <button className="remove-cart"  onClick={()=>removeItem(item.id)}><BsTrash className="remove-cart-icon"/></button>
     </td>
    </tr>
    )
  })}
</tbody>
</table>
</div>

</div>
<div>
  <h2>Total Price: {cartTotal}</h2>
</div>
<div>
  <Link to="/checkout/">
  <button className='buycart'>Buy Now</button>
  </Link>
  <button className='clearcart'  onClick={()=>emptyCart()}>Clear Cart</button>
</div>
  </div>
    </>
  )
}

export default Cart
