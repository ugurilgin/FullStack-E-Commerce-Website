import {React,useState} from 'react'
import Header from '../../../Components/Admin/Header/Header'
import Sidebar from '../../../Components/Admin/Sidebar/Sidebar'
import './orderlist.css'
import { DataGrid } from '@mui/x-data-grid';
import {RiDeleteBin6Line,RiEditLine} from 'react-icons/ri'
import { Link } from 'react-router-dom';


  
  const rows = [
    { id: 1, OrderID: 'Uğur', CustomerID: 'Ilgın', ShipperID: '12/06/2021', Email: 'me@ugurilgin.com', Username: 'Snow', Password: '12/06/2021', IsAdmin: 1, ReadOrders: 1, WriteOrders: 1, ReadProducts: 1, WriteProducts: 1, ReadCategories: 1,WriteCategories: 1, ReadUsers: 1, WriteUsers: 1, Cookies: "fsfsfs5sdsf" },
    { id: 2, Name: 'Uğur', Surname: 'Ilgın', BirthDate: '12/06/2021', Email: 'me@ugurilgin.com', Username: 'Snow', Password: '12/06/2021', IsAdmin: 1, ReadOrders: 1, WriteOrders: 1, ReadProducts: 1, WriteProducts: 1, ReadCategories: 1,WriteCategories: 1, ReadUsers: 1, WriteUsers: 1, Cookies: "fsfsfs5sdsf" },
    { id: 3, Name: 'Uğur', Surname: 'Ilgın', BirthDate: '12/06/2021', Email: 'me@ugurilgin.com', Username: 'Snow', Password: '12/06/2021', IsAdmin: 1, ReadOrders: 1, WriteOrders: 1, ReadProducts: 1, WriteProducts: 1, ReadCategories: 1,WriteCategories: 1, ReadUsers: 1, WriteUsers: 1, Cookies: "fsfsfs5sdsf" },
    { id: 4, Name: 'Uğur', Surname: 'Ilgın', BirthDate: '12/06/2021', Email: 'me@ugurilgin.com', Username: 'Snow', Password: '12/06/2021', IsAdmin: 1, ReadOrders: 1, WriteOrders: 1, ReadProducts: 1, WriteProducts: 1, ReadCategories: 1,WriteCategories: 1, ReadUsers: 1, WriteUsers: 1, Cookies: "fsfsfs5sdsf" },
    { id: 5, Name: 'Uğur', Surname: 'Ilgın', BirthDate: '12/06/2021', Email: 'me@ugurilgin.com', Username: 'Snow', Password: '12/06/2021', IsAdmin: 1, ReadOrders: 1, WriteOrders: 1, ReadProducts: 1, WriteProducts: 1, ReadCategories: 1,WriteCategories: 1, ReadUsers: 1, WriteUsers: 1, Cookies: "fsfsfs5sdsf" },
    { id: 6, Name: 'Uğur', Surname: 'Ilgın', BirthDate: '12/06/2021', Email: 'me@ugurilgin.com', Username: 'Snow', Password: '12/06/2021', IsAdmin: 1, ReadOrders: 1, WriteOrders: 1, ReadProducts: 1, WriteProducts: 1, ReadCategories: 1,WriteCategories: 1, ReadUsers: 1, WriteUsers: 1, Cookies: "fsfsfs5sdsf" },
    { id: 7, Name: 'Uğur', Surname: 'Ilgın', BirthDate: '12/06/2021', Email: 'me@ugurilgin.com', Username: 'Snow', Password: '12/06/2021', IsAdmin: 1, ReadOrders: 1, WriteOrders: 1, ReadProducts: 1, WriteProducts: 1, ReadCategories: 1,WriteCategories: 1, ReadUsers: 1, WriteUsers: 1, Cookies: "fsfsfs5sdsf" },
    { id: 8, Name: 'Uğur', Surname: 'Ilgın', BirthDate: '12/06/2021', Email: 'me@ugurilgin.com', Username: 'Snow', Password: '12/06/2021', IsAdmin: 1, ReadOrders: 1, WriteOrders: 1, ReadProducts: 1, WriteProducts: 1, ReadCategories: 1,WriteCategories: 1, ReadUsers: 1, WriteUsers: 1, Cookies: "fsfsfs5sdsf" },
    { id: 9, Name: 'Uğur', Surname: 'Ilgın', BirthDate: '12/06/2021', Email: 'me@ugurilgin.com', Username: 'Snow', Password: '12/06/2021', IsAdmin: 1, ReadOrders: 1, WriteOrders: 1, ReadProducts: 1, WriteProducts: 1, ReadCategories: 1,WriteCategories: 1, ReadUsers: 1, WriteUsers: 1, Cookies: "fsfsfs5sdsf" },
  ];
 

function OrderList() {
    const [data,setData] = useState(rows)
    const handleDelete=(id)=>{
        setData(data.filter(item => item.id !==id));
    };
    const columns = [
        { field: 'id', headerName: 'ID', width: 15 },
        { field: 'OrderID', headerName: 'OrderID',width: 75 },
        { field: 'CustomerID', headerName: 'CustomerID',width: 75 },
        { field: 'ShipperID', headerName: 'ShipperID', width: 90 },
        { field: 'PaymentID', headerName: 'PaymentID', width: 100 },
        { field: 'Tax', headerName: 'Tax', width: 70 },
        { field: 'BillDate', headerName: 'BillDate', width: 95 },
        { field: 'ShipDate', headerName: 'ShipDate',  width: 95 },
        { field: 'OrderNumber', headerName: 'OrderNumber',width: 80 },
        { field: 'ShipNumber', headerName: 'ShipNumber',width: 120 },
        { field: 'Total', headerName: 'Total',width: 120 },
       
    {field:"action",headerName:"Action",width:150,renderCell:(params)=>{
    return(
        <>
        <Link to={'/admin-orders/'+params.row.id}>
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
    <h3 className="title"> Orders List Table</h3>
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


export default OrderList
