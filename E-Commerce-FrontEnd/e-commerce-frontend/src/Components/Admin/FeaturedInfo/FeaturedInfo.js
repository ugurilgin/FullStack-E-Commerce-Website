import React from 'react'
import './featured.css'
import { IoArrowUp,IoArrowDown } from "react-icons/io5";

function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
            <span className="featuredTitle">Revanue</span>
            <div className="featuredMoneyContainer">
            <span className="feauturedMoney">$2,415</span>
            <span className="feauturedMoneyRate"> - 11.4 <IoArrowDown className="featuredIcon negative"/></span>
            </div>
            <span className="featuredSub" > Compared to last month</span>
            </div>

            <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
            <span className="feauturedMoney">$2,415</span>
            <span className="feauturedMoneyRate"> - 2,5 <IoArrowUp className="featuredIcon"/></span>
            </div>
            <span className="featuredSub" > Compared to last month</span>
            </div>

         

            <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
            <span className="feauturedMoney">$1,415</span>
            <span className="feauturedMoneyRate"> - 8.4 <IoArrowDown className="featuredIcon negative"/></span>
            </div>
            <span className="featuredSub" > Compared to last month</span>
            </div>
        </div>
    )
}

export default FeaturedInfo
