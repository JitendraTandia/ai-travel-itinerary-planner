import React from 'react'
import Navbar from '../components/Navbar'
import TabNavBar from '../components/TabNavBar'

function Layout( {children} ) {
  const pathName = window.location.pathname

  return (
    <div>
        <Navbar/>
        <main className='min-h-[70vh] pt-20'> {children} 
        {pathName!=="/" && <TabNavBar/>}
        </main>

        
    </div>
  )
}

export default Layout