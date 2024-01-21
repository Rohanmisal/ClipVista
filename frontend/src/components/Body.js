import React from 'react'
import SideBar from './SideBar.js'
// import Main from './MainContainer.js'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex'>
      <SideBar/>
      <Outlet/>
    </div>
  )
}

export default Body
