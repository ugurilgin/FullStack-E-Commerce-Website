import {React,useState,useEffect} from 'react'
import Header from '../../../Components/Admin/Header/Header'
import Sidebar from '../../../Components/Admin/Sidebar/Sidebar'
import './userlist.css'
import { DataGrid } from '@mui/x-data-grid';
import {RiDeleteBin6Line,RiEditLine} from 'react-icons/ri'
import { Link } from 'react-router-dom';


 

function UserList() {
    const [data,setData] = useState()
    useEffect(() => {
      fetchMyPosts();
    }, []);
    const fetchMyPosts = async () => {
      const response = await fetch("https://localhost:44324/api/Users/");
      const json = await response.json();
  
      setData(json);
    };
    const handleDelete=(id)=>{
        setData(data.filter(item => item.id !==id));
        fetch('https://localhost:44324/api/Users/' + id, {
          method: 'DELETE',
        })
        .then(res => res.text()) // or res.json()
        .then(res => console.log(res))
    };
    const columns = [
        { field: 'id', headerName: 'ID', width: 15 },
        { field: 'avatar', headerName: 'Avatar', width: 10 ,renderCell:(params)=>{
    
            return(<div className="userListUser">
    <img className="userListImg" src={params.row.avatar}/>
    
            </div>)
        }},
        { field: 'name', headerName: 'Name', width: 75 },
        { field: 'surname', headerName: 'Surname', width: 90 },
        { field: 'birthDate', headerName: 'Birth Date',type:'date', width: 100 },
        { field: 'email', headerName: 'Email', width: 70 },
        { field: 'username', headerName: 'Username', width: 95 },
        { field: 'password', headerName: 'Password', width: 95 },
        { field: 'isAdmin', headerName: 'IsAdmin',type:'bool',width: 80 },
        { field: 'readOrders', headerName: 'ReadOrders',type:'bool',width: 120 },
        { field: 'writeOrders', headerName: 'WriteOrders',type:'bool',width: 120 },
        { field: 'readProducts', headerName: 'ReadProducts',type:'bool',width: 120 },
        { field: 'writeProducts', headerName: 'WriteProducts',type:'bool',width: 120 },
        { field: 'readCategories', headerName: 'ReadCategories',type:'bool',width: 130 },
        { field: 'writeCategories', headerName: 'WriteCategories',type:'bool',width: 130 },
        { field: 'readUsers', headerName: 'ReadUsers',type:'bool',width: 100 },
        { field: 'writeUsers', headerName: 'WriteUsers',type:'bool',width: 100 },
        
    {field:"action",headerName:"Action",width:150,renderCell:(params)=>{
    return(
        <>
        <Link to={'/admin-users/'+params.row.id}>
        <RiEditLine className="userListEdit"/>
        </Link>
         <RiDeleteBin6Line className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
    </>
    )
    }},
       
      ];

  
    return (
        <div>
        <Header/>
<div className="container">
<Sidebar/>
<div className="userList">
    <h3 className="title"> User List Table</h3>
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


export default UserList
