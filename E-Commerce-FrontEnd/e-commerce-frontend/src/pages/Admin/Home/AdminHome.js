import React from 'react'
import FeaturedInfo from '../../../Components/Admin/FeaturedInfo/FeaturedInfo'
import Header from '../../../Components/Admin/Header/Header'
import Sidebar from '../../../Components/Admin/Sidebar/Sidebar'
import WidgetFull from '../../../Components/Admin/widgetfull/WidgetFull'
import WidgetLg from '../../../Components/Admin/widgetLg/WidgetLg'
import WidgetSm from '../../../Components/Admin/widgetSm/WidgetSm'
import './adminhome.css'
function AdminHome() {
    return (
                <div>
                <Header/>
        <div className="container">
        <Sidebar/>
        <div className="home">
                    <FeaturedInfo/>
                    <div className="homeWidgets">
                    <WidgetFull/>
                    </div>
                    <div className="homeWidgets">
                        
                    <WidgetSm/>
                    <WidgetLg/>
                
                    </div>
                </div>

        </div>
        </div>  
    )
}

export default AdminHome
