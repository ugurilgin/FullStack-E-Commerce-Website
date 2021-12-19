import {React,useState,useEffect} from 'react'
import './mini-navbar.css'
function MiniNavbar(props) {
 
    return (
        <div>
            <div className="mininavbar">
           
        
  <div className="minisubnav">
    <button className="minisubnavbtn"> Shoes <i className="fa fa-caret-down"></i></button>
    <div className="minisubnav-content">
      <a href="#company">Nike</a>
      <a href="#team">Adidas</a>
      <a href="#careers">Converse</a>
      <a href="#careers">Harley Davidson</a>
    </div>
  </div> 
  <div className="minisubnav">
    <button className="minisubnavbtn"> Tshirt <i className="fa fa-caret-down"></i></button>
    <div className="minisubnav-content">
      <a href="#company">Nike</a>
      <a href="#team">Adidas</a>
      <a href="#careers">Defacto</a>
      <a href="#careers">LC Waikiki</a>
    </div>
  </div> 
  <div className="minisubnav">
    <button className="minisubnavbtn"> Shirt <i className="fa fa-caret-down"></i></button>
    <div className="minisubnav-content">
      <a href="#company">Nike</a>
      <a href="#team">Adidas</a>
      <a href="#careers">Defacto</a>
      <a href="#careers">LC Waikiki</a>
    </div>
  </div> 
  <div className="minisubnav">
    <button className="minisubnavbtn"> Hats <i className="fa fa-caret-down"></i></button>
    <div className="minisubnav-content">
      <a href="#company">Nike</a>
      <a href="#team">Adidas</a>
      <a href="#careers">Converse</a>
      <a href="#careers">Harley Davidson</a>
    </div>
  </div> 

  <div className="minisubnav">
    <button className="minisubnavbtn"> Suits <i className="fa fa-caret-down"></i></button>
    <div className="minisubnav-content">
      <a href="#company">Giorgia Armani</a>
      <a href="#team">Hugo Boss</a>
      <a href="#careers">Calvin Clain</a>
      <a href="#careers">DS Damats</a>
    </div>
  </div> 

  <div className="minisubnav">
    <button className="minisubnavbtn"> Glasses <i className="fa fa-caret-down"></i></button>
    <div className="minisubnav-content">
      <a href="#company">Rayben</a>
      <a href="#team">Adidas</a>
      <a href="#careers">Converse</a>
      <a href="#careers">Lewis</a>
      <a href="#careers">Giorgia Armani</a>
      <a href="#careers">Hugo Boss</a>
    </div>
  </div> 


  <div className="minisubnav">
    <button className="minisubnavbtn"> Pants <i className="fa fa-caret-down"></i></button>
    <div className="minisubnav-content">
      <a href="#company">Nike</a>
      <a href="#team">Adidas</a>
      <a href="#careers">Converse</a>
      <a href="#careers">Harley Davidson</a>
    </div>
  </div> 
  
</div>


        </div>
    )
}

export default MiniNavbar
