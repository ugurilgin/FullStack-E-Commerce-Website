import React from 'react'
import Corousel from '../../../Components/Website/Corousel/Corousel'
import Header from '../../../Components/Website/Header/Header'
import PageArea from '../../../Components/Website/PageArea/PageArea'

import {products} from "./data.json"

function WebHomePage() {
  return (
    <div>
       <Header/>
       <Corousel/>
    <PageArea/>
    </div>
  )
}

export default WebHomePage

