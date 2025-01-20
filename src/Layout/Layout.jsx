import React from 'react'
import Navbar from '../components/Navbar'
import TabNavBar from '../components/TabNavBar'
import { Outlet } from 'react-router-dom'

function Layout( ) {
  const pathName = window.location.pathname

  return (
    <div>
        <Navbar/>
        <main className='min-h-[70vh] pt-20'> {<Outlet/>} 
        {pathName!=="/" && <TabNavBar/>}
        </main>

        
    </div>
  )
}

export default Layout