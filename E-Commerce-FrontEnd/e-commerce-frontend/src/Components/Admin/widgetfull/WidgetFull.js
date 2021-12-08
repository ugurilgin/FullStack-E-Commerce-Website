import React from 'react'
import './widgetfull.css'
function WidgetFull() {
    const Button=({type})=>{
        return <button className={"widgetLgButton "+type}>{type}</button>
    }
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                    <img src="https://drive.google.com/uc?export=view&id=1r_gBnfOpUHzmILerFzBeG_l7zY9QzOt4" className="widgetLgImg"/>
                         <span className="widgetLgName">Uğur Ilgın</span>
                    </td>
                    <td className="widgetLgDate">2 Jul 2021</td>
                    <td className="widgetLgAmount">$122.00</td>

                    <td className="widgetLgStatus"><Button type="Approved"/></td>

                </tr>
            </table>
        </div>
    )
}

export default WidgetFull
