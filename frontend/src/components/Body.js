import React from 'react'
import SideBar from './SideBar.js'
import Main from './MainContainer.js'

const Body = () => {
  return (
    <div className='grid grid-flow-col'>
      <SideBar/>
      <Main/>
    </div>
  )
}

export default Body
