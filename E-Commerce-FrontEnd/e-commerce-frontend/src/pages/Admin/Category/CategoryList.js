import {React,useState} from 'react'
import Header from '../../../Components/Admin/Header/Header'
import Sidebar from '../../../Components/Admin/Sidebar/Sidebar'
import './categoryList.css'
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
 

function CategoryList() {
    const [data,setData] = useState(rows)
    const handleDelete=(id)=>{
        setData(data.filter(item => item.id !==id));
    };
    const columns = [
        { field: 'id', headerName: 'ID', width: 15 },
        { field: 'Picture', headerName: 'Picture', width: 80 ,renderCell:(params)=>{
    
            return(<div className="productListUser">
    <img className="productListImg" src={params.row.avatar}/>
    
            </div>)
        }},
        { field: 'CategoryName', headerName: 'CategoryName',width: 155 },
        { field: 'Description', headerName: 'Description', width: 190 },
        { field: 'Active', headerName: 'Active', width: 100 },
    {field:"action",headerName:"Action",width:150,renderCell:(params)=>{
    return(
        <>
        <Link to={'/admin-categories/'+params.row.id}>
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
    <h3 className="title"> Category List Table</h3>
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


export default CategoryList
