import React from 'react'
import Header from './Admin/Header/Header'
import Sidebar from './Admin/Sidebar/Sidebar'
import './admin.css'
import AdminHome from '../pages/Admin/Home/AdminHome'
function Admin() {
    return (
        <div>
            <Header/>
            <div className="container">
            <Sidebar/>
            <AdminHome/>
            </div>
        </div>
    )
}

export default Admin
