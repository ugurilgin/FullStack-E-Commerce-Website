import {React,useState} from 'react'
import Header from '../../../Components/Admin/Header/Header'
import Sidebar from '../../../Components/Admin/Sidebar/Sidebar'
import './productlist.css'
import { DataGrid } from '@mui/x-data-grid';
import {RiDeleteBin6Line,RiEditLine} from 'react-icons/ri'
import { Link } from 'react-router-dom';


  
  const rows = [
    { id: 1,Picture:'https://drive.google.com/uc?export=view&id=1r_gBnfOpUHzmILerFzBeG_l7zY9QzOt4', Name: 'Uğur', Surname: 'Ilgın', BirthDate: '12/06/2021', Email: 'me@ugurilgin.com', Username: 'Snow', Password: '12/06/2021', IsAdmin: 1, ReadOrders: 1, WriteOrders: 1, ReadProducts: 1, WriteProducts: 1, ReadCategories: 1,WriteCategories: 1, ReadUsers: 1, WriteUsers: 1, Cookies: "fsfsfs5sdsf" },
    { id: 2, Name: 'Uğur', Surname: 'Ilgın', BirthDate: '12/06/2021', Email: 'me@ugurilgin.com', Username: 'Snow', Password: '12/06/2021', IsAdmin: 1, ReadOrders: 1, WriteOrders: 1, ReadProducts: 1, WriteProducts: 1, ReadCategories: 1,WriteCategories: 1, ReadUsers: 1, WriteUsers: 1, Cookies: "fsfsfs5sdsf" },
    { id: 3, Name: 'Uğur', Surname: 'Ilgın', BirthDate: '12/06/2021', Email: 'me@ugurilgin.com', Username: 'Snow', Password: '12/06/2021', IsAdmin: 1, ReadOrders: 1, WriteOrders: 1, ReadProducts: 1, WriteProducts: 1, ReadCategories: 1,WriteCategories: 1, ReadUsers: 1, WriteUsers: 1, Cookies: "fsfsfs5sdsf" },
    { id: 4, Name: 'Uğur', Surname: 'Ilgın', BirthDate: '12/06/2021', Email: 'me@ugurilgin.com', Username: 'Snow', Password: '12/06/2021', IsAdmin: 1, ReadOrders: 1, WriteOrders: 1, ReadProducts: 1, WriteProducts: 1, ReadCategories: 1,WriteCategories: 1, ReadUsers: 1, WriteUsers: 1, Cookies: "fsfsfs5sdsf" },
    { id: 5, Name: 'Uğur', Surname: 'Ilgın', BirthDate: '12/06/2021', Email: 'me@ugurilgin.com', Username: 'Snow', Password: '12/06/2021', IsAdmin: 1, ReadOrders: 1, WriteOrders: 1, ReadProducts: 1, WriteProducts: 1, ReadCategories: 1,WriteCategories: 1, ReadUsers: 1, WriteUsers: 1, Cookies: "fsfsfs5sdsf" },
    { id: 6, Name: 'Uğur', Surname: 'Ilgın', BirthDate: '12/06/2021', Email: 'me@ugurilgin.com', Username: 'Snow', Password: '12/06/2021', IsAdmin: 1, ReadOrders: 1, WriteOrders: 1, ReadProducts: 1, WriteProducts: 1, ReadCategories: 1,WriteCategories: 1, ReadUsers: 1, WriteUsers: 1, Cookies: "fsfsfs5sdsf" },
    { id: 7, Name: 'Uğur', Surname: 'Ilgın', BirthDate: '12/06/2021', Email: 'me@ugurilgin.com', Username: 'Snow', Password: '12/06/2021', IsAdmin: 1, ReadOrders: 1, WriteOrders: 1, ReadProducts: 1, WriteProducts: 1, ReadCategories: 1,WriteCategories: 1, ReadUsers: 1, WriteUsers: 1, Cookies: "fsfsfs5sdsf" },
    { id: 8, Name: 'Uğur', Surname: 'Ilgın', BirthDate: '12/06/2021', Email: 'me@ugurilgin.com', Username: 'Snow', Password: '12/06/2021', IsAdmin: 1, ReadOrders: 1, WriteOrders: 1, ReadProducts: 1, WriteProducts: 1, ReadCategories: 1,WriteCategories: 1, ReadUsers: 1, WriteUsers: 1, Cookies: "fsfsfs5sdsf" },
    { id: 9, Name: 'Uğur', Surname: 'Ilgın', BirthDate: '12/06/2021', Email: 'me@ugurilgin.com', Username: 'Snow', Password: '12/06/2021', IsAdmin: 1, ReadOrders: 1, WriteOrders: 1, ReadProducts: 1, WriteProducts: 1, ReadCategories: 1,WriteCategories: 1, ReadUsers: 1, WriteUsers: 1, Cookies: "fsfsfs5sdsf" },
  ];
 

function ProductList() {
    const [data,setData] = useState(rows)
    const handleDelete=(id)=>{
        setData(data.filter(item => item.id !==id));
    };
    const columns = [
        { field: 'id', headerName: 'ID', width: 15 },
        { field: 'Picture', headerName: 'Picture', width: 10 ,renderCell:(params)=>{
    
            return(<div className="productListUser">
    <img className="productListImg" src={params.row.avatar}/>
    
            </div>)
        }},
        { field: 'CategoryID', headerName: 'CategoryID',width: 75 },
        { field: 'ProductName', headerName: 'ProductName', width: 90 },
        { field: 'ProductDescription', headerName: 'ProductDescription', width: 100 },
        { field: 'TradeMark', headerName: 'TradeMark', width: 70 },
        { field: 'Model', headerName: 'Model', width: 95 },
        { field: 'Quantity', headerName: 'Quantity',  width: 95 },
        { field: 'Price', headerName: 'Price',width: 80 },
        { field: 'AvailableSize', headerName: 'AvailableSize',width: 120 },
        { field: 'AvailableColor', headerName: 'AvailableColor',width: 120 },
        { field: 'Size', headerName: 'Size',width: 120 },
        { field: 'Color', headerName: 'Color',width: 120 },
        { field: 'Discount', headerName: 'Discount',width: 130 },
        { field: 'ProductAvailable', headerName: 'ProductAvailable',type:'bool',width: 130 },
        { field: 'DiscountAvailable', headerName: 'DiscountAvailable',type:'bool',width: 100 },
        { field: 'UnitInStock', headerName: 'UnitInStock',type:'int',width: 100 },
        { field: 'Ranking', headerName: 'Ranking',type:'int',width: 100 },
        { field: 'Picture', headerName: 'Picture',width: 100 },
        { field: 'Note', headerName: 'Note',width: 100 },
        { field: 'IsBannerShow', headerName: 'IsBannerShow',type:'int',width: 100 },
        { field: 'createDate', headerName: 'createDate Date',type:'date', width: 100 },
        { field: 'updateDate', headerName: 'updateDate',type:'date', width: 100 },
    {field:"action",headerName:"Action",width:150,renderCell:(params)=>{
    return(
        <>
        <Link to={'/admin-products/'+params.row.id}>
        <RiEditLine className="productListEdit"/>
        </Link>
         <RiDeleteBin6Line className="productListDelete" onClick={()=>handleDelete(params.row.id)}/>
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
