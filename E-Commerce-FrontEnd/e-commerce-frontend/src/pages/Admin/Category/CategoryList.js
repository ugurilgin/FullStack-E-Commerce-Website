import {React,useState,useEffect} from 'react'
import Header from '../../../Components/Admin/Header/Header'
import Sidebar from '../../../Components/Admin/Sidebar/Sidebar'
import './categoryList.css'
import { DataGrid } from '@mui/x-data-grid';
import {RiDeleteBin6Line,RiEditLine} from 'react-icons/ri'
import { Link } from 'react-router-dom';

function CategoryList() {
  const [data,setData] = useState()
  useEffect(() => {
    fetchMyPosts();
  }, []);
  const fetchMyPosts = async () => {
    const response = await fetch("https://localhost:44324/api/Categories/");
    const json = await response.json();

    setData(json);
  };
  if (!data) return <h3>...Loading</h3>;
    const handleDelete=(id)=>{
        setData(data.filter(item => item.categoryId !==id));
        fetch('https://localhost:44324/api/Categories/' + id, {
          method: 'DELETE',
        })
        .then(res => res.text()) // or res.json()
        .then(res => console.log(res))
    };
    const columns = [
        { field: 'categoryId', headerName: 'ID', width: 15 },
        { field: 'picture', headerName: 'Picture', width: 80 ,renderCell:(params)=>{
    
            return(<div className="productListUser">
    <img className="productListImg" src={params.row.avatar}/>
    
            </div>)
        }},
        { field: 'categoryName', headerName: 'CategoryName',width: 155 },
        { field: 'description', headerName: 'Description', width: 190 },
        { field: 'active', headerName: 'Active', width: 100 },
    {field:"action",headerName:"Action",width:150,renderCell:(params)=>{
    return(
        <>
        <Link to={'/admin-categories/'+params.row.categoryId}>
        <RiEditLine className="productListEdit"/>
        </Link>
         <RiDeleteBin6Line className="productListDelete" onClick={()=>handleDelete(params.row.categoryId)}/>
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
 getRowId={(data) => data.categoryId}
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
