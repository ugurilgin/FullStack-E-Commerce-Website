import {React,useState,useEffect} from 'react'
import Header from '../../../Components/Admin/Header/Header'
import Sidebar from '../../../Components/Admin/Sidebar/Sidebar'
import './orderlist.css'
import { DataGrid } from '@mui/x-data-grid';
import {RiDeleteBin6Line,RiEditLine} from 'react-icons/ri'
import { Link } from 'react-router-dom';


function OrderList() {
  const [data,setData] = useState()
  useEffect(() => {
    fetchMyPosts();
  }, []);
  const fetchMyPosts = async () => {
    const response = await fetch("https://localhost:44324/api/Orders/");
    const json = await response.json();

    setData(json);
  };
  if (!data) return <h3>...Loading</h3>;
    const handleDelete=(id)=>{
        setData(data.filter(item => item.orderId !==id));
        fetch('https://localhost:44324/api/Orders/' + id, {
          method: 'DELETE',
        })
        .then(res => res.text()) // or res.json()
        .then(res => console.log(res))
    };
    const columns = [
        { field: 'id', headerName: 'ID', width: 15 },
        
        { field: 'customerFullName', headerName: 'customerFullName',width: 75 },
        { field: 'customerEmail', headerName: 'customerEmail', width: 90 },
        { field: 'adress', headerName: 'adress', width: 100 },
        { field: 'city', headerName: 'city', width: 70 },
        { field: 'state', headerName: 'state', width: 95 },
        { field: 'zip', headerName: 'zip',  width: 95 },
        { field: 'shipperID', headerName: 'shipperID',width: 80 },
        { field: 'shipperName', headerName: 'shipperName',width: 120 },
        { field: 'paymentID', headerName: 'paymentID',width: 80 },
        { field: 'paymentName', headerName: 'paymentName',width: 120 },
        { field: 'total', headerName: 'Total',width: 120 },
       
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
