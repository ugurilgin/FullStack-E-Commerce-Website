import {React,useState,useEffect} from 'react'
import Header from '../../../Components/Admin/Header/Header'
import Sidebar from '../../../Components/Admin/Sidebar/Sidebar'
import './productlist.css'
import { DataGrid } from '@mui/x-data-grid';
import {RiDeleteBin6Line,RiEditLine} from 'react-icons/ri'
import { Link } from 'react-router-dom';


function ProductList() {
  const [data,setData] = useState()
  useEffect(() => {
    fetchMyPosts();
  }, []);
  const fetchMyPosts = async () => {
    const response = await fetch("https://localhost:44324/api/Products/");
    const json = await response.json();

    setData(json);
  };
  if (!data) return <h3>...Loading</h3>;

    console.log(data);
    const handleDelete=(id)=>{
        setData(data.filter(item => item.productID !==id));
        fetch('https://localhost:44324/api/Products/' + id, {
          method: 'DELETE',
        })
        .then(res => res.text()) // or res.json()
        .then(res => console.log(res))
    };
    const columns = [
        { field: 'productID', headerName: 'ID', width: 15 },
        { field: 'picture', headerName: 'picture', width: 10 ,renderCell:(params)=>{
    
            return(<div className="productListUser">
    <img className="productListImg" src={params.row.picture}/>
    
            </div>)
        }},
        { field: 'categoryID', headerName: 'CategoryID',width: 75 },
        { field: 'productName', headerName: 'ProductName', width: 90 },
        { field: 'productDescription', headerName: 'ProductDescription', width: 100 },
        { field: 'tradeMark', headerName: 'TradeMark', width: 70 },
        { field: 'model', headerName: 'Model', width: 95 },
        { field: 'quantity', headerName: 'Quantity',  width: 95 },
        { field: 'price', headerName: 'Price',width: 80 },
        { field: 'availableSize', headerName: 'AvailableSize',width: 120 },
        { field: 'availableColor', headerName: 'AvailableColor',width: 120 },
        { field: 'size', headerName: 'Size',width: 120 },
        { field: 'color', headerName: 'Color',width: 120 },
        { field: 'discount', headerName: 'Discount',width: 130 },
        { field: 'productAvailable', headerName: 'ProductAvailable',type:'bool',width: 130 },
        { field: 'discountAvailable', headerName: 'DiscountAvailable',type:'bool',width: 100 },
        { field: 'unitInStock', headerName: 'UnitInStock',type:'int',width: 100 },
        { field: 'ranking', headerName: 'Ranking',type:'int',width: 100 },
        { field: 'picture', headerName: 'Picture',width: 100 },
        { field: 'note', headerName: 'Note',width: 100 },
        { field: 'isBannerShow', headerName: 'IsBannerShow',type:'int',width: 100 },
        { field: 'createDate', headerName: 'createDate Date',type:'date', width: 100 },
        { field: 'updateDate', headerName: 'updateDate',type:'date', width: 100 },
    {field:"action",headerName:"Action",width:150,renderCell:(params)=>{
    return(
        <>
        <Link to={'/admin-products/'+params.row.productID}>
        <RiEditLine className="productListEdit"/>
        </Link>
         <RiDeleteBin6Line className="productListDelete" onClick={()=>handleDelete(params.row.productID)}/>
    </>
    )
    }},
       
      ];

  
    return (
        <div>
        <Header/>
<div className="container">
<Sidebar/>
<div className="productList">
    <h3 className="title"> Product List Table</h3>
<div className="table" style={{ height: 570, width: '100%' }}>      
<DataGrid
        getRowId={(data) => data.productID}
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
     </div>      
        </div>

</div>
</div>  
)
}


export default ProductList
