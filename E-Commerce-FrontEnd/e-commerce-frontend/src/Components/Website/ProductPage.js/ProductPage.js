import {React,  useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import Header from '../Header/Header'
import './product.css'


function ProductPage() {
    const {addItem}=useCart();
     const params = useParams();
    const [data,setData] = useState(
        {
            id: params.productId,
            productID:'',
            productName: '',
            categoryID: 0,
            productDescription: '',
            tradeMark:'',
            model:'',
            quantity:0,
            price:0,
            availableSize:'',
            availableColor:'',
            size:'',
            color:'',
            discount:'',
            ranking:'',
            picture:'',
            note:'',
            unitinstock:'',
            productAvailable:'Yes',
            discountAvailable:'Yes',
            isBannerShow: 'Yes'
          
          }
    );
    
  useEffect(() => {
    fetchMyPosts();
  }, []);
  const fetchMyPosts = async () => {
    const response = await fetch("https://localhost:44324/api/Products/"+params.productId);
    const json = await response.json();
   
    setData(json);
   
  };
  if (!data) return <h3>...Loading</h3>;
 

  
    return (
        <>
       
        <Header/>
        <div className="product-container">
    <div className='product-image'>
<img className='product-image-img' src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/00b4e9ef-6dc1-4c84-9569-d8b85c430371/air-max-2021-ayakkab%C4%B1s%C4%B1-jkzqGt.png"/>
    </div>

 



 <div className="product-right-column">

 
   <div className="product-description">
     
     <h1>{data.productName}</h1>
     <p>{data.productDescription}</p>
   </div>

 
   <div className="product-configuration">

   
     <div className="product-color">
       <span>Available Color</span>
    <div>{data.availableColor}</div>
       <div class="product-color-choose">
         <div>
           <input data-image="red" type="radio" id="red" name="color" value="red" checked />
           <label for="red"><span></span></label>
         </div>
         <div>
           <input data-image="blue" type="radio" id="blue" name="color" value="blue" />
           <label for="blue"><span></span></label>
         </div>
         <div>
           <input data-image="black" type="radio" id="black" name="color" value="black" />
           <label for="black"><span></span></label>
         </div>
       </div>

     </div>

    
     <div className="product-cable-config">
       <span>Available Sizes </span>

       <div className="product-cable-choose">
        <div> {data.availableSize}</div>
       </div>

      
     </div>
   </div>

   
   <div className="product-price">
     <span>{data.price}$</span>
     <a  className="product-cart-btn"  onClick={()=>addItem({data})}>Add to cart</a>
   </div>
 </div>
        </div>
       
        </>
    )
}

export default ProductPage
