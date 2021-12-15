import {React,useState} from 'react'
import Header from '../../../Components/Admin/Header/Header'
import Sidebar from '../../../Components/Admin/Sidebar/Sidebar'
import './userlist.css'
import { DataGrid } from '@mui/x-data-grid';
import {RiDeleteBin6Line,RiEditLine} from 'react-icons/ri'
import { Link } from 'react-router-dom';


  
  const rows = [
    { id: 1,avatar:'https://drive.google.com/uc?export=view&id=1r_gBnfOpUHzmILerFzBeG_l7zY9QzOt4', Name: 'Uğur', Surname: 'Ilgın', BirthDate: '12/06/2021', Email: 'me@ugurilgin.com', Username: 'Snow', Password: '12/06/2021', IsAdmin: 1, ReadOrders: 1, WriteOrders: 1, ReadProducts: 1, WriteProducts: 1, ReadCategories: 1,WriteCategories: 1, ReadUsers: 1, WriteUsers: 1, Cookies: "fsfsfs5sdsf" },
    { id: 2, Name: 'Uğur', Surname: 'Ilgın', BirthDate: '12/06/2021', Email: 'me@ugurilgin.com', Username: 'Snow', Password: '12/06/2021', IsAdmin: 1, ReadOrders: 1, WriteOrders: 1, ReadProducts: 1, WriteProducts: 1, ReadCategories: 1,WriteCategories: 1, ReadUsers: 1, WriteUsers: 1, Cookies: "fsfsfs5sdsf" },
    { id: 3, Name: 'Uğur', Surname: 'Ilgın', BirthDate: '12/06/2021', Email: 'me@ugurilgin.com', Username: 'Snow', Password: '12/06/2021', IsAdmin: 1, ReadOrders: 1, WriteOrders: 1, ReadProducts: 1, WriteProducts: 1, ReadCategories: 1,WriteCategories: 1, ReadUsers: 1, WriteUsers: 1, Cookies: "fsfsfs5sdsf" },
    { id: 4, Name: 'Uğur', Surname: 'Ilgın', BirthDate: '12/06/2021', Email: 'me@ugurilgin.com', Username: 'Snow', Password: '12/06/2021', IsAdmin: 1, ReadOrders: 1, WriteOrders: 1, ReadProducts: 1, WriteProducts: 1, ReadCategories: 1,WriteCategories: 1, ReadUsers: 1, WriteUsers: 1, Cookies: "fsfsfs5sdsf" },
    { id: 5, Name: 'Uğur', Surname: 'Ilgın', BirthDate: '12/06/2021', Email: 'me@ugurilgin.com', Username: 'Snow', Password: '12/06/2021', IsAdmin: 1, ReadOrders: 1, WriteOrders: 1, ReadProducts: 1, WriteProducts: 1, ReadCategories: 1,WriteCategories: 1, ReadUsers: 1, WriteUsers: 1, Cookies: "fsfsfs5sdsf" },
    { id: 6, Name: 'Uğur', Surname: 'Ilgın', BirthDate: '12/06/2021', Email: 'me@ugurilgin.com', Username: 'Snow', Password: '12/06/2021', IsAdmin: 1, ReadOrders: 1, WriteOrders: 1, ReadProducts: 1, WriteProducts: 1, ReadCategories: 1,WriteCategories: 1, ReadUsers: 1, WriteUsers: 1, Cookies: "fsfsfs5sdsf" },
    { id: 7, Name: 'Uğur', Surname: 'Ilgın', BirthDate: '12/06/2021', Email: 'me@ugurilgin.com', Username: 'Snow', Password: '12/06/2021', IsAdmin: 1, ReadOrders: 1, WriteOrders: 1, ReadProducts: 1, WriteProducts: 1, ReadCategories: 1,WriteCategories: 1, ReadUsers: 1, WriteUsers: 1, Cookies: "fsfsfs5sdsf" },
    { id: 8, Name: 'Uğur', Surname: 'Ilgın', BirthDate: '12/06/2021', Email: 'me@ugurilgin.com', Username: 'Snow', Password: '12/06/2021', IsAdmin: 1, ReadOrders: 1, WriteOrders: 1, ReadProducts: 1, WriteProducts: 1, ReadCategories: 1,WriteCategories: 1, ReadUsers: 1, WriteUsers: 1, Cookies: "fsfsfs5sdsf" },
    { id: 9, Name: 'Uğur', Surname: 'Ilgın', BirthDate: '12/06/2021', Email: 'me@ugurilgin.com', Username: 'Snow', Password: '12/06/2021', IsAdmin: 1, ReadOrders: 1, WriteOrders: 1, ReadProducts: 1, WriteProducts: 1, ReadCategories: 1,WriteCategories: 1, ReadUsers: 1, WriteUsers: 1, Cookies: "fsfsfs5sdsf" },
  ];
 

function UserList() {
    const [data,setData] = useState(rows)
    const handleDelete=(id)=>{
        setData(data.filter(item => item.id !==id));
    };
    const columns = [
        { field: 'id', headerName: 'ID', width: 15 },
        { field: 'avatar', headerName: 'Avatar', width: 10 ,renderCell:(params)=>{
    
            return(<div className="userListUser">
    <img className="userListImg" src={params.row.avatar}/>
    
            </div>)
        }},
        { field: 'Name', headerName: 'Name', width: 75 },
        { field: 'Surname', headerName: 'Surname', width: 90 },
        { field: 'BirthDate', headerName: 'Birth Date',type:'date', width: 100 },
        { field: 'Email', headerName: 'Email', width: 70 },
        { field: 'Username', headerName: 'Username', width: 95 },
        { field: 'Password', headerName: 'Password', width: 95 },
        { field: 'IsAdmin', headerName: 'IsAdmin',type:'bool',width: 80 },
        { field: 'ReadOrders', headerName: 'ReadOrders',type:'bool',width: 120 },
        { field: 'WriteOrders', headerName: 'WriteOrders',type:'bool',width: 120 },
        { field: 'ReadProducts', headerName: 'ReadProducts',type:'bool',width: 120 },
        { field: 'WriteProducts', headerName: 'WriteProducts',type:'bool',width: 120 },
        { field: 'ReadCategories', headerName: 'ReadCategories',type:'bool',width: 130 },
        { field: 'WriteCategories', headerName: 'WriteCategories',type:'bool',width: 130 },
        { field: 'ReadUsers', headerName: 'ReadUsers',type:'bool',width: 100 },
        { field: 'WriteUsers', headerName: 'WriteUsers',type:'bool',width: 100 },
        
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
