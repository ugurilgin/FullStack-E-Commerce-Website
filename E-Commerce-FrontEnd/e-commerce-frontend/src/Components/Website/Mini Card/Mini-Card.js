import React from 'react'
import { useCart } from 'react-use-cart';
import './card.css'
function MiniCard (props) {
  const {addItem}=useCart();

    return (
      <div className="mini-card">
    <img src={props.img} alt="Img" className='mini-imgProduct'/>
    <h1 className='mini-titleProduct'>{props.name}</h1>
  

   <p><button onClick={()=>addItem(props.item)}>Add to Cart</button></p>
    </div>
    )
}

export default MiniCard