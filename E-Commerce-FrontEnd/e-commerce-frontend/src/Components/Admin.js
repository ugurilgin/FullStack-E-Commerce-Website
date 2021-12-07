import React from 'react'
import Header from './Admin/Header/Header'
import Sidebar from './Admin/Sidebar/Sidebar'
import './admin.css'
function Admin() {
    return (
        <div>
            <Header/>
            <div className="container">
            <Sidebar/>
            <div className="others">otherpages</div>
            </div>
        </div>
    )
}

export default Admin
