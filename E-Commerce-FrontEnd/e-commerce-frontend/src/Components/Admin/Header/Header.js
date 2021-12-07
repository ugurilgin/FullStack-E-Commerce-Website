import React from 'react'
import './admin-header.css'
import { IoIosNotifications,IoIosAirplane,IoIosSettings} from "react-icons/io";


function Header() {
    return (
        <div className="top-bar">
          <div  className="top-bar-container">
              <div className="left">
                    <span className="logo">Dashboard</span>
              </div>
              <div className="right">
                  <div className="icon-container"><IoIosNotifications color='slateblue' size = '30px'/>
                  <span className="topIconBadge">2</span></div>
                  <div className="icon-container"><IoIosAirplane color='slateblue' size = '30px'/>
                  </div>
                  <div className="icon-container"><IoIosSettings color='slateblue' size = '30px'/>
                  <img src="https://drive.google.com/uc?export=view&id=1r_gBnfOpUHzmILerFzBeG_l7zY9QzOt4" className="topAvatar" />
                  </div>
              </div>
          </div>
        </div>
    )
}

export default Header

