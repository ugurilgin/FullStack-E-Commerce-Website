
import {React,useEffect,useState} from 'react'
import { BsCalendar, BsPhone, BsQuestion } from 'react-icons/bs'
import {  IoHomeOutline, IoKeyOutline } from 'react-icons/io5'
import {   MdOutlineEmail, MdPermIdentity, MdPublish } from 'react-icons/md'
import { Link,useParams } from 'react-router-dom'
import Header from '../../../Components/Admin/Header/Header'
import Sidebar from '../../../Components/Admin/Sidebar/Sidebar'
import './users.css'
function User() {
    const params = useParams();
    const [data,setData] = useState()
    const [formValue, setformValue] = useState(
        {
            name: '',
            surname: '',
            birthDate: '',
            email:'',
            userName:'',
            password:'',
            isAdmin:'Yes',
            readOrders:'Yes',
            writeOrders:'Yes',
            readProducts:'Yes',
            writeProducts:'Yes',
            readCategories:'Yes',
            writeCategories:'Yes',
            readUsers:'Yes',
            writeUsers:'Yes',
            cookies: ''
          }
    );

  useEffect(() => {
    fetchMyPosts();
  }, []);
  const fetchMyPosts = async () => {
    const response = await fetch("https://localhost:44324/api/Users/"+params.userId);
    const json = await response.json();
console.log(params.userId)
    setData(json);
    setformValue({
        name: json.name,
        surname: json.surname,
        birthDate: json.birthDate,
        email:json.email,
        userName:json.userName,
        password:json.password,
        isAdmin: json.isAdmin===true ? 'Yes':'No',
        readOrders:json.readOrders===true ? 'Yes':'No',
        writeOrders:json.writeOrders===true ? 'Yes':'No',
        readProducts:json.readProducts===true ? 'Yes':'No',
        writeProducts:json.writeProducts===true ? 'Yes':'No',
        readCategories:json.readCategories===true ? 'Yes':'No',
        writeCategories:json.writeCategories===true ? 'Yes':'No',
        readUsers:json.readUsers===true ? 'Yes':'No',
        writeUsers:json.writeUsers===true ? 'Yes':'No',
        cookies: json.cookies
      });
  };
  if (!data) return <h3>...Loading</h3>;


  


      const handleChange = (event) => {
        setformValue({
          ...formValue,
          [event.target.name]: event.target.value
         
        });
      }

      const handleSubmit = async() => {
        // store the states in the form data
    
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "id": params.userId,
                    "createDate": "2021-12-18T14:46:41.278Z",
                    "updateDate": "2021-12-18T14:46:41.278Z",
                    "name": formValue.name,
                    "surname": formValue.surname,
                    "birthDate": formValue.birthDate,
                    "email": formValue.email,
                    "userName":formValue.userName,
                    "password": formValue.password,
                    "isAdmin":  formValue.isAdmin==='Yes'?true:false,
                    "readOrders":  formValue.readOrders==='Yes'?true:false,
                    "writeOrders":  formValue.writeOrders==='Yes'?true:false,
                    "readProducts":  formValue.readProducts==='Yes'?true:false,
                    "writeProducts":  formValue.writeProducts==='Yes'?true:false,
                    "readCategories":  formValue.readCategories==='Yes'?true:false,
                    "writeCategories":  formValue.writeCategories==='Yes'?true:false,
                    "readUsers":  formValue.readUsers==='Yes'?true:false,
                    "writeUsers":  formValue.writeUsers==='Yes'?true:false,
                    "cookies": formValue.cookies
              })
        };
        fetch('https://localhost:44324/api/Users/' + params.userId, requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));
        
      }
    return (
        
           <div>
        <Header/>
<div className="container">
<Sidebar/>
<div className="users">
<div className="userTitleContainer">
    <h1 className="userTitle">Edit User</h1>
    <Link to="/admin-newUser">
    <button className="userAddButton">Create New User</button>
    </Link>
    </div>
<div className="userContainer">
    <div className="userShow">
<div className='userShowTop'>
    <img src="https://drive.google.com/uc?export=view&id=1r_gBnfOpUHzmILerFzBeG_l7zY9QzOt4" className='userShowImg'/>
<div className='userShowTopTitle'>
<span className='userShowUsername'>{data.name} {data.surname}</span>
<span className='userShowJobTitle'>{data.isAdmin===true?'Admin':'User'}</span>
</div>
</div>
<div className='userShowBottom'>
<span className='userShowTitle'>Account Detail</span>
<div className='userShowInfo'>
<MdPermIdentity className='userShowIcon'/>
<span className='userShowInfoTitle'>{data.userName}</span>

</div>
<div className='userShowInfo'>
<BsCalendar className='userShowIcon'/>
<span className='userShowInfoTitle'>{data.birthDate}</span>

</div>
<span className='userShowTitle'>Contact Details</span>


<div className='userShowInfo'>
<MdOutlineEmail className='userShowIcon'/>
<span className='userShowInfoTitle'>{data.email}</span>

</div>
<span className='userShowTitle'>Permissions</span>

<div className='userShowInfo'>
<BsQuestion className='userShowIcon'/>
<span className='userShowInfoTitle'>Is Admin : {data.isAdmin===true?'Admin':'User'}</span>

</div>

<div className='userShowInfo'>
<BsQuestion className='userShowIcon'/>
<span className='userShowInfoTitle'>Read Orders : {data.readOrders===true?'Yes':'No'}</span>

</div>

<div className='userShowInfo'>
<BsQuestion className='userShowIcon'/>
<span className='userShowInfoTitle'>Write Orders : {data.writeOrders===true?'Yes':'No'}</span>

</div>

<div className='userShowInfo'>
<BsQuestion className='userShowIcon'/>
<span className='userShowInfoTitle'>Read Products : {data.readProducts===true?'Yes':'No'}</span>

</div>

<div className='userShowInfo'>
<BsQuestion className='userShowIcon'/>
<span className='userShowInfoTitle'>Write Products: {data.writeProducts===true?'Yes':'No'}</span>

</div>

<div className='userShowInfo'>
<BsQuestion className='userShowIcon'/>
<span className='userShowInfoTitle'>Read Categories : {data.readCategories===true?'Yes':'No'}</span>

</div>

<div className='userShowInfo'>
<BsQuestion className='userShowIcon'/>
<span className='userShowInfoTitle'>Write Categories : {data.writeCategories===true?'Yes':'No'}</span>

</div>

<div className='userShowInfo'>
<BsQuestion className='userShowIcon'/>
<span className='userShowInfoTitle'>Read Users : {data.readUsers===true?'Yes':'No'}</span>

</div>

<div className='userShowInfo'>
<BsQuestion className='userShowIcon'/>
<span className='userShowInfoTitle'>Write Users : {data.writeUsers===true?'Yes':'No'}</span>

</div>

<div className='userShowInfo'>
<IoKeyOutline className='userShowIcon'/>
<span className='userShowInfoTitle'>Auth Cookies : {data.cookies}</span>

</div>
    </div>
   
   
   
    </div>
<div className="userUpdate">
<span className='userUpdateTitle'>Edit</span>
<form className='userUpdateForm' onSubmit={handleSubmit}>
    <div className='userUpdateLeft'>
        <div className='userUpdateItem'>
            <label>Name:</label>
            <input type="text" placeholder='name' className='userUpdateInput' name='name' value={formValue.name}
        onChange={handleChange}/>
        </div>
        <div className='userUpdateItem'>
            <label>SurName:</label>
            <input type="text" placeholder='surname' className='userUpdateInput' name='surname' value={formValue.surname}
        onChange={handleChange}/>
        </div>
        <div className='userUpdateItem'>
            <label>BirthDate:</label>
            <input type="text" placeholder='birthDate' className='userUpdateInput' name='birthDate' value={formValue.birthDate}
        onChange={handleChange}/>
        </div>
        <div className='userUpdateItem'>
            <label>Email:</label>
            <input type="text" placeholder='email' className='userUpdateInput' name='email' value={formValue.email}
        onChange={handleChange}/>
        </div>
        <div className='userUpdateItem'>
            <label>Username:</label>
            <input type="text" placeholder='userName' className='userUpdateInput' name='userName' value={formValue.userName}
        onChange={handleChange}/>
        </div>
        <div className='userUpdateItem'>
            <label>Password:</label>
            <input type="text" placeholder='password' className='userUpdateInput' name='password' value={formValue.password}
        onChange={handleChange}/>
        </div>

        
    <div className='userUpdateItem'>
<label>Is Admin</label>
<select className='newUserSelect' name="isAdmin" id="isAdmin" value={formValue.isAdmin}
        onChange={handleChange}>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
</select>
</div>

<div className='userUpdateItem'>
<label>Read Orders</label>
<select className='newUserSelect' name="readOrders" id="readOrders" value={formValue.readOrders}
        onChange={handleChange}>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
</select>
</div>

<div className='userUpdateItem'>
<label>Write Orders</label>
<select className='newUserSelect' name="writeOrders" id="writeOrders" value={formValue.writeOrders}
        onChange={handleChange}>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
</select>
</div>

<div className='userUpdateItem'>
<label>Read Products</label>
<select className='newUserSelect' name="readProducts" id="readProducts" value={formValue.readProducts}
        onChange={handleChange}>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
</select>
</div>

<div className='userUpdateItem'>
<label>Write Products</label>
<select className='newUserSelect' name="writeProducts" id="writeProducts" value={formValue.writeProducts}
        onChange={handleChange}>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
</select>
</div>

<div className='userUpdateItem'>
<label>Read  Categories</label>
<select className='newUserSelect' name="readCategories" id="readCategories" value={formValue.readCategories}
        onChange={handleChange}>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
</select>
</div>

<div className='userUpdateItem'>
<label>Write Categories</label>
<select className='newUserSelect' name="writeCategories" id="writeCategories" value={formValue.writeCategories}
        onChange={handleChange}>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
</select>
</div>


<div className='userUpdateItem'>
<label>Read Users</label>
<select className='newUserSelect' name="readUsers" id="readUsers" value={formValue.readUsers}
        onChange={handleChange}>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
</select>
</div>

<div className='userUpdateItem'>
<label>Write Users</label>
<select className='newUserSelect' name="writeUsers" id="writeUsers" value={formValue.writeUsers}
        onChange={handleChange}>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
</select>
</div>

<div className='userUpdateItem'>
    <label>Auth Cookies</label>
    <input name='cookies'  className='userUpdateInput' type="text" placeholder='cookies' value={formValue.cookies}
        onChange={handleChange}/>
        <br/>
        
        <button type="submit" className='userUpdateButton'>Update</button>
    </div>

    </div>
   
</form>




</div>
</div>
        </div>

</div>
</div>  
       
    )
}

export default User

