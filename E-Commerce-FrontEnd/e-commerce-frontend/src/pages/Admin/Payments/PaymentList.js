import {React,useState,useEffect} from 'react'
import Header from '../../../Components/Admin/Header/Header'
import Sidebar from '../../../Components/Admin/Sidebar/Sidebar'
import './paymentlist.css'
import { DataGrid } from '@mui/x-data-grid';
import {RiDeleteBin6Line,RiEditLine} from 'react-icons/ri'
import { Link } from 'react-router-dom';


  


function PaymentList() {
  const [data,setData] = useState()
  useEffect(() => {
    fetchMyPosts();
  }, []);
  const fetchMyPosts = async () => {
    const response = await fetch("https://localhost:44324/api/Payments/");
    const json = await response.json();

    setData(json);
  };
 
    const handleDelete=(id)=>{
        setData(data.filter(item => item.paymentId !==id));
        fetch('https://localhost:44324/api/Payments/' + id, {
          method: 'DELETE',
        })
        .then(res => res.text()) // or res.json()
        .then(res => console.log(res))
    };
    if (!data) return <h3>...Loading</h3>;
    const columns = [
        { field: 'paymentId', headerName: 'ID', width: 15 },
       
        { field: 'paymentType', headerName: 'PaymentType',width: 175 },
        
        { field: 'allowed', headerName: 'Allowed',type:'date', width: 100 },
    {field:"action",headerName:"Action",width:150,renderCell:(params)=>{
    return(
        <>
        <Link to={'/admin-payments/'+params.row.paymentId}>
        <RiEditLine className="productListEdit"/>
        </Link>
         <RiDeleteBin6Line className="productListDelete" onClick={()=>handleDelete(params.row.paymentId)}/>
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
    <h3 className="title"> Payment List Table</h3>
<div className="table" style={{ height: 570, width: '100%' }}>      
<DataGrid
 getRowId={(data) => data.paymentId}

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


export default PaymentList
