import React from 'react'
import './widgetsm.css'
import { MdVisibility } from "react-icons/md";

function WidgetSm() {
    return (
        <div className="widgetSm">
            <h3 className="WidgetSmTitle">New Join Members</h3>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://drive.google.com/uc?export=view&id=1r_gBnfOpUHzmILerFzBeG_l7zY9QzOt4" className="widgetSmImg"/>
    <div className="widgetSmUser">
        <span className="widgetSmUsername">Uğur Ilgın</span>
        <span className="widgetSmUserTitle">Software Engineer</span>

    </div>
   
    <button className="widgetSmButton"> <MdVisibility className="visibility"/> Display</button>
                </li>
            </ul>
        </div>
    )
}

export default WidgetSm
