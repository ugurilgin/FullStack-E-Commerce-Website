import React from 'react'
import FeaturedInfo from '../../../Components/Admin/FeaturedInfo/FeaturedInfo'
import WidgetFull from '../../../Components/Admin/widgetfull/WidgetFull'
import WidgetLg from '../../../Components/Admin/widgetLg/WidgetLg'
import WidgetSm from '../../../Components/Admin/widgetSm/WidgetSm'
import './adminhome.css'
function AdminHome() {
    return (
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
    )
}

export default AdminHome
