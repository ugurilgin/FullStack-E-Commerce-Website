import React from 'react'
import { Link } from 'react-router-dom'
import './card.css'
import {useCart} from 'react-use-cart'

function Card (props) {
  const {addItem}=useCart();
  const id=props.id;
    return (
      <div className="card">
    <img src={props.img} alt="Img" className='imgProduct'/>
    <Link to={'/product/'+id}>
    <h1 className='titleProduct' >{props.name}</h1>
    </Link>
    <p className="price">${props.price}</p>
    <p>dfdd.</p>
   <p><button onClick={()=>addItem(props.item)}>Add to Cart</button></p>
    </div>
    )
}

export default Card