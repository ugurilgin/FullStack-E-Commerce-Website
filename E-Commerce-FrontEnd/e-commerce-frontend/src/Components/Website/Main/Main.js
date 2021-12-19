import React from 'react'
import Products from '../Products/Product'

function Main(props) {
    return (
      <div className="main flex-80">
        <Products data={props.products} />
      </div>
    );
  }
  
  export default Main;
