import {React,useState,useEffect} from 'react'
import Header from '../../../Components/Admin/Header/Header'
import Sidebar from '../../../Components/Admin/Sidebar/Sidebar'
import './shipperlist.css'
import { DataGrid } from '@mui/x-data-grid';
import {RiDeleteBin6Line,RiEditLine} from 'react-icons/ri'
import { Link } from 'react-router-dom';


function ShipperList() {
  const [data,setData] = useState()
  useEffect(() => {
    fetchMyPosts();
  }, []);
  const fetchMyPosts = async () => {
    const response = await fetch("https://localhost:44324/api/Shippers/");
    const json = await response.json();

    setData(json);
  };
 
    const handleDelete=(id)=>{
        setData(data.filter(item => item.shipperID !==id));
        fetch('https://localhost:44324/api/Shippers/' + id, {
  method: 'DELETE',
})
.then(res => res.text()) // or res.json()
.then(res => console.log(res))
    };
    if (!data) return <h3>...Loading</h3>;
    
    const columns = [
        { field: 'shipperID', headerName: 'ID', width: 15 },
       
        { field: 'companyName', headerName: 'CompanyName',width: 175 },
        
        { field: 'phone', headerName: 'Phone',type:'date', width: 100 },
    {field:"action",headerName:"Action",width:150,renderCell:(params)=>{
    return(
        <>
        <Link to={'/admin-shippers/'+params.row.shipperID}>
        <RiEditLine className="productListEdit"/>
        </Link>
         <RiDeleteBin6Line className="productListDelete" onClick={()=>handleDelete(params.row.shipperID)}/>
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
    <h3 className="title"> Shippers List Table</h3>
<div className="table" style={{ height: 570, width: '100%' }}>      
<DataGrid
 getRowId={(data) => data.shipperID}

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


export default ShipperList
