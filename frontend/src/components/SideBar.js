import React from 'react'
import { useSelector } from 'react-redux'

const SideBar = () => {
  const isMenuOpen= useSelector((store) => store.app.isMenuOpen);
  //Early Return Pattern
  if(!isMenuOpen) return null

  return (
    <div className='p-5 shadow-lg w-48'>
      <ul>
        <li>Home</li>
        <li>Short</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>

      <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h1 className='font-bold pt-5'>Watch later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default SideBar
