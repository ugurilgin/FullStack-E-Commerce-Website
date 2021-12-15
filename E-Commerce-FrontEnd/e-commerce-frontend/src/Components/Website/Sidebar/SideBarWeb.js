import React from 'react'
import './sidebarweb.css'
export default function SideBarWeb() {
    return (
        <aside className='flex-20 sidebar'>
           <div className='flex-wrap'>
               <span className='size active'>XS</span>
               <span className='size'>S</span>
               <span className='size'>M</span>
               <span className='size'>L</span>
               <span className='size'>XL</span>
               <span className='size'>XXL</span>
               </div> 
        </aside>
    )
}
