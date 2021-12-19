import {React,useState,useEffect} from 'react'
import NoImage from "../../../img/noimage.png"
import Card from '../Card/Card';
import MiniNavbar from '../Card/MiniNavbar/Mini-Navbar';
import MiniCard from '../Mini Card/Mini-Card';
import './pagearea.css'
import {CartProvider} from 'react-use-cart'
import Cart from '../Carts/Cart';

function PageArea() {
    const [posts, setPosts] = useState();
  useEffect(() => {
    fetchMyPosts();
   
  }, []);
  const fetchMyPosts = async () => {
    const response = await fetch("https://localhost:44324/api/Products/");
    const json = await response.json();

    setPosts(json);
  };

  if ( (!posts))  return <h3>...Loading</h3>;
    return (
        <>
        <CartProvider>
        <MiniNavbar  />
        <Cart/>
        
             <h1>Choosen Ones For You</h1>
             <div className="blog-area">
             {posts.map((post) => (
             post.id=post.productID,
                 
             < MiniCard item={post} img={NoImage} name={post.tradeMark+ " "+post.productName}  />
             
             ))}
             </div>
             <h1>Products</h1>    
        <div className="blog-area">
          
       
       
            {posts.map((post) => (
              post.id=post.productID,
                 
                 <Card id={post.productID} item={post} img={NoImage} name={post.tradeMark+ " "+post.productName} price={post.price} />
                 
                 ))}
      
            
        </div>
      
        </CartProvider>
        </>
    )
}

export default PageArea